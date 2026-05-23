
const fdiv = document.getElementById('fdiv');
const finput = document.getElementById('finput'); 
const fbtn = document.getElementById('fbtn');
const sdiv = document.getElementById('sdiv');
const stxt = document.getElementById('stxt');

fbtn.addEventListener('click', () => {  
    const username = finput.value; 
    stxt.innerText = `Welcome to ${username || 'Guest'}`;
    fdiv.style.display = 'none';   
    sdiv.style.display = 'flex';
});


const sbtn=document.getElementById('sbtn');
const sinput=document.getElementById('sinput');
const tdiv=document.getElementById('tdiv');

sbtn.addEventListener('click', () => {
    if (sinput !==null){
        sdiv.style.display='none';
        tdiv.style.display='flex';

    }

})

const tbtn=document.getElementById('tbtn');
const tinput=document.getElementById('tinput');
const div4=document.getElementById('div4');
const txt4=document.getElementById('txt4');


tbtn.addEventListener('click', () => {
    if (tinput !==null){

        tdiv.style.display='none';
        div4.style.display='flex';
        const user = tinput.value; 
        txt4.innerText = `Welcome to ${user || 'Guest'}`;

    }

})

const result=document.getElementById('h4');
const btn4=document.getElementById('btn4');
const input4=document.getElementById('input4');
let counter=5;

result.innerHTML=counter;

btn4.addEventListener('click', () => {
    
    if (counter <= 1 && sinput.value !== input4.value) {
        result.innerHTML = 'you will lose';
        btn4.disabled = true; 
        return;
    }

   
    if (sinput.value === input4.value) {
        result.innerHTML = 'you will win';
    } 
    
    else {
        --counter; 
        result.innerHTML = counter;
        input4.value = ''; 
    }
});
