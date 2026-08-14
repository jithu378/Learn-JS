let rectangle = {
    length : 20,
    width : 10,

    area : function(){
        console.log(`Area of rectangle with length ${this.length} and ${this.width} is ${this.length * this.width}`);
    },

    perimeter : function(){
        console.log(`Perimeter of rectangle with length ${this.length} and ${this.width} is ${2*(this.length + this.width)}`);
    }
}

rectangle.area();
rectangle.perimeter();