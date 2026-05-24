const grandparent  = document.getElementById('grandParent')
const parent = document.getElementById('parent')
const child = document.getElementById('child')
const navbars = document.getElementById('navbar')


//event capture example
// grandparent.addEventListener('click', (e) => {

//    console.log('grandparnet');
// },true);
// parent.addEventListener('click', (e) => {

//   console.log('parent');
// },true);
// child.addEventListener('click', (e) => {
//      console.log('child');
// },true);

//event bubbling example
// grandparent.addEventListener('click', (e) => {

//    console.log('grandparnet');
// });
// parent.addEventListener('click', (e) => {

//   console.log('parent');
// });
// child.addEventListener('click', (e) => {
//      console.log('child');
// });



//event delegation
navbars.addEventListener('click', (e) =>{
    e.stopPropagation()
    console.log(e.target.innerText);
})