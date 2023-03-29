const dog = {
    name: 'Archibald',
    species: 'dog',
    breed: 'shih-Tzu',
    gender: 'male/boy',
    age: 11,
    hobby: 'plays with toys',
    numberOfToys: '37',
    favouriteFood: 'chicken nuggets',
    defaultMood: 'playful',
    currentMood: 'sleepy',
    introduceHim() {
    console.log(`Name of my ${this.species} is ${this.name}. It's a ${this.gender} and he is ${this.age} years old.`);},
    heLoves() {
    console.log(`He loves to run and ${this.hobby}, he's got ${this.numberOfToys} of it. His favorite food is ${this.favouriteFood}.`);},
    describeHisMood(){
    console.log(`Mostly he is ${this.defaultMood}, but now he's ${this.currentMood}.`);}}
    dog.introduceHim();
    dog.heLoves();
    dog.describeHisMood();