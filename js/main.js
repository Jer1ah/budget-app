//Retrieving date, year and month for heading of app
const date = new Date();
const currentYear = date.getFullYear();
const monthIndex = date.getMonth();
const months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Setting value for app heading
document.getElementById("monthHeader").innerHTML = `Available Budget in ${months[monthIndex]} ${currentYear}:`;

//Adding checkButton click functionality 
const checkButton = document.getElementsByClassName("checkButton")[0];
const plusMinusInput = document.getElementById("plusMinus");
const descriptionInput = document.getElementById("descriptionInput");
const valueInput = document.getElementById("valueInput"); 

const createListItem = (plusMinus, title, total) => {
    let list;
    const listItem = document.createElement("LI");
    const span1 = document.createElement("SPAN");
    const span2 = document.createElement("SPAN");
    
    if( plusMinus === "income" ) {
        list = document.getElementsByClassName("incomeList")[0];
        span2.innerHTML = "+ " + (Number(total)).toLocaleString("en-US") + ".00";
        span2.classList.add("spanAdd");
    } else {
        list = document.getElementsByClassName("expensesList")[0];
        span2.innerHTML = "- " + (Number(total)).toLocaleString("en-US") + ".00";
        span2.classList.add("spanMinus");
    }

    listItem.classList.add("listItem");
    span1.innerHTML = title;
    listItem.appendChild(span1);
    listItem.appendChild(span2);
    list.appendChild(listItem);
};

//Adding functionality for main total
const mainTotal = document.getElementsByTagName("H1")[0];
const incomeTotal = document.getElementsByClassName("plusRight")[0];
const expensesTotal = document.getElementsByClassName("minusRight")[0];
const expenseList = [...document.getElementsByClassName("spanMinus")];
const incomeList = [...document.getElementsByClassName("spanAdd")];
let total = 0;
let plusTotal = 0;
let minusTotal = 0;

//Removing the commas and peroid in the strings and converting to numbers
incomeList.forEach(number => {
    let arr = number.innerHTML.split("");
    arr.shift();
    let str = arr.join("");
    let num = parseFloat(str.replace(/,/g, ''));
    plusTotal += num;
});

//Removing the commas and peroid in the strings and converting to numbers
expenseList.forEach(number => {
    let arr = number.innerHTML.split("");
    arr.shift();
    let str = arr.join("");
    let num = parseFloat(str.replace(/,/g, ''));
    minusTotal += num;
});

//Adding totals to the app
incomeTotal.innerHTML = "+ " + (Number(plusTotal)).toLocaleString("en-US") + ".00";
expensesTotal.innerHTML = "- " + (Number(minusTotal)).toLocaleString("en-US") + ".00";

checkButton.addEventListener("click", () => {
    createListItem(plusMinusInput.value, descriptionInput.value, valueInput.value);
    if( plusMinusInput.value === "income" ) {
        plusTotal += Number(valueInput.value);
        incomeTotal.innerHTML = "+ " + (Number(plusTotal)).toLocaleString("en-US") + ".00";
    } else {
        minusTotal += Number(valueInput.value);
        expensesTotal.innerHTML = "- " + (Number(minusTotal)).toLocaleString("en-US") + ".00";
    }
    total = (plusTotal - minusTotal);
    let str = String(total);
    let arr = str.split("");
    arr.shift();
    let totalString = arr.join("");
    console.log(typeof totalString);
    if( plusTotal > minusTotal ) {
        mainTotal.innerHTML = "+" + (Number(str)).toLocaleString("en-US") + ".00";
    } else {
        mainTotal.innerHTML = (Number(str)).toLocaleString("en-US") + ".00";
    }
});



