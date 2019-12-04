// Retrieving date, year and month for heading of app
const date = new Date();
const currentYear = date.getFullYear();
const monthIndex = date.getMonth();
const months = ["Janurary", "Feburary", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

//Setting value for app heading
document.getElementById("monthHeader").innerHTML = `Available Budget in ${months[monthIndex]} ${currentYear}:`;