function calculateTotal(){
    let cache = {}
    return function(arr){
          // Convert array into unique string key
         const key = JSON.stringify(arr)
         //check cache
        if(key in cache){
             console.log("From cache");
            return cache[key]
        }
     let result =  arr.reduce((acc , curr) =>{
            return acc + curr
        },0)
        cache[key] = result
        return result;
    }
}



const total = calculateTotal()
console.log(total([2,3,4]))
console.log(total([2,3,5]))