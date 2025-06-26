# Pocket Link Viewer

Pocket Link Viewer is a simple web app for browsing, viewing, and managing a list of links (such as exported from Pocket or other sources) stored in a CSV file. You can view, sort, and delete links through a modern, interactive web interface.

## Features
- View links from a CSV file in a sortable, searchable table
- Sort links by date (ascending/descending)
- Delete links from the list (removes from CSV)
- View detailed information for each link
- Mobile-friendly, clean UI

## Installation

1. **Clone this repository** (or copy the files to your local machine):
   ```bash
   git clone <your-repo-url>
   cd pocket-link-viewer
   ```
2. **Install dependencies** (requires [Node.js](https://nodejs.org/) 16+):
   ```bash
   npm install express csv-parse
   ```
   (If you don't have a `package.json`, you can run:)
   ```bash
   npm init -y
   npm install express csv-parse
   ```

## Usage

1. **Prepare your CSV file**
   - The default expected CSV file is `part_000000.csv` in the project directory.
   - You can specify a different CSV file when starting the server (see below).
   - The CSV should have columns: `title`, `url`, `time_added`, `tags`, `status`.

2. **Start the server**
   ```bash
   node server.js [your-csv-file.csv]
   ```
   - If you omit the filename, it will use `part_000000.csv` by default.
   - Example:
     ```bash
     node server.js my_links.csv
     ```

3. **Open your browser**
   - Go to [http://localhost:3008](http://localhost:3008)
   - You will see your links loaded from the CSV file.

4. **Interact**
   - Use the "Sort by Date" button (next to the header) to toggle sorting order.
   - Click a link to highlight it.
   - Use the delete button to remove a link (this updates the CSV file).

## Notes
- The app modifies the CSV file directly when links are deleted.
- Make sure your CSV is UTF-8 encoded.
- For large CSV files, performance may vary.

## License
MIT (or specify your preferred license)
