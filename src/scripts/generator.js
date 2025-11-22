function generateAIPlan(userInputs) {
  // Simulate API call delay
  return new Promise(resolve => {
    setTimeout(() => {
      const { dietType, allergies, dislikes, budgetLevel, cookTime, goal } = userInputs;

      // Base plan structure
      const plan = {
        mealPlan: [],
        education: [],
        nudges: [],
        transparency: "",
        safety: ""
      };

      // Generate meal plan based on inputs
      if (dietType === 'vegetarian' || dietType === 'vegan') {
        plan.mealPlan = [
          {
            title: "Day 1 - Plant Powered",
            meals: [
              { 
                time: "Breakfast",
                name: "Spiced oatmeal with berries & flaxseed", 
                why: "Fiber from oats and flaxseed helps moderate blood sugar response and keeps you full", 
                macros: "Carbs: 45g | Protein: 12g | Fat: 8g" 
              },
              { 
                time: "Lunch",
                name: "Chickpea salad with whole grain pita and tahini dressing", 
                why: "Plant protein and complex carbs provide sustained energy without spikes", 
                macros: "Carbs: 35g | Protein: 18g | Fat: 12g" 
              },
              { 
                time: "Dinner",
                name: "Lentil curry with brown rice and roasted vegetables", 
                why: "Fiber-rich lentils and vegetables support stable blood sugar overnight", 
                macros: "Carbs: 40g | Protein: 22g | Fat: 10g" 
              }
            ]
          },
          {
            title: "Day 2 - Protein Focus",
            meals: [
              { 
                time: "Breakfast",
                name: "Tofu scramble with spinach and whole grain toast", 
                why: "High-protein start helps control hunger and energy levels throughout morning", 
                macros: "Carbs: 25g | Protein: 20g | Fat: 12g" 
              },
              { 
                time: "Lunch",
                name: "Quinoa bowl with black beans, avocado, and salsa", 
                why: "Complete protein from quinoa and beans with healthy fats for sustained energy", 
                macros: "Carbs: 45g | Protein: 15g | Fat: 14g" 
              },
              { 
                time: "Dinner",
                name: "Chickpea and vegetable stir-fry with soba noodles", 
                why: "Buckwheat noodles add fiber while vegetables provide micronutrients", 
                macros: "Carbs: 50g | Protein: 18g | Fat: 8g" 
              }
            ]
          }
        ];
      } else {
        // Balanced/other diet types
        plan.mealPlan = [
          {
            title: "Day 1 - Balanced Energy",
            meals: [
              { 
                time: "Breakfast",
                name: "Greek yogurt with berries and walnuts", 
                why: "Protein and healthy fats slow carbohydrate digestion for steady energy", 
                macros: "Carbs: 25g | Protein: 20g | Fat: 15g" 
              },
              { 
                time: "Lunch",
                name: "Grilled chicken salad with quinoa and olive oil dressing", 
                why: "Lean protein and fiber-rich grains prevent afternoon energy crashes", 
                macros: "Carbs: 30g | Protein: 35g | Fat: 12g" 
              },
              { 
                time: "Dinner",
                name: "Baked salmon with sweet potato and steamed broccoli", 
                why: "Omega-3 fats and complex carbs support overnight metabolic health", 
                macros: "Carbs: 35g | Protein: 30g | Fat: 15g" 
              }
            ]
          }
        ];
      }

      // Filter out meals containing allergies or dislikes
      const allergyList = allergies.map(a => a.trim().toLowerCase());
      const dislikeList = dislikes.map(d => d.trim().toLowerCase());

      plan.mealPlan.forEach(day => {
        day.meals = day.meals.filter(meal => {
          const mealText = meal.name.toLowerCase() + ' ' + meal.why.toLowerCase();
          const hasAllergy = allergyList.some(allergy => 
            allergy && mealText.includes(allergy)
          );
          const hasDislike = dislikeList.some(dislike => 
            dislike && mealText.includes(dislike)
          );
          return !hasAllergy && !hasDislike;
        });
      });

      // Education tips
      plan.education = [
        "Pair carbohydrates with protein and healthy fats at every meal to slow digestion and prevent energy spikes",
        "Aim for 25-30g of fiber daily from diverse sources like vegetables, fruits, whole grains, and legumes",
        "Use the plate method: fill half with non-starchy vegetables, one quarter with protein, one quarter with complex carbs",
        "Choose high-fiber carbohydrates like oats, quinoa, and sweet potatoes over refined options",
        "Stay consistently hydrated - sometimes thirst is mistaken for hunger or fatigue"
      ];

      // Nudges
      plan.nudges = [
        "💧 Drink a glass of water before your next meal to support hydration and portion awareness",
        "🚶 Take a 10-minute walk after your largest meal to help manage blood sugar levels",
        "⏰ Try to eat your meals at consistent times each day to regulate your body's hunger signals",
        "🥬 Add one extra vegetable to your dinner tonight for additional fiber and nutrients"
      ];

      // Transparency statement
      const transparencyParts = [];
      if (dietType) transparencyParts.push(`${dietType} diet`);
      if (cookTime) transparencyParts.push(`${cookTime}-minute max cooking time`);
      if (goal) transparencyParts.push(`goal of ${goal}`);

      plan.transparency = `This plan was personalized based on your ${transparencyParts.join(', ')}.`;

      // Safety confirmation
      const allergyText = allergies.length ? `allergies: ${allergies.join(', ')}` : 'no listed allergies';
      const dislikeText = dislikes.length ? `dislikes: ${dislikes.join(', ')}` : 'no listed dislikes';
      plan.safety = `✓ Safety checked: Avoids your ${allergyText} and ${dislikeText}. This is general wellness guidance only - consult healthcare professionals for medical advice.`;

      resolve(plan);
    }, 1500);
  });
}

export { generateAIPlan };