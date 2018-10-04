
function setColor() {
    
    if (document.body.style.backgroundColor == "orange") {
        document.body.style.backgroundColor="red";
        
    } else {
        document.body.style.backgroundColor="orange";

    }
    console.log("It works!");
}

function BtnRandomColor() {
    var randomValue = Math.random();
    
    if (randomValue < 0.2){
        document.body.style.backgroundColor="red";
        console.log("Över 0.5");
    } else if (randomValue < 0.4){
        document.body.style.backgroundColor="blue";
        console.log("Mindre än 0.4");
    } else if (randomValue < 0.6){
        document.body.style.backgroundColor="black";
        console.log("Mindre än 0.6");
    } else if (randomValue < 0.8){
        document.body.style.backgroundColor="white";
        console.log("Mindre än 0.8");
    } else {
        document.body.style.backgroundColor="navyblue";
        console.log("Mindre än 1");
    }

}