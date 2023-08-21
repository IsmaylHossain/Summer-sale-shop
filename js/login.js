let total = 0;
let discount = 0;
let totalMomey = 0;

function itemClick(text , money){

     
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = text; 
    const li = document.createElement("li");
    li.innerText = itemName;
    selectedItemContainer.appendChild(li);
    
    total += money;
    document.getElementById("tmoney").innerText= total;
    if(total >= 200){
        discount = (20 / 100) *total;
    }
    totalMoney = total- discount;
    document.getElementById("totalmoney").innerText= totalMoney;
    document.getElementById("discount").innerText= discount;

    
    
}