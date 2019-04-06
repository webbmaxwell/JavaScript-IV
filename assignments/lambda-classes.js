// CODE here for your Lambda Classes
class Person {
  constructor (attrs) {
    this.name = attrs.name;
    this.age = attrs.age;
    this.location = attrs.location;
    this.gender = attrs.gender;
  };
  speak() {
    console.log(`Hello, my name is ${this.name}, I am from ${this.location}`);
  };
};

class Instructor extends Person {
  constructor (attrs) {
    super(attrs);
    this.specialty = attrs.specialty;
    this.favLanguage = attrs.favLanguage;
    this.catchPhrase = attrs.catchPhrase;
  };
  demo(subject) {
    console.log(`Today we are learning about ${subject}`) //This one works
  };
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`) //This one works
  };
};

class Student extends Person {
  constructor (attrs) {
    super(attrs);
    this.previousBackground = attrs.previousBackground;
    this.className = attrs.className;
    this.favSubjects = attrs.favSubjects; //array
  };
  listsSubjects() {
    console.log(this.favSubjects) //This one works
  };
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`) //This one works
  };
  sprintChallenge(subject) {
    console.log(`${this.name} has begun sprint challenge on ${subject}`) //This one works
  };
};

class ProjectManager extends Instructor {
  constructor (attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  };
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`) //This one works
  };
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}`) //hopefully debugging the other code in here will help with this log, because I have no idea if this is right
  };
};

const aristotle = new Instructor({
  name: 'Aristotle',
  location: 'Ancient Greece',
  age: 73,
  gender: 'male',
  favLanguage: 'Geometry',
  specialty: 'Death-Rays',
  catchPhrase: 'The whole is more than the sum of its parts'
})

aristotle.demo('Geometry');

const socrates = new Instructor({
  name: 'Socrates',
  location: 'Ancient Greece',
  age: 61,
  gender: 'male',
  favLanguage: 'Greek',
  specialty: 'Pondering',
  catchPhrase: 'An unexamined life is not worth living'
});

const plato = new Student({
  name: 'Plato',
  location: 'Athens',
  age: 43,
  gender: 'male',
  previousBackground: 'theology',
  className: 'Socratic Faves',
  favSubjects: ['Life', 'Death', 'The Universe'],
});

socrates.grade(plato, 'Allegories')

plato.listsSubjects();

const max = new Student({
  name: 'Maxwell',
  location: 'Utah',
  age: 26,
  gender: 'male',
  previousBackground: 'music',
  className: 'WEBPT5',
  favSubjects: ['Math', 'Music', 'English'],
});

max.PRAssignment('JS-III');
max.sprintChallenge('JS-IV');

const joan = new ProjectManager ({
  name: 'Joan',
  location: 'Arc',
  age: 19,
  gender: 'female',
  favLanguage: 'Old French',
  specialty: 'Paladinry',
  catchPhrase: 'I am not afraid, I was born to do this',
  gradClassName: 'HundredYearsWarVets',
  favInstructor: 'God',
});

joan.standUp('England');

const harriet = new ProjectManager ({
  name: 'Harriet Tubman',
  location: 'Underground',
  age: 42,
  gender: 'female',
  favLanguage: 'JavaScript',
  specialty: 'Freedom',
  catchPhrase: 'I freed a thousand slaves I could have freed a thousand more if only they knew they were slaves',
  gradClassName: 'American Abolitionists',
  favInstructor: 'Frederick Douglas',
});

harriet.debugsCode(max, 'inherited bigotry');
