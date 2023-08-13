document.getElementById('btn-post').addEventListener('click',function(){
    const textBox=document.getElementById('text-box');
    const textBoxComment=textBox.value;
    const commentContainer=document.getElementById('comment-container');
    const newCommentAdd=document.createElement('p');
    newCommentAdd.innerText=textBoxComment;
    commentContainer.appendChild(newCommentAdd);
    textBoxComment.value=''
})