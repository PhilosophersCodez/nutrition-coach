// src/scripts/main.js

import { generateAIPlan } from './generator.js';
import { renderFullNutritionPlan } from './renderer.js';
import { setupEventHandlers } from './handlers.js';

async function init() {
  setupEventHandlers();
}

// Initialize the application
window.addEventListener('DOMContentLoaded', init);