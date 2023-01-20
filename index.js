let operator = '';
let currentValue = ''


document.addEventListener("DOMContentLoaded",function(){
    let clear = document.querySelector('.clear');
    let equal = document.querySelector('.equal')
    let decimal = document.querySelector('.decimal')

    let numbers = document.querySelectorAll('.number')
    let operators = document.querySelectorAll('.operator')

    let currentScreen = document.querySelector('.current')


    numbers.forEach((number) => number.addEventListener("click",function(e){
        handleNumber(e.target.textContent)
        currentScreen.textContent = currentValue
    }))

    operators.forEach((op) => op.addEventListener("click",function(e){
        handleOperator(e.target.textContent)

    }))

    clear.addEventListener("click",function(){
        previousValue = '';
        currentValue = '';
        operator = ''
        currentScreen.textContent = 0



    })

    equal.addEventListener("click",function(){
        if(currentValue != ''){
            calculate()
            if(previousValue.length <= 8){
                currentScreen.textContent = previousValue
            }else{
                currentScreen.textContent = previousValue.slice(0,5) + '...'
            }
        }
    })
    decimal.addEventListener('click',function(){
        addDecimal()
    })
})


function handleNumber(num){
    if(currentValue.length <= 8){
        currentValue += num;
    }
}


function handleOperator(op){
    operator = op
    previousValue = currentValue;
    currentValue = ''

}


function calculate(){
    previousValue = Number(previousValue);
    currentValue = Number(currentValue);
    if (operator == '+'){
        previousValue += currentValue;
    }else if(operator == '-'){
        previousValue -= currentValue;
    }else if(operator == 'X'){
        previousValue *= currentValue;
    }else if(operator == '/'){
        previousValue /= currentValue;
    }
    previousValue = roundNumber(previousValue);
    previousValue = previousValue.toString();
    currentValue = previousValue.toString();


}


function roundNumber(num){
    return Math.round(num * 1000) / 1000;
}

function addDecimal(){
    if(!currentValue.includes(".")){
        currentValue += '.';
    }
    
}