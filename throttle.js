const AddtocardBtn = document.getElementById("btn")

function throttleFun(fun , delay){
    let lastTime = 0
    return function(...args){
        let now  = Date.now()  
        if(now - lastTime >= delay){
            lastTime = now;
            fun.apply(this , args)
        }
    }
}

function addtoCart(value){
   const sku = document.getElementById("quantity")
    let count = Number(sku.innerHTML)
    count++
    sku.innerHTML = count
}


const throttle = throttleFun(addtoCart , 2000)

AddtocardBtn.addEventListener('click',(e) =>{
        throttle(e)
})