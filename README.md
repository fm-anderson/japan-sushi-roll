# Japan Sushi Roll Menu App

## Overview

The Japan Sushi Roll Menu App is a web application designed to streamline the presentation of a restaurant's menu directly from a Google Spreadsheet. This project exemplifies a practical use case of leveraging Google Sheets as a simplistic, yet effective database for applications where high levels of privacy and security are not required. It's an ideal solution for small to medium-sized restaurants looking to digitize their menu offerings without the overhead of complex database management systems.

[Spreadsheet](https://docs.google.com/spreadsheets/d/1H7EqjV7eZJ4MOwH4yO1xs4rtn_NdK0pqxNlv1pJHUyU/)

## Features

- **Dynamic Menu Display:** Automatically fetches and updates the menu items from a Google Spreadsheet, ensuring the menu is always current without needing to manually update the app.
- **Mobile-First Design:** The app is designed with a mobile-first approach, ensuring optimal usability and experience on smartphones and tablets. While a desktop view is not yet available, the app provides a seamless user experience across mobile devices.
- **Interactive UI Components:** Includes features like a modal cart for orders, hours of operation display, detailed item descriptions, and social media integration, enhancing user engagement.
- **Simplified Backend:** Utilizes Google Sheets as a backend database, making it easy for non-technical staff to update menu items, prices, and descriptions.

## Tech Stack

- **Frontend:** Vite, React, TailwindCSS, DaisyUI
- **Backend:** Google Sheets, Javascript, Apps Script
- **Deployment:** Netlify, Apps Script

## Setup Instructions

1. **Clone the repository:**

```bash
git clone https://github.com/fm-anderson/japan-sushi-roll.git
cd japan-sushi-roll
```

2. **Install dependencies:**

```bash
npm install
```

3. **Create a `.env` file**

```env
VITE_BASE_URL=apps-script-endpoint-url-from-google-sheets
```

4. **Configure Google Sheets API:**

   - Follow my [Google Sheets Integration Guide](https://github.com/fm-anderson/japan-sushi-roll/blob/main/GOOGLE_SHEETS_INTEGRATION.md)
   - Update `.env` with your Apps Script URL

5. **Start the application:**

```bash
npm run dev
```

6. **Visit the application:**
   - Navigate to `http://localhost:5173` to view the app.

## Deployment

To deploy the Japan Sushi Roll Menu App, follow these steps:

1. Build the app for production:

```bash
npm run build
```

2. Deploy the `build` folder to a static hosting service like Netlify, Vercel, or GitHub Pages.

## Contributing

Contributions are welcome! If you'd like to contribute, please fork the repository and use a feature branch. Pull requests are always welcomed.

I am looking for contributions towards developing a desktop version of the Japan Sushi Roll Menu App. If you are interested in contributing, please fork the repository, create your feature branch, and submit a pull request. I appreciate your contributions towards making this app more accessible and user-friendly across all devices.

## License

This project is licensed under the MIT License - see the [LICENSE.md](https://github.com/fm-anderson/japan-sushi-roll?tab=MIT-1-ov-file) file for details.
