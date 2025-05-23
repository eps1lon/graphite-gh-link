# Ergonomic way to view Graphite PRs on GitHub

Because "more actions" > Copy link to GitHub is not boomer compatible.

![Screenshot of the button](./example.png)

## Installation

Since this extension isn't published on the Chrome Web Store, you'll need to install it in developer mode:

1. **Download the extension files**

   - Clone this repository or download and extract the ZIP file to a folder on your computer

2. **Open Chrome's Extension Management page**

   - Navigate to `chrome://extensions/` in your Chrome browser
   - Or use the menu: Chrome menu → More Tools → Extensions

3. **Enable Developer Mode**

   - Toggle the "Developer mode" switch in the top right corner of the Extensions page

4. **Load the Extension**

   - Click the "Load unpacked" button that appears after enabling Developer mode
   - Browse to the folder containing the extension files (where manifest.json is located)
   - Select the folder

5. **Verify Installation**
   - The extension should now appear in your list of installed extensions
   - You should see "Graphite to GitHub PR Link" in the list

## Usage

1. Navigate to any PR on Graphite (URLs that match `https://app.graphite.dev/github/pr/*/*`)
2. The extension will automatically add a green "View on GitHub" button next to the "More actions" button
   ![Screenshot of the button](./example.png)
3. Click the button to open the corresponding GitHub PR in a new tab

## Credits

Created via https://v0.dev/chat/chrome-extension-for-graphite-d06WmRg4Mkk
