const searchQuery = document.getElementById('search')


function debounce(fun , delay){
    let timer;
   return function(...args){
    clearTimeout(timer);
    timer = setTimeout(() =>{
        fun.apply(this, args)
    },delay)
}
}

//Funciton to simulate api calls
function search(query){
    if(query.length <= 0) return;
    console.log("Api call" , query)
}


const debounceSearch = debounce(search , 1000)

searchQuery.addEventListener('input', (e) =>{
   debounceSearch(e.target.value)
})
