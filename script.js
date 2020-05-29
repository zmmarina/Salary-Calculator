let typedSalary = 0;
let finalSalary = 0;

function activateAll(){

    captureNumber();
    calculateSalary();    
    
}

function captureNumber (){

    typedSalary = document.getElementById("grossSalary").value;
    document.getElementById("typedValue"). innerHTML = typedSalary;
}

function calculateSalary(){

    if (typedSalary <= 1500){
        finalSalary = typedSalary * 0.92;
    } 

    if (typedSalary > 1500 && typedSalary < 4000){
        finalSalary = typedSalary * 0.91;
    }
    if (typedSalary >= 4000){
        finalSalary = typedSalary * 0.89;
    }
       
        
    document.getElementById("finalValue").innerHTML = finalSalary;
    
}