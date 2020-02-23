module.exports = class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    sayName() {
        console.log(this.name,this.age)
    }

    static create(people) {
        const person = new Person(people.name,people.age);
        return person;
    }
}