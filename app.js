let person = {
  firstName: 'Taras',
  lastname: 'Kostiv',
  age: 15,
  height: 195,
  place: 'Lviv, Vyshensky 38',
}

console.log(person);

for (let key in person) {
  console.log(person[key]);
}

let personJSON = JSON.stringify(person);
console.log(personJSON);
console.log(JSON.parse(personJSON));

let moreInfo = {
  music: 'anythigs',
  videoGame: ['Minecraft, Civiliztion, RG6'],
}

let assignPerson = Object.assign(person, moreInfo);
console.log(assignPerson);

const map = new Map([
  ['Мама', { telephone: '+380 99 050 6780', place: 'Lviv, Vyshensky 38' }],
  ['Тато', { telephone: '+380 96 785 9021', place: 'Lviv, Jordana 3' }]
])
console.log(map)

for (let [key, value] of map) {
  console.log(key, value);
}