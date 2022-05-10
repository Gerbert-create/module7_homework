let userName = prompt("Введите свое имя:")
let userAge = prompt("Введите свой возраст:")
let userGender = prompt("Введите свой пол:")



function user (name, age, gender) {
  this.name = name;
  this.age = age;
  this.gender = gender;
}



const creatObj = new user(userName, userAge, userGender)
console.log(creatObj)