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

checkButton.addEventListener("click", () => {
    createListItem(plusMinusInput.value, descriptionInput.value, valueInput.value);
});