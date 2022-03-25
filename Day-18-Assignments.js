// Rock, Paper, Scissors, Shoot! FML

const hands = ['rock' , 'paper', 'scissors'];

function getHands () {
    let index = parseInt(Math.random()*10)%3;
    return hands[index];
}
let player1= {
    name: "Please god no",
    getHands: getHands 
};
let player2= {
    name: "Make it stop",
    getHands: getHands 
};
//<- arguments
function playRound(p1, p2) {
    let p1Hand = p1.getHands();
    let p2Hand = p2.getHands();

    console.log(p1.name, "threw", p1Hand);
    console.log(p2.name, "threw", p2Hand);
    if (p1Hand === p2Hand){
        console.log("Tie!");
        return null;
        //Rock
    }else if (p1Hand ===hands[0] && p2Hand === hands[1]){
        console.log(p2.name + " " + "Wins!");
        return p2;
    }else if (p1Hand ===hands[0] && p2Hand === hands[2]){
        console.log(p1.name + " " + "Wins!");
        return p1;
    //Paper    
    }else if (p1Hand ===hands[1] && p2Hand === hands[0]){
        console.log(p1.name + " " + "Wins!");
        return p1;
    }else if (p1Hand ===hands[1] && p2Hand === hands[2]){
        console.log(p2.name + " " + "Wins!");
        return p2;
    // Scissors
    }else if (p1Hand === hands[2] && p2Hand === hands[0]){
        console.log(p2.name + " " + "Wins!");
        return p2;
    }else if (p1Hand === hands[2] && p2Hand === hands[1]){
        console.log(p1.name + " " + "Wins!");
        return p1;
    }
}

//Counting the Wins
function playGame(pPlease,pMake,playUntil){
    let pPleaseWins = 0;
    let pMakeWins = 0;

    while (pPleaseWins < playUntil &&  pMakeWins < playUntil) {
        let roundWinner = playRound(pPlease, pMake);
        if (roundWinner === pPlease){
            pPleaseWins++;
        }else if (roundWinner === pMake){
            pMakeWins++;
        }
    }
    if (pPleaseWins === playUntil){
        console.log(pPlease.name + " Yeeted themselves!");
        return pPlease;
    } else if (pMakeWins === playUntil){
        console.log(pMake.name + " Yeeted themselves!");
        return pMake;
    }
}
playGame(player1,player2, 5);



// const blah =[1, -2, 1, 2, 3];

// let bullshit = 0;
// for(let x of blah)
// bullshit += x;

// console.log(bullshit);

// blah.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;

// });

// console.log("THIS IS A BREAK")



// Exponential Recursion Activity

// Write a recursive function that takes in two parameters, one for the base number, and one for the exponent number, i.e. how many times it will multiply the first number.
// Since it is recursive, you must call the function within the function and you must also have a base condition to avoid an infinite loop.

// function exp(num, power){
   
//     if (power > 0){ // loops dont nest, recursion nests
//         return num * exp(num, power - 1);
//     }else{
//         return 1;
//     }

// }

// console.log(exp(2,5))
// console.log(exp(7,3))
// console.log(exp(12,2))
// console.log(exp(9,4))

// Console log the result and run the function on the following numbers:
//       - 2 to the power of 5
//       - 7 to the power of 3
//       - 12 to the power of 2,
//       - 9 to the power of 4,

// ITERATIVE STYLE IS JUST LOOPS





// // Scope and CLosure Activity 

// function outer() {

//     let a="scope";
//     let b={
//         Name: "Nat Attack"
//     };

//     console.log(a);
//     console.log(b);

//     function inner(a,b){
//         console.log(a);
//         console.log(b);
//         b.Name= "Nieves";
//         a=99;
//         b=1;
//         console.log(a);
//         console.log(b);
//     }
//     inner(a,b);

//     console.log(a);
//     console.log(b);
    
// }
// outer();
