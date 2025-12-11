const titleIntput=document.querySelector('#expense-title');
const amountIntput=document.querySelector('#expense-amount');
const addBtn=document.querySelector('#add-btn');
const expenseList=document.querySelector('#expense-list');
const totalValueSpan=document.querySelector('#total-value');

let currentTotal = 0;

addBtn.addEventListener('click', ()=>{
    const title=titleIntput.value;
    const amount = parseFloat(amountIntput.value);

    if(title.trim()===''|| isNaN(amount)|| amount <=0){
        alert('Please enter a valid title and a positive amount.');
        return;
    }

    const newLi=document.createElement('li');
    newLi.innerHTML =`
    <span class="title">${title}</span>
    <span class="amount">${amount.toFixed(2)}<span>
    `;

    expenseList.appendChild(newLi);

    currentTotal += amount;
    totalValueSpan.textContent = currentTotal.toFixed(2);

    titleIntput.value='';
    amountIntput.value='';
})