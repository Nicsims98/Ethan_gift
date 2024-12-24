# Call of Duty Web App

## Overview
The Call of Duty Web App is a single-page application that allows users to immerse themselves in a custom Call of Duty experience. The app features interactive level design, enemies to defeat, and is playable on both mobile and web interfaces.

## Features
- **Interactive Level Design**: Users can interact with the game environment.
- **Enemies to Defeat**: Engage in combat with enemies.
- **Mobile and Web Compatibility**: Playable on both mobile and web interfaces.

## Project Structure
```
call-of-duty-web-app
├── src
│   ├── assets
│   │   ├── css
│   │   │   └── styles.css
│   │   ├── js
│   │   │   └── scripts.js
│   ├── components
│   │   ├── game.js
│   │   ├── level.js
│   │   └── enemy.js
│   ├── index.html
│   └── styles
│       └── main.css
├── package.json
├── README.md
└── webpack.config.js
```

## Setup Instructions
1. Clone the repository:
   ```sh
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```sh
   cd call-of-duty-web-app
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```

## Usage Instructions
1. Start the development server:
   ```sh
   npm start
   ```
2. Open your browser and navigate to `http://localhost:9000` to view the app.

## API Integration
The app uses the Foony2 API to create a game room dynamically. Ensure you have a valid API key and update the `api.js` file with your key:
```javascript
.setHeader("x-rapidapi-key", "YOUR_API_KEY")
```

## Contribution Guidelines
1. Fork the repository.
2. Create a new branch (`git checkout -b feature-branch`).
3. Make your changes and commit them (`git commit -m 'Add new feature'`).
4. Push to the branch (`git push origin feature-branch`).
5. Create a new Pull Request.

## License
This project is licensed under the MIT License.
