const myarray = [];
function todoadd(){
    const input = document.querySelector('.add-todo');
    const name = input.value;
    // console.log(name);
    if(name === '') {
        alert('Please enter a todo item');
        return;
    }
    else{
    myarray.push(name);
    // console.log(myarray);
    }
    input.value = '';
}
const myarray2 = [];
let i = 0;
function todoadd2(){
    const data = document.querySelector('.add-todo-2-name');
    const indata = data.value;
    const valueshow = document.querySelector('.shower');
    const duedate = document.querySelector('.add-todo-2-date');
    const indate = duedate.value;
    // console.log(indata, indate);
    if(indata === '') {
        alert('Please enter a todo item');
        return;
    }
    if(indate=== ''){
        alert('Please enter a due date');
        return;
    }
    else{
    myarray2.push({indata, indate});
    // console.log(myarray2);
    data.value='';
    duedate.value = '';
    }
    show(myarray2, valueshow);
    
}
 function show(myarray2, valueshow){
    if(myarray2.length === 0) {
        valueshow.innerHTML = '<p>No items to show</p>';
        return;
    }
   valueshow.innerHTML = '';
   myarray2.forEach(function(value,i){
    valueshow.innerHTML += `<p class="array-value"><ul>${value.indata}</ul>                  <ul>${myarray2[i].indate}</ul>
        <button class="deleter js-delete">Delete</button></p>`;
   })
    // for ( i=0; i< myarray2.length;i++){
    //     valueshow.innerHTML += `<p class="array-value"><ul>${myarray2[i].indata}</ul>                  <ul>${myarray2[i].indate}</ul>
    //     <button class="deleter" onclick="myarray2.splice(${i},1);
    //     document.querySelector('.shower').innerHTML = '';
    //     show(myarray2, document.querySelector('.shower'));";
    //     ">Delete</button></p>`;

const deleter = document.querySelectorAll('.js-delete');
console.log(deleter);
deleter.forEach((button, idx) => {
    button.addEventListener('click', () => {
        myarray2.splice(idx, 1);
        document.querySelector('.shower').innerHTML = '';
        show(myarray2, document.querySelector('.shower'));
    });
});


 }
const adder = document.querySelector('.adder');
adder.addEventListener('click',()=>{
    
        todoadd2();
    
    
});

// onclick="myarray2.splice(${i},1);
//         document.querySelector('.shower').innerHTML = '';
//         show(myarray2, document.querySelector('.shower')); 






