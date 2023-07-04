const features = [
  {
    title: "Preturi modice",
    description: "Te vei bucura de cele mai delicioase preparate la cele mai mici preturi",
    image: "moneyy.jpg"
  },
  {
    title: "Livrare rapida",
    description: "Pe langa servirea in locatiile noastre, poti beneficia de cea mai buna masa la tine acasa",
    image: "delivery.jpg"
  },
  {
    title: "Pet friendly",
    description: "Pe terasele noastre iti este permisa venirea cu animale de companie",
    image: "pet.jpg"
  }
];

function createFeatureCard(feature) {
  const card = document.createElement("div");
  card.classList.add("col-12", "col-md-6", "col-lg-4");

  const cardWrapper = document.createElement("div");
  cardWrapper.classList.add("card-wrapper");

  const cardBox = document.createElement("div");
  cardBox.classList.add("card-box", "align-center");

  const imageWrapper = document.createElement("div");
  imageWrapper.classList.add("image-wrapper");

  const image = document.createElement("img");
  image.src = feature.image;
  image.style.width = "50%";
  image.style.height = "50%";
  image.style.objectFit = "cover";


  const title = document.createElement("h5");
  title.classList.add("card-title", "display-7");
  title.innerHTML = "<strong>" + feature.title + "</strong>";

  const description = document.createElement("p");
  description.classList.add("card-text", "display-7");
  description.innerHTML = feature.description;

  imageWrapper.appendChild(image);
  cardBox.appendChild(imageWrapper);
  cardBox.appendChild(title);
  cardBox.appendChild(description);
  cardWrapper.appendChild(cardBox);
  card.appendChild(cardWrapper);

  return card;
}

const featureCards = document.getElementById("feature-cards");
for (const feature of features) {
  const featureCard = createFeatureCard(feature);
  featureCards.appendChild(featureCard);
}
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: 'smooth' });
}

$(document).ready(function() {
  $('#myCarousel').carousel({
    interval: false
  });
});


const menuItems = [
  {
    name: "Tagliatelle al bergamotto con funghi e salmone",
    description: "Somon, ciuperci, ou, vodka, parmezan",
    price: 28,
    image: "tagliatelle.jpg"
  },
  {
    name: "Salata de pui Du Jardin",
    description: "Pui, telina, patrunjel, stafide, nuci",
    price: 25,
    image: "Salata.jpg"
  },
  {
    name: "Risotto cu fructe de mare",
    description: "Fructe de mare, orez, ceapa, vin",
    price: 30,
    image: "risotto.jpg"
  },
  {
    name: "Char Siu Pork Fillet",
    description: "Fillet de porc marinat, susan, verdeturi asiatice",
    price: 35,
    image: "pork.jpg"
  },
  {
    name: "Beetroot Beef Steak",
    description: "Vita, suc de sfecla, busuioc, afine",
    price: 32,
    image: "vita.jpg"
  },
  {
    name: "Azuma Sushi Plate",
    description: "Somon, ton, avocado, castravete, sos de soia",
    price: 38,
    image: "sushi.jpg"
  },
  {
    name: "Deluxe Crème Brûlée",
    description: "Zahar, vanilie, ou, lapte",
    price: 23,
    image: "creme brulee.jpg"
  },
  {
    name: "BlackBerry Panna Cotta",
    description: "Porumb, lapte de capra, miere, mure",
    price: 20,
    image: "pannacotta.jpg"
  },
  {
    name: "Signature Cannoli",
    description: "Fistic, branza, scortisoara, portocala, vanilie",
    price: 25,
    image: "cannoli.jpg"
  }
];

function createMenuItemCard(menuItem) {
  const menuItemCard = document.createElement("div");
  menuItemCard.className = "card col-md-4";

  const menuItemImg = document.createElement("img");
  menuItemImg.className = "card-img-top";
  menuItemImg.src = menuItem.image;
  menuItemCard.appendChild(menuItemImg);

  const menuItemCardBody = document.createElement("div");
  menuItemCardBody.className = "card-body";

  const menuItemName = document.createElement("h5");
  menuItemName.className = "card-title";
  menuItemName.textContent = menuItem.name;
  menuItemCardBody.appendChild(menuItemName);

  const menuItemDescription = document.createElement("p");
  menuItemDescription.className = "card-text";
  menuItemDescription.textContent = menuItem.description;
  menuItemCardBody.appendChild(menuItemDescription);

  const menuItemPrice = document.createElement("p");
  menuItemPrice.className = "card-text";
  menuItemPrice.textContent = menuItem.price.toFixed(2) + "RON";
  menuItemCardBody.appendChild(menuItemPrice);

  const menuItemOrderButton = document.createElement("button");
  menuItemOrderButton.className = "btn btn-primary";
  menuItemOrderButton.textContent = "Comanda acum";
  menuItemCardBody.appendChild(menuItemOrderButton);

  menuItemOrderButton.addEventListener("click", function() {
    addToCart(menuItem);
    const message = `O portie de "${menuItem.name}" a fost adaugata in cos`;
    alert(message);
  });

  menuItemCard.appendChild(menuItemCardBody);

  return menuItemCard;
}

