const element1 = document.getElementById("first");
const element2 = document.getElementById("second");
const element3 = document.getElementById("third");
let count1 = 0;
let count2 = 0;
let count3 = 0;

const checkInputs1  = () =>{
    count1 += 1
    console.log('this button was clicked')
    if(count1 >= 2){
        element1.ariaChecked = false;
        count1 = 0
    } else if(element2.ariaChecked === true || element3.ariaChecked === true){
        count1 = 0
    }
};
const checkInputs2  = () =>{
    count2 += 1
    console.log('this button was clicked')
    if(count2 >= 2){
        element1.ariaChecked = false;
        count2 = 0
    } else if(element1.ariaChecked === true || element3.ariaChecked === true){
        count2 = 0
    }
};
const checkInputs3  = () =>{
    count3 += 1
    console.log('this button was clicked')
    if(count3 >= 2){
        element1.ariaChecked = false;
        count3 = 0
    } else if(element1.ariaChecked === true || element2.ariaChecked === true){
        count3 = 0
    }
};


element1.addEventListener('click', checkInputs1)
element2.addEventListener('click', checkInputs2)
element3.addEventListener('click', checkInputs3)


