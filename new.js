const users = [
  { name: "Діма", eyeColor: "коричневий", email: "theturkeyprogramist12@gmail.com", age: 13 },
  { name: "НФЖ - невідома форма життя", eyeColor: "болотно-брудний", email: "noname@gmail.com", age: 100000000 },
  { name: "Без імені", eyeColor: "прозорий", email: "no_name@example.com", age: 9999999999999 },
  { name: "塔,蒂亚娜", eyeColor: "синьожовтий", email: "goiteensteacher-student@gmail.com", age: 35 },
  { name: "Два імені: Анна Адольфівна Кліщ, Алла Кондратівна Кадик", eyeColor: "білий", email: "alnaanlaallaanna@gmail.com", age: 27 }
];
function getUserNames(users) {
  return users.map(user => user.name);
}
console.log(getUserNames(users));  

function getUsersByEyeColor(users, color) {
  return users.filter(user => user.eyeColor.toLowerCase() === color.toLowerCase("болотно-брудний"));
}
console.log(getUsersByEyeColor(users, "болотно-брудний"));  

function getUserByEmail(users, email) {
  return users.find(user => user.email === email);
}
console.log(getUserByEmail(users, "theturkeyprogramist12@gmail.com"));  

function getUsersByAgeRange(users, min, max) {
  return users.filter(user => user.age >= min && user.age <= max);
}
console.log(getUsersByAgeRange(users, 10, 400));  
