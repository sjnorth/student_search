
I first created an array and named it 'students'. In this array I placed five objects, the students, with key-value pairs that included: name, track (what they're studying), achievements, and points. I stored this away in a .js file.

Then I created a second .js file to hold the functions. 
I started by creating 3 empty variables: message, student, and search.

Next I added a function to print a message into a specific div on the page, with the id of 'output'. 

Then I added a function to get the student reports. This included a new variable with local scope (report), which was built up into a longer HTML message by adding each piece as the loop progressed. 

Next step was a while loop, set to true, so that it would keep looping until told to stop. I added the global variable called 'search', which stored user input from the prompt. Input could either be one of the student names, or the word 'quit', to end the loop and exit the search box. 

I then added a for loop to iterate through each object in the students array and used an if statement to match the contents of the 'search' variable with 'student.name'. 

Lastly I used the print function to display the student's information on the page. 
