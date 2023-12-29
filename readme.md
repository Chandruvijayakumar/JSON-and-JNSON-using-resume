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
  


  /------------------------------------------------------------------------------------------------------------------------------------------------

  //Create your own resume for JSON format
var resume = {
    "Name": "Chandru V",
    "Label": "Software Engineer",
    "Email": "chandru4395393@gmail.com",
    "Phone":"+91-6381951562",
    "SUMMARY": ["B.Tech in Information Technology graduate eager to begin a rewarding career in IT. "],
    "LOCATION": {
      "address": "89/40,Nalathambi Street,Old Pet,Krishnagiri,TamilNadu-635001",
      "postalCode": "635001",
      "city": "Krishnagiri",
      "District":"Krishnagiri",
      "State":"Tamilnadu",
     
    },
  
  "PROFILE SNAPSHOT ": {
    'B.Tech in Information Technology graduate eager to begin a rewarding career in IT. Passionate about applying academic knowledge to solve challenges with cutting-edge technologies. Seeking a role in an innovative organization to refine technical skills, collaborate with professionals, and contribute to team success through continuous learning and adapting to evolving IT trends ':[

    ]
    
  },

  "EDUCATION": {
    "Institution": "Anna University",
    "college":"SNS college of Engineering",
    "Degree": "B.Tech Information Tehnology",
    "Duration": "2019-2023",
    "CGPA": "8.7",
    
  },


  "Technologies Covered ": {
    "➢ HTML":
    "➢ JS",
    "➢ CSS":
    "➢ BOOTSTRAP",
    "➢ NODE JS":
    "➢ NPM",
    "➢ MONGODB":
    "➢ REACT",
    "➢ AWS":
    "➢ MY SQL",
  },


  "Course Completion ": {
    'Successfully completed the Full Stack Development (FSD) program at Guvi Institution, Chennai, with a duration of 4 months. During this comprehensive course, I gained in-depth knowledge in various aspects of full-stack development, including front-end and back-end technologies.':[

    ]
    
  },
  "Key Highlights": {
    "Duration": "4 Months",
    "Location": "Guvi Institution, Chennai",
    
  },
  LANGUAGES: { language: 'Tamil , English ,kanada' },
  INTEREST: { name: 'Watching movie', keywords: 'based on true storeies' },
  };



 
  console.log(resume);
  
  //output
  /*
  {
  name: 'Chandru V',
  label: 'Software Engineer',
  email: 'chandru4395393@gmail.com',
  phone: '+91-6381951562',
  SUMMARY: [
    'Aiming to be a unique part of an organization through my updated knowledge, skills in Design & Analysis',
    'and do the smart work for the consistent growth of the company.'
  ],
  LOCATION: {
    address: '2/164 South street, kakkanallur',
    postalCode: '627418',
    city: 'Ambasamudram',
    District: 'Tirunelveli',
    State: 'Tamilnadu'
  },
  'PROFILE SNAPSHOT ': {
    'A goal-oriented and dedicated professional with over three years of commendable success in': [
      'Product Design & Development',
      'Effective Analysis',
      'Business Excellence',
      'Reporting & Documentation',
      'Team Management'
    ]
  },
  EDUCATION: {
    institution: 'Anna University',
    college: 'Dr.Sivanthi Aditanar college of Engineering',
    Degree: 'BE',
    Duration: '2015-2019',
    cgpa: '7.8'
  },
  'SOFTWARE PROFICIENCY': {
    '➢ Drafting Software ': 'Auto CAD 2018',
    '➢ Modelling Software ': 'Autodesk Inventor, Space Gass 12.6, Catia V5, Unigraphics NX',
    '➢ Analyzing Software ': 'Ansys work bench, Nastran'
  },
  CERTIFICATES: {
    silambam: 'in state level',
    date: '10-7-2006',
    kabadi: 'in zonal level'
  },
  SKILLS: {
    name: 'Drafting Software and Modelling software ',
    keywords: [ 'Autodesk Inventor,', 'Catia V5,', 'Ansys work bench,' ]
  },
  LANGUAGES: { language: 'Tamil , English' },
  INTEREST: { name: 'Watching movie', keywords: 'based on true storeies' },
  REFERENCE: [
    {
      name: 'selvam',
      reference: 'parmasivan',
      phone: '+91-7708991995'
    }
  ]
  }
  */