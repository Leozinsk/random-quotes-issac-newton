import { frases } from "./list.js";

const btn = document.querySelector('#btn-new-quote')
const textArea = document.querySelector('#quote-text')

btn.addEventListener('click', e=>{
    e.preventDefault()
    console.log(e)
    displayQuote(getList())
});

function getList(){
    let n = Math.floor(Math.random()*14)
    return frases[n].data
}

function displayQuote(quote) {
    textArea.textContent = quote;
}
