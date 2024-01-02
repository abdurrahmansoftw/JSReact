const person = {
  name: 'John Doe',
  age: 25,
  adress: {
    street: 'Main Street',
    number: 100,
    city: 'New York',
  },
}
const updated = {
  ...person,
  adress: {
    ...person.adress,
    city: 'San Francisco',
  },

  name: 'akaid',
}
updated.adress.city = 'San Francisco'

console.log(person)
