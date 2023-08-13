
// try 1
function makeHandle(){
    const handlerStatus= document.getElementById('handler-status');
    handlerStatus.innerText='okay done';
}


// try 2
document.getElementById('event-listener').addEventListener('click',function makeListener(){
    const listenerStatus=document.getElementById('handler-status');
    listenerStatus.innerText='aha done';
})

// try 3
document.getElementById('input-button').addEventListener('click',function makeUpdateInput(){
    const inputUpdate=document.getElementById('input-id');
    const inputText=inputUpdate.value;
    const h3Display=document.getElementById('h3-display')
    h3Display.innerText=inputText;
    inputUpdate.value='';

})