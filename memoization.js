function calculateTotal(){
    let cache = {}
    return function(n){
        if(cache[n]){
            return cache[n]
        }
     let result =  n.reduce((acc , curr) =>{
            return acc + curr
        },0)
        cache[n] = result
        return result;
    }
}



const total = calculateTotal()
console.log(total([2,3,4]))
console.log(total([2,3,5]))