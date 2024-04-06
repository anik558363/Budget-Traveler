// document.getElementById('bth').addEventListener('click', function (e){
//     console.log('boss');
// })



function handleClick(event){
    // console.log(event.target.parentNode.parentNode.childNodes[1].innerText);
    const h1 = event.target.parentNode.parentNode.childNodes[1];
    h1.innerText = 'anik'
}