// src/scripts/renderer.js
export function renderFullNutritionPlan(planData) {
  const planEl = document.getElementById('plan');
  planEl.innerHTML = '';
  
  if (!planData.mealPlan.length || planData.mealPlan.every(day => day.meals.length === 0)) {
    planEl.innerHTML = `
      <div class="warning-message">
        <h3>⚠️ No Suitable Meals Found</h3>
        <p>We couldn't create a meal plan that avoids your listed restrictions. Please adjust your allergies or dislikes and try again.</p>
      </div>
    `;
    return;
  }
  
  const mealSection = document.createElement('div');
  mealSection.innerHTML = '<h3>📅 Your Meal Plan</h3>';
  
  planData.mealPlan.forEach(day => {
    const dayEl = document.createElement('div');
    dayEl.className = 'meal-day';
    dayEl.innerHTML = `<h4>${day.title}</h4>`;
    
    if (day.meals.length === 0) {
      dayEl.innerHTML += '<p class="muted">No suitable meals found for this day with your current restrictions.</p>';
    } else {
      day.meals.forEach(meal => {
        dayEl.innerHTML += `
          <div class="meal-item">
            <span class="meal-time">${meal.time}</span>
            <p><strong>${meal.name}</strong></p>
            <p class="meal-why">${meal.why}</p>
            <p><span class="pill">${meal.macros}</span> Fiber-forward choices</p>
          </div>
        `;
      });
    }
    mealSection.appendChild(dayEl);
  });
  planEl.appendChild(mealSection);

  const educationSection = document.createElement('div');
  educationSection.className = 'section';
  educationSection.innerHTML = `
    <h3>💡 Nutrition Education</h3>
    <ul class="tips-list">
      ${planData.education.map(tip => `<li>${tip}</li>`).join('')}
    </ul>
  `;
  planEl.appendChild(educationSection);

  const nudgeSection = document.createElement('div');
  nudgeSection.className = 'section';
  nudgeSection.innerHTML = '<h3>🔄 Daily Nudges</h3>';
  
  planData.nudges.forEach(nudge => {
    nudgeSection.innerHTML += `
      <div class="nudge-item">
        ${nudge}
      </div>
    `;
  });
  planEl.appendChild(nudgeSection);

  const transparencySection = document.createElement('div');
  transparencySection.className = 'section';
  transparencySection.innerHTML = `
    <h3>🔍 Transparency</h3>
    <p>${planData.transparency}</p>
  `;
  planEl.appendChild(transparencySection);

  const safetySection = document.createElement('div');
  safetySection.className = 'success-message';
  safetySection.innerHTML = `
    <h3>✅ Safety Confirmation</h3>
    <p>${planData.safety}</p>
  `;
  planEl.appendChild(safetySection);
}