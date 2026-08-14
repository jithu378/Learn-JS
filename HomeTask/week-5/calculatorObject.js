let calculator = {
    add : function(a,b){
        console.log(`Sum of ${a} + ${b} = ${a+b}`);
    },
    
    subtract : function(a,b){
        console.log(`Difference of ${a} - ${b} = ${a-b}`);
    },
    
    multiply : function(a,b){
        console.log(`Product of ${a} * ${b} = ${a*b}`);
    },
    
    divide : function(a,b){
        console.log(`Quotient of ${a} / ${b} = ${a/b}`);
    } 
}

calculator.add(10,5);
calculator.subtract(10,5);
calculator.multiply(10,5);
calculator.divide(10,5);