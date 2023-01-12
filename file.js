// two methods :
//     by using eval(): simple method
//     by getting first and second number out of string

// .............................................


// without using eval()...unable to make logic bsc can't get second number from string
// let p =  document.querySelector("p");
// let buttons =  document.querySelectorAll("buttons-container");
// let firstNum = 0;
// let secondNum = 0;
// let oper = "";

// function allClear(){
//     p.innerHTML = "0" ;
// }

// function back(){
//     // oper is "" means user is still typing first value
//     if(oper===""){
//         firstNum = number(p.innerHTML.slice(0,-1));
//         p.innerHTML = firstNum;
//     }
//     else{

//     }
// }

// function display(symbol){
//     if(p.innerHTML==="0"){
//         p.innerHTML = "";
//     }
//     p.innerHTML += symbol;
// }

// function operator(op){
//     if(oper !==""){ // user is calculating more than two numbers

//     }
//     else{
//         firstNum = eval(p.innerHTML);
//         display(op); // it will add operator symbol to "p.innerhtml" and display too
//         oper= op;
//     }  
// }

// function calculate(){
//     // change screen text by putting result 
//     for(i in p.innerHTML){
//         if()
//     }
// }


// ..........................................

let p =  document.querySelector("p");


// by using eval()

function display(num){
    if(p.innerHTML==="0"){
        p.innerHTML = "";
    }
    p.innerHTML += num;
}

function operator(symbol){
    display(symbol);
}

function calculate(){
    let ans = eval(p.innerHTML);
    // what if value is too long like 3.44324432 then it will come out of div
    if(ans > ans.toFixed(9)){
        p.innerHTML = ans.toFixed(9);
    }
    else{
        p.innerHTML = ans;
    }
}

function back(){
    p.innerHTML = (p.innerHTML).slice(0,-1);
    if(p.innerHTML ===""){
        p.innerHTML = "0";
    }
}

function allClear(){
    p.innerHTML = "0" ;
}

