let dog = {
    name: 'Archibald',
    species: 'Dog',
    breed: 'Shih-Tzu',
    gender: 'male/boy',
    age: 11,
    hobby: 'plays with toys',
    numberOfToys: '37',
    favouriteFood: 'Chicken Nuggets',
    defaultMood: 'playful',
    currentMood: 'sleepy',
    introduceHim() {
    console.log(`Name of my ${this.species} is ${this.name}. It's a ${this.gender} and he is ${this.age} years old.`);
    },
    heLoves() {
    console.log(`He loves to run and ${this.hobby}, he's got ${this.numberOfToys} of it. His favorite food is ${this.favouriteFood}.`);
    },
    describeHisMood(){
    console.log(`Mostly he is ${this.defaultMood}, but now he's ${this.currentMood}.`);
    }
    }
    
    // dog.introduceHim();
    // dog.heLoves();
    // dog.describeHisMood();


let securedIntroduceHim = dog.introduceHim.bind(dog);
let securedHeLevoes = dog.heLoves.bind(dog);
let securedDescribeMood = dog.describeHisMood.bind(dog);

setTimeout(securedIntroduceHim, 1000);
setTimeout(securedHeLevoes, 2000);
setTimeout(securedDescribeMood, 3000);