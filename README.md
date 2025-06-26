# Pocket Link Viewer

The Mozilla Pocket app is no longer available, but you can still export your links to a CSV file on your local computer. Pocket Link Viewer is a simple web app that allows you to view these links and the webpages they link to. They can be displayed in ascending or descending order by date added. Clicking on a link will highlight it in the list and open it in a new tab. When you delete a link it will be removed from the list and the CSV file.

This web app was written almost entirely by an AI coding assistant as a result of an incremental series of prompts that I provided. I modified the README.md file to add some information about the app and correct the installation instructions.

The app uses Node.js to serve the web page, so you will need to have Node.js installed to run it. When the server is running on your local machine you should be able to access the webpage at `http://localhost:3008`.

## Features
- View links from the CSV file in a sortable table
- Sort links by date (ascending/descending)
- Open links in a new tab
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
   - If you omit the filename, it will use `part_000000.csv` by default and will look for it in the project directory.
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

## PM2
If you are using a Linux or macOS system and want to have the server always running in the background, you can use PM2 (Process Manager 2). Install PM2 with `npm install -g pm2` and then run `pm2 start ecosystem.config.js`.

## Notes
- The app modifies the CSV file directly when links are deleted.
- Make sure your CSV is UTF-8 encoded.
- For large CSV files, performance may vary.

## License
MIT
