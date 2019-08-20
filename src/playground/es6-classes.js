class Person{
    //static g = 10; babel не поддерживает es8 фич ??
    constructor(name = 'Anonymous', age = 0){
        this.name = name;
        this.age = age;
    }
    getGreeting(){
        return `Hi. I am ${this.name}`
    }
    getDescription(){
        return `${this.name} is ${this.age} year(s) old.`
    }
}

class Student extends Person{
    //в говноскрипте конструкторы наследуются
    //если не объявить конструктор в производном классе, будет использован конструктор базового
    constructor(name, age, major){
        //сначала нужно вызвать конструктор базового
        super(name, age);
        //теперь уже можно делать свои дела
        this.major = major
    }
    hasMajor(){
        //использую магию неявных преобразований js
        //!undefined = true
        //!!undefined = false
        return !!this.major
    }
    getDescription() {
        return this.hasMajor() ? `${super.getDescription().replace('.', '')} with major in ${this.major}`
            : super.getDescription();
    }
}

class Traveler extends Person{

    constructor(name, age, homeLocation){
        super(name, age);
        this.homeLocation = homeLocation
    }
    getGreeting() {
        let description;

        if(this.homeLocation)
            description = `${super.getGreeting()} and I am visiting you from from ${this.homeLocation}.`;
        else
            description = super.getGreeting();
        return description
    }
}

const me = new Student('Max', 18, 'IT');
console.log(me);
console.log(me.getGreeting());
console.log(me.getDescription());
const traveler = new Traveler('Makkuso', 18, 'Japan');
console.log(traveler)
console.log(traveler.getGreeting())