const menuItemsRow = document.getElementById("menuItemsRow");

menuItems.forEach(menuItem => {
  const menuItemCard = createMenuItemCard(menuItem);
  menuItemsRow.appendChild(menuItemCard);
});


function getCartItems() {
  const cartItems = sessionStorage.getItem('cartItems');
  return cartItems ? JSON.parse(cartItems) : [];
}
function removeCartItem(index) {
  const cartItems = getCartItems();
  cartItems.splice(index, 1);
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
}

function addToCart(item){
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];
  cartItems.push(item);
  sessionStorage.setItem('cartItems', JSON.stringify(cartItems));
  displayCartItems(getCartItems());

}

const cartIcon = document.querySelector('.cart-icon');
cartIcon.addEventListener('click', function() {
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems')) || [];

  displayCartItems(cartItems);
});

function displayCartItems(cartItems) {
  const cartContainer = document.getElementById('cart-container');
  const cartTotalElement = document.getElementById('cart-total');
  cartContainer.innerHTML = '';

  let totalCost = 0;

  if (cartItems.length === 0) {
    const emptyMessage = document.createElement('p');
    emptyMessage.textContent = 'Cosul dumneavoastra este gol.';
    cartContainer.appendChild(emptyMessage);
  } else {
    cartItems.forEach(function(item, index) {
      const itemElement = document.createElement('div');
      itemElement.classList.add('cart-item');

      const itemName = document.createElement('span');
      itemName.textContent = item.name;
      itemElement.appendChild(itemName);

      const removeButton = document.createElement('button');
      removeButton.classList.add('remove-button');
      removeButton.innerHTML = 'X';


      removeButton.addEventListener('click', function() {
        removeCartItem(index);
        displayCartItems(getCartItems());
      });

      itemElement.appendChild(removeButton);
      cartContainer.appendChild(itemElement);

      totalCost += item.price;
    });
  }

  cartTotalElement.textContent = totalCost.toFixed(2);

  const cartPanel = document.getElementById('cart-panel');
  cartPanel.style.display = 'block';
}

const continueShoppingBtn = document.getElementById('continue-shopping-btn');
continueShoppingBtn.addEventListener('click', function() {
  const cartPanel = document.getElementById('cart-panel');
  cartPanel.style.display = 'none';
});
const finishOrderBtn = document.getElementById('finish-order-btn');
finishOrderBtn.addEventListener('click', function() {
  const cartPanel = document.getElementById('cart-panel');
  cartPanel.style.display = 'none';
  const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
  if (!cartItems || cartItems.length === 0) {
    alert('Cosul este gol!');
    return;
  }

  window.location.href = 'order.html';
});





document.addEventListener("DOMContentLoaded", function() {
  const overlay = document.getElementById("overlay");
  const cookiePopup = document.getElementById("cookie-popup");
  const consentButton = document.getElementById("consent-button");

  const hasConsent = getCookieValue("consentCookie") === "true";

  if (!hasConsent) {
    overlay.style.display = "block";
    cookiePopup.style.display = "block";
  }

    consentButton.addEventListener("click", function() {
      setCookie("consentCookie", "true", 365);
      overlay.style.display = "none";
      cookiePopup.style.display = "none";
    });
});

  const existingReservations = getCookieReservations("reservations") || [];

  const reservationForm = document.getElementById('reservation-form');
  reservationForm.addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const date = document.getElementById('date').value;
    const time = document.getElementById('time').value;
    const partySize = document.getElementById('party-size').value;

    const newReservation = {
      name,
      email,
      phone,
      date,
      time,
      partySize
    };

    existingReservations.push(newReservation);

    setCookieReservations("reservations", existingReservations, 365);

    reservationForm.reset();

    alert('Rezervare inregistrata!');

    reservationForm.submit();
  });

  function getCookieValue(cookieName) {
    const cookies = document.cookie.split("; ");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].split("=");
      if (cookie[0] === cookieName) {
        return cookie[1];
      }
    }
    return "";
  }

  function setCookie(cookieName, cookieValue, expirationDays) {
    const d = new Date();
    d.setTime(d.getTime() + expirationDays * 24 * 60 * 60 * 1000);
    const expires = "expires=" + d.toUTCString();
    document.cookie = cookieName + "=" + cookieValue + ";" + expires + ";path=/";
  }

  function getCookieReservations(cookieName) {
    const cookieValue = getCookieValue(cookieName);
    return cookieValue ? JSON.parse(cookieValue) : null;
  }

  function setCookieReservations(cookieName, cookieValue, expirationDays) {
    const serializedValue = JSON.stringify(cookieValue);
    setCookie(cookieName, serializedValue, expirationDays);
  }






