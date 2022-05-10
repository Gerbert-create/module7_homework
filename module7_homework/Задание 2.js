let user = {
  name: "Jack",
  age: 24,
  car: false,
  city: "Saint-Petersburg",
}

function userInfo (str, obj) {
  if (obj.hasOwnProperty(str)) {
    console.log (true)
  } else {
    console.log(false)
  }
}

userInfo("car", user)