function getDOB() {
    const dob = new Date(document.getElementById("inputDob").value);
    const now = new Date();
  
    // Calculate age in years
    let ageYears = now.getFullYear() - dob.getFullYear();
  
    // Handle edge cases for months and days
    const monthDiff = now.getMonth() - dob.getMonth();
    const dateDiff = now.getDate() - dob.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dateDiff < 0)) {
      ageYears--;
    }
  
    // Display calculated age
    document.getElementById("currentAge").innerHTML =
      `Your current Age is ${ageYears} years ${Math.abs(monthDiff)} months ${Math.abs(dateDiff)} days`;
  }
  