function handleClick(url) {
  document.getElementById("MainImg").src = url;
}

//add to cart

const cartProduct = [];

function addToCart(name, price) {
  var oldData = JSON.parse(localStorage.getItem("product"));
  
  if (oldData != null) {
    for (var j = 0; j < oldData.length; j++) {
      cartProduct.push(oldData[j]);
    }
  }
  console.log(cartProduct);
  let productImg = document.getElementById("MainImg").src;
  let quantity = document.getElementById("product-quantity").value;
  console.log(quantity)
  const product = {
    name: name,
    price: price,
    url: productImg,
    quantity:quantity
  };

  cartProduct.push(product);

  localStorage.setItem("product", JSON.stringify(cartProduct));
}

const loadData = () => {
  console.log("harsh gud");
  const data = localStorage.getItem("product");
  const newData = JSON.parse(data);
  var rows = "";
  if (newData.length != 0) {
    for (var j = 0; j < newData.length; j++) {
      console.log(newData[j]);
      let row =
        "<tr>" +
        "<td><i class='far fa-times-circle'></i><a href='#'></a></td>" +
        "<td><img src=" +
        newData[j].url +
        " ></td>" +
        "<td>" +
        newData[j].name +
        "</td>" +
        "<td>" +
        newData[j].price +
        "</td>" +
        "<td><input type='number' value=" +
        newData[j].quantity +
        "></td>" +

        "<td>" +
        newData[j].quantity*newData[j].price +
        "</td>" +
        "</tr>";
      rows += row;
    }
  }

  document.getElementById("cart-data").innerHTML = rows;
};

loadData();
