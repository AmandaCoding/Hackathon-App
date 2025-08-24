// This file serves as the entry point for the JavaScript functionality of the mobile webpage project.
// It initializes the components and handles screen orientation changes to display the appropriate functions.

import Alarm from './components/Alarm.js';
import Timer from './components/Timer.js';
import Stopwatch from './components/Stopwatch.js';
import Weather from './components/Weather.js';

const alarm = new Alarm();
const timer = new Timer();
const stopwatch = new Stopwatch();
const weather = new Weather();

function handleOrientationChange() {
    if (window.innerHeight > window.innerWidth) {
        // Portrait mode: Show Alarm and Timer
        document.getElementById('alarm-section').style.display = 'block';
        document.getElementById('timer-section').style.display = 'block';
        document.getElementById('stopwatch-section').style.display = 'none';
        document.getElementById('weather-section').style.display = 'none';
    } else {
        // Landscape mode: Show Stopwatch and Weather
        document.getElementById('alarm-section').style.display = 'none';
        document.getElementById('timer-section').style.display = 'none';
        document.getElementById('stopwatch-section').style.display = 'block';
        document.getElementById('weather-section').style.display = 'block';
    }
}

window.addEventListener('resize', handleOrientationChange);
window.addEventListener('load', handleOrientationChange);