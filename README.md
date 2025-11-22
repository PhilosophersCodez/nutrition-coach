# Nutrition Coach

A privacy-first, client-side nutrition guidance and meal planning web application. Generate personalized meal plans based on your dietary preferences, allergies, and health goals—without sharing your data.

## 🎯 Features

- **Personalized Meal Plans**: Generate customized 2-day meal plans based on your preferences
- **Privacy-First**: All processing happens in your browser. No data is stored or sent to servers
- **Dietary Flexibility**: Support for multiple diet types:
  - Balanced
  - Vegetarian
  - Vegan
  - Pescatarian
  - Mediterranean
  - Halal
  - Kosher
- **Allergy & Dislike Filtering**: Automatically filters meals based on your restrictions
- **Educational Content**: Includes nutrition tips and practical daily nudges
- **Responsive Design**: Works on desktop, tablet, and mobile devices

## 🚀 Quick Start

### Prerequisites
- Node.js 14+ (for development server)
- Modern web browser

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/nutrition-coach.git
   cd nutrition-coach
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

4. Open your browser and navigate to `http://localhost:8080`

### Usage Without Server

You can also open `src/index.html` directly in your browser without running a server.

## 📁 Project Structure

```
nutrition-coach/
├── src/
│   ├── index.html           # Main HTML file
│   ├── scripts/
│   │   ├── main.js          # App initialization
│   │   ├── generator.js     # Meal plan generation logic
│   │   ├── renderer.js      # DOM rendering functions
│   │   └── handlers.js      # Event handlers
│   ├── styles/
│   │   ├── variables.css    # CSS custom properties & theming
│   │   ├── layout.css       # Layout structure
│   │   ├── components.css   # Component styles
│   │   └── theme.css        # Theme & global styles
│   └── assets/
│       └── favicon.ico      # App favicon
├── package.json             # Dependencies & scripts
├── README.md               # This file
└── LICENSE                 # MIT License
```

## Installation
1. Clone the repository:
   ```
   git clone https://github.com/yourusername/nutrition-coach.git
   ```
2. Navigate to the project directory:
   ```
   cd nutrition-coach
   ```
3. Install dependencies:
   ```
   npm install
   ```

## Usage
1. Open `src/index.html` in your web browser.
2. Fill out your dietary preferences, allergies, and goals.
3. Click "Generate My Meal Plan" to receive a personalized meal plan.

## Contributing
Contributions are welcome! Please fork the repository and submit a pull request with your changes.

## License
This project is licensed under the MIT License. See the LICENSE file for details.