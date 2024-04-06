const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

for (const btn  of allBtn) {
  btn.addEventListener('click', function (e){
    count =  count + 1
    getInnerText('cart-count').innerText = count;


  })
}

// ---------------------------


function getInnerText(id){
  const element = document.getElementById(id)
  return element;
}

// -----------------------