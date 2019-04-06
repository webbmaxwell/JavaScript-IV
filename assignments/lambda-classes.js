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
    console.log(`Today we are learning about ${subject}`) //check these logs to make sure they work
  };
  grade(student, subject) {
    console.log(`${student.name} receives a perfect score on ${subject}`) //this one too
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
    console.log(this.favSubjects) //check this log
  };
  PRAssignment(subject) {
    console.log(`${this.name} has submitted a PR for ${subject}`) //check this log
  };
  sprintChallenge(subject) {
    console.log(`${this.name} has begun spring challenge on ${subject}`) //check this log
  };
};

class ProjectManager extends Instructor {
  constructor (attrs) {
    super(attrs);
    this.gradClassName = attrs.gradClassName;
    this.favInstructor = attrs.favInstructor;
  };
  standUp(channel) {
    console.log(`${this.name} announces to ${channel}, @channel standy times!`) //check this log
  };
  debugsCode(student, subject) {
    console.log(`${this.name} debugs ${student.name}'s code on ${subject}'`) //hopefully debugging the other code in here will help with this log, because I have no idea if this is right
  };
};
