const allBtn = document.getElementsByClassName('add-btn');
let count = 0;

for (const btn of allBtn) {
  btn.addEventListener('click', function (e) {
    count = count + 1

    
    
    
    
    setInnerText('cart-count', count);
    
    const placesName = e.target.parentNode.childNodes[1].innerText;
    
    const priceElement = e.target.parentNode.childNodes[3].childNodes[1].innerText;
    const price = parseInt(priceElement);
    
    const budget = getInnerElement('budget').innerText;
    const budgetNumber = parseInt(budget);
    if(budgetNumber - price < 0){
        alert('low budget');
        return;
    }
    getInnerElement('budget').innerText = budgetNumber - price;



    const selectedPlaceContainer = getInnerElement('selected-place-container');

    const li = document.createElement('li');

    const p = document.createElement('p');
    p.innerText = placesName;




    const p1 = document.createElement('p');
    p1.innerText = price;






    li.appendChild(p);
    li.appendChild(p1);

    e.target.parentNode.parentNode.style.backgroundColor = 'grey';

    e.target.setAttribute('disable', true);
    e.target.setAttribute("disabled", true);


    selectedPlaceContainer.appendChild(li);



    sumOfTotalCost('total-cost', price)


    grandTotal('grand-total', price);




  })
}

// ---------------------------

function getInnerElement(id) {
  const element = document.getElementById(id);
  return element;
}


// ----------------------


function setInnerText(id, value) {
  document.getElementById(id).innerText = value;
}
// -----------------------


function sumOfTotalCost(elementId, value) {
  const totalCostElement = getInnerElement(elementId).innerText;
  const totalCost = parseInt(totalCostElement);

  setInnerText('total-cost', totalCost + value);
}


// -------------------------------

function grandTotal(category) {
  const TotalElement = getInnerElement('total-cost').innerText;
  const Total = parseInt(TotalElement);

  if (category === 'bus') {
    setInnerText('grand-total', Total + 100);
  }
  else if (category === 'train') {
    setInnerText('grand-total', Total - 100);
  }
  else if (category === 'flight') {
    setInnerText('grand-total', Total + 500);
  } else {
    setInnerText('grand-total', Total);

  }
}

// ------------------

