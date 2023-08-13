
document.getElementById('input-id').addEventListener('keyup',function(event){
    const text=event.target.value;
    const deleteButton=document.getElementById('delete-btn');
    if (text==='delete') {
        deleteButton.removeAttribute('disabled');
    }
    else{
        deleteButton.setAttribute('disabled',true)
    }
})

document.getElementById('delete-btn').addEventListener('click',function(){
    const secret= document.getElementById('secret-text');
    secret.style.display='none'
})