var students = [
  
  {
    name: 'Sam',
    track: 'Ruby',
    achievements: 101,
    points: 2467
  },
  
   {
    name: 'Tahir',
    track: 'iOS',
    achievements: 78,
    points: 1990
  },
  
   {
    name: 'Portia',
    track: 'Python',
    achievements: 99,
    points: 2000
  },
  
   {
    name: 'Gemma',
    track: 'Android',
    achievements: 7,
    points: 45
  },
  
   {
    name: 'Sara',
    track: 'Javascript',
    achievements: 67,
    points: 8999
  }, 
  
];
  
  for (prop in students) {
  document.write(students[i].name);
  document.write(students[i].track);
  document.write(students[i].achievements);
  document.write(students[i].points);
       
  }
  
  
  //we need to use a for in loop to iterate over the array and print out each object 
  //use students[i].name and so on with the other pairs 