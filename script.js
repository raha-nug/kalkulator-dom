let input = document.getElementById('input')

function pushBtn(obj) {
    let pushed = obj.innerHTML
    
    if(pushed == '='){
        //Calculate
        input.innerHTML = eval(input.innerHTML)

    }else if(pushed == "reset"){
        //All Clear
        input.innerHTML = ""

    }else{
        if(input.innerHTML == ''){
            input.innerHTML = pushed
        }else{
            input.innerHTML += pushed;
        }
    }
}
