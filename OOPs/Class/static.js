class Univercity{
    static UN = "MG University";


    constructor(name, place){
        this.name = name;
        this.place = place;
    }

    display(){
        console.log(`University : ${Univercity.UN}`);
        console.log(`College name : ${this.name}`);
        console.log(`College place : ${this.place}`);
    }
}

let obj1 = new Univercity("SN College","Channanikkadu");
let obj2 = new Univercity("Bishop College","Pallom");

obj1.display();
obj2.display();