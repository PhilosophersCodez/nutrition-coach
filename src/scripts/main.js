// src/scripts/main.js

import { setupEventHandlers } from './handlers.js';

async function init() {
  setupEventHandlers();
}

// Initialize the application
window.addEventListener('DOMContentLoaded', init);