function calcular(){

const n1 =parseFloat(document.getElementById(n1).value);
const n2 =parseFloat(document.getElementById(n2).value);
const Operation = Document.getElementById("Operation").value;
let result;

if(isNaN(n1) || isNaN(n2)){
    result = "Type a valid value.";
}
else{
    switch (Operation) {
        case "add":
            result = n1+n2;
            break;
            
        case "Sub":
            result = n1 - n2;
        break;
        
        case "mult": 
        result = n1 * n2;
        break;

        case "div":
            if (n2==0){
                result = "infinito";
            }
            result = n1/n2;
            break;
    }
}

}
