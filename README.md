# Pocket Link Viewer

The Mozilla Pocket app is no longer available, but you can still export your links to a CSV file on your local computer. Pocket Link Viewer is a simple web app that allows you to view these links. They can be displayed in ascending or descending order by date added. Clicking on a link will highlight it in the list and open it in a new tab. When you delete a link, it will be removed from the list and the CSV file.

This app uses Node.js and Express to serve the web page and csv-parse to parse the CSV file, so you will need to have Node.js installed to run it. When the server is running on your local machine, you can access the webpage at `http://localhost:3008`.

## Features
- View links from the CSV file in a sortable table
- Sort links by date (ascending/descending)
- Delete links from the list (removes from CSV)
- Mobile-friendly, clean UI

## Installation

1. **Clone this repository** (or copy the files to your local machine):
   ```bash
   cd pocket-link-viewer
   ```
2. **Install dependencies** (requires [Node.js](https://nodejs.org/) 16+):
   ```bash
   npm install
   ```

## Usage

1. **Prepare your CSV file**
   - The default expected CSV file is `part_000000.csv` in the project directory. This is the file that is created when you export your links from Pocket.
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
MIT
