window.addEventListener('load', function() {
    const orderForm = document.getElementById('order-form');
    orderForm.addEventListener('submit', function(event) {
      event.preventDefault();
      event.stopPropagation();

      if (!orderForm.checkValidity()) {
        orderForm.classList.add('was-validated');
        return;
      }
  
      const name = document.getElementById('name').value;
      const phone = document.getElementById('phone').value;
      const email = document.getElementById('email').value;
      const address = document.getElementById('address').value;
  
      const cartItems = JSON.parse(sessionStorage.getItem('cartItems'));
  
      const order = {
        client: {
          name: name,
          phone: phone,
          email: email,
          address: address
        },
        items: cartItems
      };
  
      localStorage.setItem('order', JSON.stringify(order));
  
      sessionStorage.removeItem('cartItems');
      alert("Comanda a fost plasata! Va multumim!")
      window.location.href = 'index.html';



    });
  });
  