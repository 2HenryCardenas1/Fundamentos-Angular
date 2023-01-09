const username : string | number = 'Max'

const sum =  (a: number,b:number )=> {
    return a+b;
}

class Persona {
   

    constructor(public name : string, public age : number){      
    }
}


const persona = new Persona('Max', 30);

persona.age ;