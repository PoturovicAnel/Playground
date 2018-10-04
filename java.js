
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
    } else if (randomValue < 0.4){
        document.body.style.backgroundColor="blue";
    } else if (randomValue < 0.6){
        document.body.style.backgroundColor="black";
    } else if (randomValue < 0.8){
        document.body.style.backgroundColor="white";
    } else {
        document.body.style.backgroundColor="navyblue";
    }

}

    function BtnRgbRandom() { 
        var red = Math.round(Math.random() * 255); 
        var green = Math.round(Math.random() * 255); 
        var blue = Math.round(Math.random() * 255); 
        console.log(red , green , blue);
        
        var rgbValue = "rgb(" +red + "," + green + "," + blue +")";
        document.body.style.backgroundColor= rgbValue;
    }


    function BtnHexaDecimal() {
            var red1 = convertToHex(Math.round(Math.random() * 15));

            var red2 = convertToHex(Math.round(Math.random() * 15));

            var green1 = convertToHex(Math.round(Math.random() * 15));

            var green2 = convertToHex(Math.round(Math.random() * 15));

            var blue1 = convertToHex(Math.round(Math. random () * 15));

            var blue2 = convertToHex(Math.round(Math. random () * 15));

            /* Min lösning  
             if (red1 == 10){
                red1 = "a";
            }else if (red1 == 11){
                red1 = "b";
            } else if (red1 == 12){
                red1 = "c";
            }else if (red1 == 13){
                red1 = "d";
            }else if (red1 == 14) {
                red1 ="e";
            }else if (red1 == 15){
                red1 ="f";
            }

            if (red2 == 10){
                red2 = "a";
            }else if (red2 == 11){
                red2 = "b";
            } else if (red2 == 12){
                red2 = "c";
            }else if (red2 == 13){
                red2 = "d";
            }else if (red2 == 14) {
                red2 ="e";
            }else if (red2 == 15){
                red2 ="f";
            }
            
            if (blue1 == 10){
                blue1 = "a";
            }else if (blue1 == 11){
                blue1 = "b";
            } else if (blue1 == 12){
                blue1 = "c";
            }else if (blue1 == 13){
                blue1 = "d";
            }else if (blue1 == 14) {
                blue1 ="e";
            }else if (blue1 == 15){
                blue1 ="f";
            }

            if (blue2 == 10){
                blue2 = "a";
            }else if (blue2 == 11){
                blue2 = "b";
            } else if (blue2 == 12){
                blue2 = "c";
            }else if (blue2 == 13){
                blue2 = "d";
            }else if (blue2 == 14) {
                blue2 ="e";
            }else if (blue2 == 15){
                blue2 ="f";
            }

            if (green1 == 10){
                green1 = "a";
            }else if (green1== 11){
                green1= "b";
            } else if (green1 == 12){
               green1 = "c";
            }else if (green1 == 13){
                green1 = "d";
            }else if (green1 == 14) {
               green1="e";
            }else if (green1 == 15){
                green1 ="f";
            }

            if (green2 == 10){
                green2 = "a";
            }else if (green2== 11){
                green2= "b";
            } else if (green2 == 12){
               green2 = "c";
            }else if (green2 == 13){
                green2 = "d";
            }else if (green2 == 14) {
               green2="e";
            }else if (green2 == 15){
                green2 ="f";
            }


                '*/

            
            console.log(red1,red2,green1,green2,blue1,blue2);

            var hexaValue = "#" +red1 + red2 + green1 + green2 + blue1 + blue2 ;
            console.log(hexaValue);
            document.body.style.backgroundColor = hexaValue;


    }
            //göra funktion istället för flera if satser  resulterar i smidigare kod// 
function convertToHex(value) {
        
        if (value == 10){
            return "A";
        }else if (value == 11){
            return "B";
        }else if (value == 12){
            return "C";
        }else if (value == 13){
            return "D";
        }else if (value == 14) {
            return "E";
        }else if (value == 15){
            return "F";
        }else {
            return value;
        }


    }


console.log(areaRectangel(5.5,3,3));
console.log(calculateTriangel(5.5, 3.3));
console.log(calculateCircel(5));