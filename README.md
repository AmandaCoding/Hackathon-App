# Mobile Webpage Hackathon

## Overview
This project is a mobile webpage designed for a hackathon submission that includes various functionalities such as alarms, timers, stopwatches, and weather information. The webpage adapts its features based on the device's orientation, providing a user-friendly experience.

## Features
- **Alarm Functionality**: Set, name, and choose sounds for alarms. The alarm settings are displayed in portrait mode.
- **Timer Functionality**: Set timers with options to pause, reset, name, and choose sounds. This feature is accessible when the device is flipped upside down.
- **Stopwatch Functionality**: Start, pause, and stop the stopwatch. This feature is available in landscape mode.
- **Weather Information**: Fetch and display weather data using a weather API, defaulting to New Delhi. This feature is also available in landscape mode.

## Project Structure
```
mobile-webpage-hackathon
├── src
│   ├── assets
│   │   └── styles.css
│   ├── components
│   │   ├── Alarm.js
│   │   ├── Timer.js
│   │   ├── Stopwatch.js
│   │   └── Weather.js
│   ├── utils
│   │   └── api.js
│   ├── index.html
│   └── main.js
├── package.json
└── README.md
```

## Setup Instructions
1. Clone the repository to your local machine.
2. Navigate to the project directory.
3. Install the necessary dependencies using npm:
   ```
   npm install
   ```
4. Open `src/index.html` in a web browser to view the project.

## Usage Guidelines
- Rotate your device to switch between functionalities:
  - Portrait mode for alarms.
  - Upside down for timers.
  - Landscape mode for stopwatch and weather information.
- Follow the on-screen instructions to set alarms, timers, and fetch weather data.

## Acknowledgments
This project was developed as part of a hackathon event, showcasing the integration of various web technologies to create a functional and interactive mobile webpage.