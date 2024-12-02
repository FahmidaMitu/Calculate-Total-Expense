// Get Elements froms HTML
const expenseDescription = document.getElementById('description');
const addButton = document.getElementById('btn');
const orderedList = document.querySelector('.list');
const money = document.getElementById('amount');
const showTotal = document.getElementById('showTotalAmount');

//List Created, total amount added & Substracted.
function mainFunction() {
   const inputValue = expenseDescription.value;
   const amountValue = parseFloat(money.value);
   
   //Create list
   const listItem = document.createElement('li');
   listItem.innerHTML = `${inputValue} - ${amountValue}<button class="buttonClass"><i class="fa fa-trash" aria-hidden="true" ></i></button>`;
   orderedList.appendChild(listItem);

   //Amount addition 
   totalAmount += amountValue;
   updateTotalDisplay();

   //Delete with amount substraction
   const deleteBtn = listItem.querySelector('.buttonClass');
   deleteBtn.addEventListener('click', function () {
   totalAmount -= amountValue;
   updateTotalDisplay();
   orderedList.removeChild(listItem);
   });
   //Clear input
   expenseDescription.value = '';
   money.value = '';
}

let createList = () => {
   
};

//Total amount display.
let totalAmount = 0;

const totalDisplay = document.createElement('div');
totalDisplay.innerHTML = `Total Amount: ${totalAmount}`;
showTotal.appendChild(totalDisplay);

//Total amount update function
function updateTotalDisplay() {
   totalDisplay.innerHTML = `Total: ${totalAmount}`;
}
// Calling mainFunction to create list.
addButton.addEventListener('click', mainFunction);
