// variables
const dogSound = "woof";
let dogBreed = "shih tzu";

//functions
function speak() {
  console.log(`${dogBreed} says ${dogSound}`);
}

//objects
const dog = {
  sound: "woof",
  dogBreed: "shih tzu",
  speak: function() {
    console.log(`${this.dogBreed} says ${this.dogSound}`);
  }
};

//key-value pairs 
const dog = {
  sound: "woof", // Property
  breed: "shih tzu" // Property
};

const dog = {
  sound: "woof", // Property
  breed: "shih tzu", // Property
  speak: function() { // Method
    console.log(`${this.dogBreed} says ${this.dogSound}`);
  }
};

const dog = {
  sound: "woof",
};

function speak() {
  console.log(dog.sound);
}

speak();

const dog = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  }
};

dog.speak();

const dog = {
  sound: "woof",
  speak: function() {
    console.log(this.sound);
  },
  teachMeSomething: function() {
    if (dog === this) {
      console.log('dog === this');
    }
    this.speak();
  }
};

dog.teachMeSomething();