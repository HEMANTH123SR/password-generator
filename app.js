const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let p1=document.getElementById("first-pd")
let p2=document.getElementById("second-pd")

function passwordGenerator(){
    let password1=""
    let password2=""
    for(let i=0;i<15;i++){
      password1+=characters[Math.floor(Math.random()*91)]
    }
    for(let i=0;i<15;i++){
        password2+=characters[Math.floor(Math.random()*91)]
      }
    p1.innerText=password1;
    p2.innerText=password2;
}


