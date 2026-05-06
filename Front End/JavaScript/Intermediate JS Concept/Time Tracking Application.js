// Coding Challenge #2 With AI

/*
Let's say you're building a time tracking application for freelancers. 
At some point in building this app, you need a function that receives daily work hours for a certain week, 
and returns:
1. Total hours worked
2. Average daily hours
3. The day with the most hours worked
4. Number of days worked
5. Whether the week was full-time (worked 35 hours or more)

TEST DATA: [7.5, 8, 6.5, 0, 8.5, 4, 0]
*/

function analyzeWeek(hours) {
  const daysOfWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
  
  // Validate input array length
  if (hours.length !== 7) {
    alert('Please provide exactly 7 days of hours data (one for each day of the week).');
    return null; // Stop execution if invalid
  }

  let totalHours = hours.reduce((sum, hours) => sum + hours, 0);
  let daysWorked = hours.filter(hours => hours > 0).length;
  let averageHours = daysWorked > 0 ? totalHours / daysWorked : 0;
  let maxHours = Math.max(...hours);
  let maxDayIndex = hours.indexOf(maxHours);
  let maxDay = daysOfWeek[maxDayIndex];
  let isFullTime = totalHours >= 40;

  return {
    totalHours: totalHours,
    averageDailyHours: averageHours,
    maxHoursDay: maxDay,
    daysWorked: daysWorked,
    isFullTime: isFullTime
  };
}

// Test cases
let eachDayHours = [7.5, 8, 6.5, 0, 8.5, 5, 6]; 
console.log(analyzeWeek(eachDayHours));

// Example of invalid input
let invalidHours = [7.5, 8, 6.5]; 
console.log(analyzeWeek(invalidHours));