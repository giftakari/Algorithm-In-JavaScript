function User(firstName, lastName, age, gender) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
  this.gender = gender;
}

let user1 = new User("Sammy", "Akari", 20, "Male");
let user2 = new User("Pee", "Akari", 33, "Female");

console.log(user1);
console.log(user2);
