let total = 0;
let discount = 0;
var totalMoney = 0;

function itemClick(text , money){

     
    const selectedItemContainer = document.getElementById("selected-items");
    const itemName = text; 
    const li = document.createElement("li");
    li.innerText = itemName;
    li.type = "1";
    selectedItemContainer.appendChild(li);
    
    total += money;
    document.getElementById("tmoney").innerText= total;
    totalMoney = total- discount;
    document.getElementById("totalmoney").innerText= totalMoney;
    let inputValue = document.getElementById("input");
    let button = document.getElementById("button");
    if(total >= 200){
        button.removeAttribute("disabled");
    }else{
        button.setAttribute("disabled","true");
    }
    let button2 = document.getElementById("button2");
    if(total > 0){
        button2.removeAttribute("disabled");
    }else{
        button2.setAttribute("disabled","true");
    }
    button=document.getElementById("button");
    button.addEventListener("click", function(){
        const value = inputValue.value.trim();

        if(value === "SELL200"){
            discount = (20 / 100) *total;
            totalMoney = total- discount;
            document.getElementById("totalmoney").innerText= totalMoney;
           
        }else{
            discount= 0;
        }
        discount.toFixed(2);
        document.getElementById("discount").innerText= discount;
        
    });

    
    

    
    
}