fetch('founders.xml')
  .then(response => response.text())
  .then(data => {
    const parser = new DOMParser();
    const xmlDoc = parser.parseFromString(data, 'text/xml');

    const founders = xmlDoc.getElementsByTagName('founder');
    const foundersContainer = document.getElementById('founders-container');

    for (const founder of founders) {
      const name = founder.getElementsByTagName('name')[0].textContent;
      const position = founder.getElementsByTagName('position')[0].textContent;
      const bio = founder.getElementsByTagName('bio')[0].textContent;
      const picture = founder.getElementsByTagName('picture')[0].textContent;

      const founderCard = document.createElement('div');
      founderCard.className = 'founder-card';

      const founderImage = document.createElement('img');
      founderImage.src = picture;
      founderImage.alt = `${name} - ${position}`;

      const founderInfo = document.createElement('div');
      founderInfo.className = 'founder-info';

      const founderName = document.createElement('h3');
      founderName.textContent = name;

      const founderPosition = document.createElement('p');
      founderPosition.textContent = position;

      const founderBio = document.createElement('p');
      founderBio.textContent = bio;

      founderInfo.appendChild(founderName);
      founderInfo.appendChild(founderPosition);
      founderInfo.appendChild(founderBio);

      founderCard.appendChild(founderImage);
      founderCard.appendChild(founderInfo);

      foundersContainer.appendChild(founderCard);
    }
  })
  .catch(error => {
    console.error('Eroare la citirea datelor:', error);
  });






  document.addEventListener("DOMContentLoaded", function() {
    const reviewsCarousel = document.getElementById("reviews-carousel");
    const reviewsUrl = "recenzii.json"; 
  
function createReview(review) {
  const reviewElement = document.createElement("div");
  reviewElement.classList.add("review");
  reviewElement.innerHTML = `
    <h3 class="review-name">${review.name}</h3>
    <p class="review-comment">${review.comment}</p>
  `;
  reviewsCarousel.appendChild(reviewElement);
}

  
    function displayReviews(reviews) {
      reviews.forEach((review) => createReview(review));
    }
  
    function loadReviews() {
      fetch(reviewsUrl)
        .then(response => response.json())
        .then(reviews => displayReviews(reviews))
        .catch(error => console.log("Eroare la încărcarea recenziilor:", error));
    }
  
    function changeReviews() {
      const reviewElements = reviewsCarousel.getElementsByClassName("review");
      let currentIndex = 0;
  
      setInterval(() => {
        reviewElements[currentIndex].classList.remove("active");
        currentIndex = (currentIndex + 1) % reviewElements.length;
        reviewElements[currentIndex].classList.add("active");
      }, 3000); 
    }
  
    loadReviews();
    changeReviews();
  
  });






  var ctx = document.getElementById('myChart').getContext('2d');
var data = {
  labels: ['2019', '2020', '2021', '2022', '2023'],
  datasets: [{
    label: 'Numar mediu de clienti anual',
    data: [10000, 7200, 18000, 21600, 32400],
    backgroundColor: 'rgba(54, 162, 235, 0.5)',
    borderColor: 'rgba(54, 162, 235, 1)',
    borderWidth: 1
  }]
};

var options = {
  responsive: true,
  scales: {
    y: {
      beginAtZero: true
    }
  }
};

var myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});
  
  
  



window.onscroll = function() { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            document.getElementById("back-to-top").style.display = "block";
        } else {
            document.getElementById("back-to-top").style.display = "none";
        }
    }

    document.getElementById("back-to-top").onclick = function() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    };










