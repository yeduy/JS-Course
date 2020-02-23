const red = require('ansi-red');
const Person = require('./person');
const Database = require('./database');

console.log(red('-Hello World-'));

const emre = new Person('Emre', 27);
const ufuk = new Person('Ufuk', 30);

const employees = [emre, ufuk];


Database.save(employees);

const loadedFile = Database.load();

const convertedEmployees = loadedFile.map(Person.create);

convertedEmployees.forEach(element => {
    element.sayName();
});