let Name = prompt("Whats your name?");

let age = 0;
let i = 0;
do {
    age = parseInt(prompt("How old are you?"));
    if (age < 18){
        confirm("You are under the age permitted to enter this site");
        }else {
            i = 1;
        }
}while(i == 0);

let firstQ = prompt("Where are you from?");


let secondQ =0;
let j = 0;
do {
    secondQ = parseInt(prompt("Which of these countries do you wish to go to? \n 1- Francs \n 2- UK \n 3- USA \n please answer with the number of your choice"));
    if (secondQ < 0 || secondQ > 3){
        confirm("please just choose a number from the choices");
        }else{
            j = 1;
        }
    }while(j == 0);



function country (num){
    let counrtry_name;
    if (num == 1){
        counrtry_name = "France";
    }else if (num == 2){
        counrtry_name = "UK";
    }else {
        counrtry_name = "USA";
    }

    return counrtry_name;
}


alert('Greetings, '+Name+' from '+firstQ+' I hope you can visit '+country(secondQ)+' befor you finish your '+age+'th year.');

console.log("Q1:Whats yous name?  Answer:"+Name);
console.log("Q2:How old are you?  Answer:"+age);
console.log("Q3:Where are you from?  Answer:"+firstQ);
console.log("Q4:Which of these countries do you wish to go to?  Answer:"+country(secondQ));





document.getElementById('name').innerHTML = "Q1:Whats yous name?";
document.getElementById('age').innerHTML = "Q2:How old are you?";
document.getElementById('country').innerHTML = "Q3:Where are you from?";
document.getElementById('country_wish').innerHTML = "Q4:Which of these countries do you wish to go to?";


document.getElementById('a1').innerHTML = "Answer: "+Name;
document.getElementById('a2').innerHTML = "Answer: "+age;
document.getElementById('a3').innerHTML = "Answer: "+firstQ;
document.getElementById('a4').innerHTML = "Answer: "+country(secondQ);



