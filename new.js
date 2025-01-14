const users = [
  { name: "Діма", eyeColor: "коричневий", email: "theturkeyprogramist12@gmail.com", age: 13, gender: 'хлопець', isActive: true },
  { name: "Оксана і Катя", eyeColor: "карий", email: "oksana-kate@gmail.com", age: 40, gender: 'жінки', isActive: false },
];

function getNames(users) {
  return users.map(use => use.name);
}
console.log("Імена", getNames(users));

function getColor(users, color) {
  return users.filter(use => use.eyeColor === color);
}
console.log("аккаунт із кольору очей карий", getColor(users, "карий"));

// Завдання знайдіть різницю двох фнкцій підказка їх 4
function getEmail(users, email) {
  return users.find(user => user.email !== email);
}
console.log("email:", getEmail(users, "theturkeyprogramist12@gmail.com"));
function getEmal(users, email) {
  return users.find(user => user.email === email);
}
console.log("eмail:", getEmal(users, "theturkeyprogramist12@gmail.com"));

function getAge(users, min, max) {
  return users.filter(user => min < user.age < max );
}
console.log("Діапазон 10-30 років", getAge(users, 10, 30));

function getGender(users, gender) {
  return users.filter(user => user.gender === gender);
}
console.log("Юзер із статтю хлопець", getGender(users, "жінки"));

function getInactive(users) {
  return users.filter(user => !user.isActive);
}
console.log("Неактивні", getInactive(users));