const firstName = "Joanna";
const age = 24;


const greet = (age,firstName) =>{
    console.log(
        `Witaj Drogi Odwiedzający, nazywam się ${firstName} i mam ${age} lata.`
    );
}

greet(25,'Wojtek');


console.log(firstName);
console.log(age);

console.log(`Nazywam się ${firstName} i mam ${age} lata`);

const notes = document.querySelector('.notes-JavaScript--js');
notes.innerHTML = 'JavaScript';

