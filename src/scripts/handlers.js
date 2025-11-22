// src/scripts/handlers.js

import { generateAIPlan } from './generator.js';
import { renderFullNutritionPlan } from './renderer.js';

export function setupEventHandlers() {
  document.getElementById('generateBtn').addEventListener('click', async () => {
    const generateBtn = document.getElementById('generateBtn');
    const statusMessage = document.getElementById('statusMessage');
    const originalText = generateBtn.textContent;

    try {
      generateBtn.textContent = 'Generating Your Plan...';
      generateBtn.disabled = true;
      statusMessage.textContent = 'Creating your personalized nutrition plan...';
      statusMessage.className = 'warning';

      const userInputs = {
        dietType: document.getElementById('dietType').value,
        allergies: document.getElementById('allergies').value.split(',').map(s => s.trim()).filter(Boolean),
        dislikes: document.getElementById('dislikes').value.split(',').map(s => s.trim()).filter(Boolean),
        budgetLevel: document.getElementById('budgetLevel').value,
        cookTime: parseInt(document.getElementById('cookTime').value, 10),
        goal: document.getElementById('goal').value
      };

      const planData = await generateAIPlan(userInputs);
      statusMessage.textContent = 'Plan generated successfully!';
      statusMessage.className = 'success';
      renderFullNutritionPlan(planData);

    } catch (error) {
      console.error('Error generating plan:', error);
      statusMessage.textContent = 'Error generating plan. Please try again.';
      statusMessage.className = 'danger';
    } finally {
      generateBtn.textContent = originalText;
      generateBtn.disabled = false;
    }
  });

  document.getElementById('clearBtn').addEventListener('click', () => {
    document.getElementById('dietType').value = 'balanced';
    document.getElementById('allergies').value = '';
    document.getElementById('dislikes').value = '';
    document.getElementById('budgetLevel').value = 'medium';
    document.getElementById('cookTime').value = '30';
    document.getElementById('goal').value = 'generalHealth';
    document.getElementById('statusMessage').textContent = '';

    document.getElementById('plan').innerHTML = 
      '<p class="muted">Fill out your preferences and click "Generate My Meal Plan" to get started.</p>';
  });
}