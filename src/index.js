function myFunction() {
  swal('Write your name to Sing Up:', {
    content: 'input'
  }).then(value => {
    swal(`Hello,how are you today, ${value}, You successfuly Sing Up`);
  });
  var elem = document.querySelector('#one');
  elem.remove();
  var btn = document.createElement('button');
  var att = document.createAttribute('class');
  att.value = 'btn btn-success';

  var element = document.getElementById('two');

  btn.setAttributeNode(att);
  var t = document.createTextNode('You In!');
  btn.appendChild(t);
  element.appendChild(btn);
  document.getElementById('myprofile1').className = 'btn btn-secondary active';
  document.getElementById('ads').style.visibility = 'visible';
  document.getElementById('myprofile').style.visibility = 'visible';
  document.getElementById('myprofile1').className = 'btn btn-secondary active';
}

// var img = document.createElement("IMG");
// var el = document.getElementById("two");
// img.src = flags/${countryCode.toLowerCase()}.png;
// img.height = 30;
// img.width = 30;
// element.appendChild(img);

function myFunctio() {
  let oldpassword = document.querySelector('#new').value;
  let confirmpassword = document.getElementById('confirm').value;
  if (oldpassword != confirmpassword) {
    alert('Your new password not confirmed');
  }
}

function mySell() {
  swal('Write something here:', {
    content: 'input',
    content1: 'input',
    content2: 'input'
  }).then(value => {
    swal(`You typed: ${value}`);
  });
}

const products = [
  {
    name: 'Watch',
    description: 'sdadadasdadasdasdadsadad',
    price: 55,
    date: ' last update 20.01.200',
    img: 'img/logo.png'
  },
  {
    name: 'Apparel',
    description: 'Asiaasdadsasdadadsadasd',
    price: 45,
    date: ' last update 20.01.200',
    img: 'img/logo.png'
  },
  {
    name: 'Apparel',
    description: 'Asiaasdadsasdadadsadasd',
    price: 45,
    date: ' last update 20.01.200',
    img: 'img/logo.png'
  }
];

function Apparel() {
  let el = document.getElementById('side2');
  el.addEventListener('click', cart());
}

function cart(products) {
  let div = document.createElement('div');
  div.classList.add('col');
  div.classList.add('mb-4');
  div.id = 'pr2';

  let cardDiv = document.createElement('div');
  cardDiv.classList.add('card');

  let img = new Image();
  img.setAttribute('src', `${products.img}`);
  img.setAttribute('height', '218');
  img.classList.add('card-img-top');
  cardDiv.appendChild(img);

  let bodyDiv = document.createElement('div');
  bodyDiv.classList.add('card-body');

  let h5 = document.createElement('h5');
  h5.classList.add('card-title');
  h5.textContent = `${products.name}`;
  bodyDiv.appendChild(h5);

  let paragraph = document.createElement('p');
  paragraph.classList.add('card-text');
  paragraph.textContent = `${products.description}`;
  bodyDiv.appendChild(paragraph);

  let bodyDiv2 = document.createElement('div');
  bodyDiv2.classList.add('card-body');

  let button = document.createElement('button');
  button.type = 'button';
  button.classList.add('btn');
  button.classList.add('btn-dark');
  button.classList.add('bookCar');
  button.textContent = 'More information';
  bodyDiv2.appendChild(button);

  var eleme = document.getElementById('content9');
  eleme.appendChild(div);
}

//   var at = document.createAttribute("");
//   at.value = ;

//   p.setAttributeNode(at);
//   var tt = document.createTextNode("This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.");
//   p.textContent(products.description[0]);
//   element.appendChild(p);
