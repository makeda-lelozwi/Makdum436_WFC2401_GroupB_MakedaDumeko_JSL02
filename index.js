const welcomeMessage = () => {
  const today = new Date().toDateString();
  document.getElementById('welcomeMessage').textContent = `🤸🏾‍♀️ Welcome to Your Fitness Tracker 🥗 Today is ${today}`;
};
welcomeMessage();

const displayWorkoutRoutine = () => {
  const workoutInput = document.querySelector('#workoutInput').value;
  const workoutList = document.querySelector('#workoutList');
  const newWorkout = document.createElement('li');
  newWorkout.textContent = workoutInput;
  workoutList.appendChild(newWorkout);
};

document.querySelector('#submitWorkout').addEventListener('click', displayWorkoutRoutine);

//Goals 

const addNewGoal = () => {
  const goalInput = document.getElementById("goalInput").value;
  const goalList = document.getElementById("goalList");
  
  let isDuplicate = false; 

  goalList.querySelectorAll("li").forEach(goalList => {
    if (goalList.textContent.trim() === goalInput) {
      isDuplicate = true;
      alert("This goal already exists.")
      preventDefault(); //used preventDefault() because return wasn't working 
    } 
  })
  
  const newGoal = document.createElement('li');
  newGoal.textContent = goalInput;
  goalList.appendChild(newGoal);

  newGoal.addEventListener("click", ()=> {
    goalList.removeChild(newGoal);
  })  
};

// Add event listener to the goal submit button
document.querySelector('#submitGoal').addEventListener('click', addNewGoal);

///Water Intake Tracker
let waterIntake = 0;
const updateWaterIntake = (change) => {
  waterIntake += change;
  document.querySelector('#waterIntakeDisplay').textContent = `${waterIntake} glasses 💦`;
};

document.querySelector('#increaseWater').addEventListener('click', () => updateWaterIntake(1));
document.querySelector('#decreaseWater').addEventListener('click', () => updateWaterIntake(-1));

const updateProgressCharts = () => {
  document.querySelector('#workoutProgress').textContent = "Updated workout progress...";
  document.querySelector('#calorieIntakeProgress').textContent = "Updated calorie intake progress...";
};

updateProgressCharts();

const toggleTheme = () => {
  document.body.classList.toggle('dark-theme');
};

document.querySelector('#themeToggle').addEventListener('click', toggleTheme);

const submitMealPlan = (event) => {
  event.preventDefault(); 
  alert('Meal plan submitted successfully! 🍴');
};

document.querySelector('#mealPlanForm').addEventListener('submit', submitMealPlan);