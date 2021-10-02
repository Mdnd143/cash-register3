const billAmount=document.querySelector("#bill-amount");
const cashGiven=document.querySelector("#cash-given");
const checkBtn=document.querySelector("#check-button");
const outputBox=document.querySelector("#output");
const availableNotes=[2000, 500, 100, 20, 10, 5, 1];
const noOfNotes = document.querySelectorAll(".no-of-notes");

function calculateChange(AmountToBeReturned){
    for(let i=0;i < availableNotes.length; i++){
        const numberOfNotes= Math.trunc(AmountToBeReturned/availableNotes[i]);
        AmountToBeReturned=AmountToBeReturned % availableNotes[i];
        noOfNotes[i].innerText=numberOfNotes;


    }
    
}

function validateBillAndCashAmount() {
    
    }
    else{
        outputBox.innerText="The Bill Amount should be greater than zero";
       
    }
}

checkBtn.addEventListener("click",validateBillAndCashAmount);
function calcChange(billAmount.value,cashGiven.value) {
    if(billAmount.value > 0){
        if(cashGiven.value > billAmount.value){
            const AmountToBeReturned=cashGiven.value-billAmount.value;
            calculateChange(AmountToBeReturned);

        }else{
            outputBox.innerText="Do you wanna wash plates ? "
        }

    
}