/***      Function  =>  This keyword */
function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

/** Instance of the object */
let user1 = new User("Sammy", "Akari", 20, "Male");
let user2 = new User("Pee", "Akari", 33, "Female");

/** Prototypal  */
User.prototype.emailDomain = "@akaris.com";
User.prototype.getEmailAddress = function() {
  return this.firstName + this.lastName + this.emailDomain;
};

console.log(user1);
console.log(user2);
