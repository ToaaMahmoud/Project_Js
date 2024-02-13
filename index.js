let count = 0;
let prev = 0;
function increment(){
    count++;
    document.getElementById("cnt").textContent = count;
}

function save(){
   prev = count;
   document.getElementById("demo").textContent = "Previous Entry is : ";
   document.getElementById("demo").textContent += prev;
   document.getElementById("cnt").textContent = 0;
   count = 0;
}

