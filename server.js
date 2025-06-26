const express = require('express');
const fs = require('fs');
const path = require('path');
const { parse } = require('csv-parse/sync');

const app = express();
const PORT = 3008;
// Allow specifying the CSV filename from the command line
const csvFilename = process.argv[2] || 'part_000000.csv';
const CSV_PATH = path.join(__dirname, csvFilename);

let links = [];

function loadLinks() {
  const fileContent = fs.readFileSync(CSV_PATH, 'utf8');
  links = parse(fileContent, {
    columns: true,
    skip_empty_lines: true
  });
}

loadLinks();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve static files from the public directory
app.use(express.static(path.join(__dirname, 'public')));

// API endpoint to get all links as JSON
app.get('/api/links', (req, res) => {
  res.json(links);
});


app.get('/link/:id', (req, res) => {
  const idx = parseInt(req.params.id, 10);
  const link = links[idx];
  if (!link) return res.status(404).send('Link not found');
  res.send(`
    <html>
      <head>
        <title>${link.title || link.url}</title>
      </head>
      <body>
        <h1>${link.title || '(no title)'}</h1>
        <p><strong>URL:</strong> <a href="${link.url}" target="_blank">${link.url}</a></p>
        <p><strong>Added:</strong> ${new Date(Number(link.time_added) * 1000).toLocaleString()}</p>
        <p><strong>Tags:</strong> ${link.tags || '(none)'}</p>
        <p><strong>Status:</strong> ${link.status}</p>
        <p><a href="/">&larr; Back to all links</a></p>
      </body>
    </html>
  `);
});

// Helper to write the current links to the CSV file
function saveLinksToCSV() {
  if (!links.length) return;
  const header = Object.keys(links[0]).join(',');
  const data = links.map(link =>
    [link.title, link.url, link.time_added, link.tags, link.status].map(v => {
      // Quote if value contains comma or quote
      if (typeof v === 'string' && (v.includes(',') || v.includes('"'))) {
        return '"' + v.replace(/"/g, '""') + '"';
      }
      return v ?? '';
    }).join(',')
  );
  fs.writeFileSync(CSV_PATH, header + '\n' + data.join('\n'), 'utf8');
}

app.post('/delete/:id', (req, res) => {
  const idx = parseInt(req.params.id, 10);
  if (isNaN(idx) || idx < 0 || idx >= links.length) {
    return res.status(400).send('Invalid index');
  }
  links.splice(idx, 1);
  saveLinksToCSV();
  res.sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Pocket Link Browser running at http://localhost:${PORT}`);
  console.log(`Using CSV file: ${CSV_PATH}`);
});
