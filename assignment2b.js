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
// task 1

let lastCourse = courses.pop();

console.log("Course " + lastCourse + " removed from the array\n");

let newCourses = [
    {code:'ibc233', name:'no clue', hours:'8',url:null},
    {code:'oop244', name:'object oriented Programming', hours:'4',url:'https://scs.senecac.on.ca/~oop244/'},
    {code:'web222', name:'web programming principles', hours:'4',url:'https://scs.senecac.on.ca/~wei.song/web222/web222.html'},
    {code:'dbs201', name:'Introduction to database design and sql', hours:'4',url:'https://cs.senecac.on.ca/~dbs201/'}
];

courses = courses.concat(newCourses);
console.log("Adding New Course \n\n");

console.log("Course object in the array: \n"); 

for(let e = 0; e < courses.length; i++)
{
    console.log(courses[e] + "\n");
}

// task 2

