// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null }
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/

//Elliot Maude
//032830127

// task 1
console.log("TASK 1");

let lastCourse = courses.pop();

console.log("Course " + lastCourse.code + " removed from the array\n");

let newCourses = [
    {code:'ibc233', name:'ISERIES Business Computing', hours:'4',url:'https://scs.senecac.on.ca/~ibc233/'},
    {code:'oop244', name:'object oriented Programming', hours:'4',url:'https://scs.senecac.on.ca/~oop244/'},
    {code:'web222', name:'web programming principles', hours:'4',url:'https://scs.senecac.on.ca/~wei.song/web222/web222.html'},
    {code:'dbs201', name:'Introduction to database design and sql', hours:'4',url:'https://cs.senecac.on.ca/~dbs201/'}
];

courses = courses.concat(newCourses);
console.log("Adding New Course \n\n");

console.log("Course object in the array: \n"); 

for(let e = 0; e < courses.length; e++)
{
    console.log(courses[e].code + ", " + courses[e].name + ", " + courses[e].hours + " hours/week, website: " + courses[e].url);
}

console.log("TASK 2");
// task 2

let student1 = Object.create(student);
student1.name = "John Smith";
student1.dob = new Date(1990, 03, 23);
student1.sid = "123456789";
student1.program = "CPA";

let student2 = Object.create(student);
student2.name = "Bob Roberts";
student2.dob = new Date(1980, 10, 13);
student2.sid = "123456790";
student2.program = "CPD";

let student3 = Object.create(student);
student3.name = "Jim Green";
student3.dob = new Date(1976, 05, 30);
student3.sid = "123446789";
student3.program = "CPA";

let student4 = Object.create(student);
student4.name = "Rob Smith";
student4.dob = new Date(1996, 07, 03);
student4.sid = "123356789";
student4.program = "CPD";

let arr = new Array(4);
arr.push(student1);
arr.push(student2);
arr.push(student3);
arr.push(student4);

var i = 0;
arr.forEach(function(e){
	console.log(i + ": " + e.toString());
	i++;
});


