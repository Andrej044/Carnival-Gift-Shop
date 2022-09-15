// write your code here
const input = require('sync-input');
let priceList = [
    {
        id:1,
        price:10,
        name:"Teddy Bear"
    },
    {
        id:2,
        price:5,
        name:"Big Red Ball"
    },
    {
        id:3,
        price:50,
        name:"Huge Bear"
    },
    {
        id:4,
        price:8,
        name:"Candy"
    },
    {
        id:5,
        price:15,
        name:"Stuffed Tiger"
    },
    {
        id:6,
        price:30,
        name:"Stuffed Dragon"
    },
    {
        id:7,
        price:100,
        name:"Skateboard"
    },
    {
        id:8,
        price:25,
        name:"Toy Car"
    },
    {
        id:9,
        price:20,
        name:"Basketball"
    },
    {
        id:10,
        price:75,
        name:"Scary Mask"
    },
]
let user= {
    ticketsAmount : 0
}
function typePrice(arr=[]){

    console.log(`Here's the list of gifts:\n`);
    arr.forEach(item => {
        console.log(`${item.id}- ${item.name}, Cost: ${item.price} tickets`);
    })
    if(arr.length === 0) {
        console.log("Wow! There are no gifts to buy.");

    }
}


console.log(`WELCOME TO THE CARNIVAL GIFT SHOP!
Hello friend! Thank you for visiting the carnival!`);


typePrice(priceList)
let condition;
do{
    console.log(`What do you want to do?`);
    let answer = input(`1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n`)*1;
    condition = answer
    switch (answer) {
        case 1:
            buyGift(priceList);
            break;
        case 2:
            addTickets();
            break;
        case 3:
            checkTickets();
            break;
        case 4:
            typePrice(priceList);
            break;
        default:
            console.log(`Please enter a valid number!`);
            break;
    }}
while (condition !== 5)



function buyGift(arr=[]){
    if(priceList.length === 0) {
        console.log("Wow! There are no gifts to buy.");
        return;
    }


   const buyInput = input(`Enter the number of the gift you want to get:\n`)*1;
    if(isNaN(buyInput)){
        console.log("Please enter a valid number!");
        return;
    }
    let idArr = priceList.map(item => item.id);
    if(idArr.includes(buyInput) === false){
        console.log("There is no gift with that number!")
        return;
    }

   let gift = {};
    priceList.forEach((item, index) => {
       if(item.id === buyInput) {
           if(item.price > user.ticketsAmount) {
               console.log("You don't have enough tickets to buy this gift.");
           }
           else {
               gift =  item;
               priceList.splice(index, 1);
               user.ticketsAmount = user.ticketsAmount - gift.price;
               console.log(`Here you go, one ${gift.name}!`);
               console.log(`Total tickets: ${user.ticketsAmount}`);
           }
       }
   })

}
function addTickets(){
    const inputAmount = input(`Enter the ticket amount: `)*1;
    if(isNaN(inputAmount) || inputAmount < 0 || inputAmount > 1000) {
        console.log("Please enter a valid number between 0 and 1000.");
        return;
    }
    user.ticketsAmount = user.ticketsAmount + inputAmount;
    checkTickets();
}
function checkTickets(){
    console.log(`Total tickets: ${user.ticketsAmount}`);
}

console.log(`Have a nice day!`);

