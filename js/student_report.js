var message = ' ';
var student;
var search;

function print(message) {
  var outputDiv = document.getElementById('output');
  outputDiv.innerHTML = message;
}

function getStudentReport (student) {
  var report = '<h2>Student: ' + student.name + '</h2>';
  report += '<p>Track: ' + student.track + '</p>';
  report += '<p>Achievements: ' + student.achievements + '</p>';
  report += '<p>Points: ' + student.points + '</p>';
  return report;
  
}


while (true) {
  search = prompt("Search student records: type a name [Gemma, Tahir, Sara, Portia, Sam] (or type 'quit' to end)");
  if ( search === null || search.toLowerCase() === 'quit') {
    break;
  } 
  
  for (var i = 0; i < students.length; i += 1) {
  student = students[i];
    if ( student.name === search ) {
      message = getStudentReport( student );
      print(message);
      
    }
  
  
    }
   
 }




print(message);







