# Google Sheets Integration Guide

## Links

- **Apps Script Docs:** https://developers.google.com/apps-script/reference/spreadsheet
- **Spreadsheet Example:** https://docs.google.com/spreadsheets/d/1H7EqjV7eZJ4MOwH4yO1xs4rtn_NdK0pqxNlv1pJHUyU/

## Introduction

This guide provides detailed instructions for integrating Google Sheets as a simple, flexible backend for projects, using the Japan Sushi Roll Menu App as an example. Google Sheets allows for real-time data updates with minimal technical overhead, ideal for applications without stringent privacy requirements, like a dynamic restaurant menu.

## Setting up Google Sheets

1. **Create a Google Sheet:** Start by creating a new Google Sheet to serve as your database.
2. **Structure Your Data:** Designate each column for different attributes.
3. **See Example:** [Spreadsheet Example](https://docs.google.com/spreadsheets/d/1H7EqjV7eZJ4MOwH4yO1xs4rtn_NdK0pqxNlv1pJHUyU/).

## Google Apps Script

1. **Access Script Editor:**

- In your Google Sheet, go to `Extensions` > `Apps Script` to open the script editor.

2. **Create doGet Function:**

```javascript
// Google Apps Script for Japan Sushi Roll Menu App

function doGet() {
  // Access the active spreadsheet and the sheet named 'your-sheet-name'
  const doc = SpreadsheetApp.getActiveSpreadsheet();
  const sheet = doc.getSheetByName("your-sheet-name");

  // Retrieve values from the sheet, starting from row 3 to avoid headers
  const values = sheet
    .getRange(3, 1, sheet.getLastRow() - 1, sheet.getLastColumn())
    .getDisplayValues();

  // Initialize arrays for menus, hours, and items, and an object for the featured item
  let menus = [];
  let hours = [];
  let items = [];
  let featuredItem = {};

  // Keys for the featured item object
  const featuredKeys = [
    "title",
    "desc",
    "price",
    "discount",
    "image",
    "action",
    "actionLink",
  ];

  // Iterate through each row to populate items, hours, menus, and the featured item
  values.forEach((row, index) => {
    // Check if the row contains item data
    if (row.slice(0, 5).some((value) => value !== "")) {
      items.push({
        id: row[0],
        menu: row[1],
        name: row[2],
        price: row[3],
        pieces: row[4],
        desc: row[5],
        image: row[6],
      });

      // Populate the featured item object based on the row's index
      if (index < featuredKeys.length) {
        featuredItem[featuredKeys[index]] = row[9];
      }

      // Add operational hours if present
      if (row[11] !== "") {
        hours.push({
          day: row[11],
          from: row[12],
          to: row[13],
        });
      }

      // Add menu categories
      if (row[15] !== "") {
        menus.push(row[15]);
      }
    }
  });

  // Compile the result object containing all the data
  const result = {
    items: items,
    featured: featuredItem,
    hours: hours,
    menus: menus.filter((menu) => menu !== ""), // filter out empty values
  };

  // Return the result as a JSON object
  return ContentService.createTextOutput(
    JSON.stringify({ data: result })
  ).setMimeType(ContentService.MimeType.JSON);
}
```

3. **Deploy as Web App:**

- In the Apps Script editor, click `Deploy` → `New deployment`.
- Select `Web app` and set the access permissions as executing the app as yourself and accessible to anyone.

4. **Access URL:**

- Once deployed, you will receive a URL to your web app. This URL serves as the endpoint from which your application can request data.

## Integrating with Your Application

1. **Fetch Data:**

- Use the provided URL in your application to fetch data from your Google Sheet.
- Example fetch request in JavaScript:

```javascript
fetch("YOUR_WEB_APP_URL")
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
    // Process and display your data in the app
  });
```

2. **Update and Retrieve Data:**

- To update your data, simply make changes directly in the Google Sheet. Your app will retrieve the updated data on the next fetch request.
- For more advanced operations like adding or deleting rows, you would need to extend your Apps Script functionality and possibly implement additional API methods.

## Best Practices

- **Security:** Be mindful of the data you store in Google Sheets, as the script makes it publicly accessible through your web app's endpoint.
- **Caching:** Implement caching strategies to reduce the number of requests to the Google Sheets API, improving your app's performance.
- **Error Handling:** Include error handling in your fetch requests to manage cases where data might not be accessible.

## Conclusion

Using Google Sheets as a backend offers a quick, easy-to-manage solution for dynamic data applications like the Japan Sushi Roll Menu App example. By following the steps outlined in this guide, you can leverage [Google Sheets](https://sheets.google.com/) for your projects, benefiting from its flexibility and ease of use.

For further customization and support, consider exploring [Google Apps Script documentation](https://developers.google.com/apps-script/reference/spreadsheet) and the broader developer community resources.
