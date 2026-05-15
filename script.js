const productGrid = document.getElementById("productGrid");
const categoryTitle = document.getElementById("categoryTitle");

const categories = {

  bestsellers: [
    {
      image: "images/bestsellers/product (1).jpeg",
      name: "Pastel Flower Frame",
      price: "₹499",
      desc: "Handmade aesthetic floral frame."
    },
    {
      image: "images/bestsellers/product (2).jpeg",
      name: "Cute Plushie",
      price: "₹699",
      desc: "Soft handmade plush toy."
    },
    {
      image: "images/bestsellers/product (3).jpeg",
      name: "Pink Hair Clips",
      price: "₹199",
      desc: "Elegant pastel clips."
    }
  ],

  customizeproducts: [
    {
      image: "images/customizeproducts/product (1).jpeg",
      name: "Custom Name Frame",
      price: "₹799",
      desc: "Personalized handmade frame."
    },
    {
      image: "images/customizeproducts/product (2).jpeg",
      name: "Custom Mug",
      price: "₹399",
      desc: "Cute custom printed mug."
    },
    {
      image: "images/customizeproducts/product (3).jpeg",
      name: "Photo Embroidery",
      price: "₹999",
      desc: "Customized embroidery artwork."
    }
  ],

  hairclips: [
    {
      image: "images/hairclips/product (1).jpeg",
      name: "Butterfly Clip",
      price: "₹149",
      desc: "Pastel butterfly clip."
    },
    {
      image: "images/hairclips/product (2).jpeg",
      name: "Pearl Hair Clip",
      price: "₹199",
      desc: "Elegant pearl accessory."
    },
    {
      image: "images/hairclips/product (3).jpeg",
      name: "Floral Clip",
      price: "₹179",
      desc: "Cute handmade floral clip."
    }
  ],

  keychains: [
    {
      image: "images/keychains/product (1).jpeg",
      name: "Heart Keychain",
      price: "₹129",
      desc: "Cute resin keychain."
    },
    {
      image: "images/keychains/product (2).jpeg",
      name: "Initial Keychain",
      price: "₹149",
      desc: "Custom alphabet keychain."
    },
    {
      image: "images/keychains/product (3).jpeg",
      name: "Flower Charm",
      price: "₹169",
      desc: "Handmade floral charm."
    }
  ],

  flowers: [
    {
      image: "images/flowers/product (1).jpeg",
      name: "Rose Bouquet",
      price: "₹999",
      desc: "Forever handmade flowers."
    },
    {
      image: "images/flowers/product (2).jpeg",
      name: "Tulip Basket",
      price: "₹799",
      desc: "Cute pastel tulip basket."
    },
    {
      image: "images/flowers/product (3).jpeg",
      name: "Mini Flower Pot",
      price: "₹499",
      desc: "Decorative flower arrangement."
    }
  ],

  purses: [
    {
      image: "images/purses/product (1).jpeg",
      name: "Pastel Purse",
      price: "₹699",
      desc: "Elegant handmade purse."
    },
    {
      image: "images/purses/product (2).jpeg",
      name: "Crochet Handbag",
      price: "₹899",
      desc: "Stylish crochet handbag."
    },
    {
      image: "images/purses/product (3).jpeg",
      name: "Mini Tote",
      price: "₹599",
      desc: "Cute aesthetic mini tote."
    }
  ],

  waist: [
    {
      image: "images/waist/product (1).jpeg",
      name: "Waist Chain",
      price: "₹299",
      desc: "Elegant waist accessory."
    },
    {
      image: "images/waist/product (2).jpeg",
      name: "Pearl Waist Belt",
      price: "₹349",
      desc: "Stylish pearl waist belt."
    },
    {
      image: "images/waist/product (3).jpeg",
      name: "Butterfly Waist Chain",
      price: "₹399",
      desc: "Trendy butterfly design."
    }
  ]

};

function loadCategory(category){

  categoryTitle.innerText =
    category.charAt(0).toUpperCase() + category.slice(1);

  productGrid.innerHTML = "";

  categories[category].forEach(product => {

    productGrid.innerHTML += `

      <div class="product-card">

        <img src="${product.image}" alt="${product.name}">

        <div class="product-info">

          <h3>${product.name}</h3>

          <p class="price">${product.price}</p>

          <p>${product.desc}</p>

        </div>

      </div>

    `;
  });

}

loadCategory("bestsellers");

function toggleMenu(){
  document.getElementById("navLinks").classList.toggle("active");
}
function searchProducts(){

  const input =
    document.getElementById("searchInput")
    .value
    .toLowerCase();

  const cards =
    document.querySelectorAll(".product-card");

  cards.forEach(card => {

    const title =
      card.querySelector("h3")
      .innerText
      .toLowerCase();

    if(title.includes(input)){
      card.style.display = "block";
    }
    else{
      card.style.display = "none";
    }

  });

}