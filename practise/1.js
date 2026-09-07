class Animal{
    constructor(name,color){
        this.name = name;
        this.color = color;
    }

    walk(){
        console.log("Walking.....");
    }
}

class Dog extends Animal{
    constructor(sound){ 
        this.sound = sound
    }

    sound(){
        console.log(`Dog is ${this.sound}`);
    }
}