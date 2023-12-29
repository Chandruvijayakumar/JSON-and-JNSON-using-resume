// Given JSON object
const myJson = {
    "Name": "Chandru",
    "Age": 23,
    "City": "Coimbatore",
    "Work":"IT",
    
  };
  // Using for loop
  console.log("Using for loop:");
  for (let key in myJson) {
    console.log(key, myJson[key]);
  }
  
  // Using for...in loop
  console.log("\nUsing for...in loop:");
  for (let key in myJson) {
    console.log(key, myJson[key]);
  }
  
  // Using for...of loop 
  console.log("\nUsing for...of loop:");
  try {
    for (let key of myJson) {
      console.log(key);
    }
  } catch (error) {
    console.log("Cannot use for...of directly on objects.");
  }
  
  // Using forEach loop 
  console.log("\nUsing forEach loop:");
  Object.keys(myJson).forEach(key => {
    console.log(key, myJson[key]);
  });
  