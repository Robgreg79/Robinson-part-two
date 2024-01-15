let name = prompt("What is your name?");
let howmany = 0;
let total = 0;
let par;


console.log(name);

while (howmany != 3 && howmany != 6){
    howmany= prompt("Hi " + name + "! Would you like to play 3 or 6 hole?");
}
for (let i=1; i<=howmany; i++) {
    let score= Number(prompt("How many putts for hole " + i +"?(par:3)"));
    total += score;
}
par= (howmany==3) ? 9 : 18;

if (par<total){
    let dif= total-par 
    console.log("Nice try, "+ name + "... Your total par was: +"+ dif);
}

else if (par>total){
    let dif= total-par 
    console.log("Great Job, "+ name + "! Your total par was: "+ dif);
}

else if (par=total) {
    let dif= total-par
    console.log("Good game, "+ name + ". Your total par was: "+ dif);
}
















