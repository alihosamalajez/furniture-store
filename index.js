// start cart

function addCartClicked(event) {
  var button = event.target;
  var shopProducts = button.parentElement;
  let pa1 = shopProducts.parentElement;
  let pa2 = pa1.parentElement;
  let pa3 = pa2.parentElement;
  var price = pa1.children[0].innerText;
  var title = pa2.children[0].innerText;
  var productImg = pa3.children[0].src;
  addProductToCart(title, price, productImg);
}

let cartIcon = document.getElementById("carta");
let cart = document.querySelector(".cart");
let close = document.querySelector("#close-cart");

cartIcon.onclick = () => {
  cart.classList.add("active");
};
close.onclick = () => {
  cart.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", ready);
} else {
  ready();
}
function ready() {
  var removeCartBut = document.getElementsByClassName("cart-remove");
  for (var i = 0; i < removeCartBut.length; i++) {
    var button = removeCartBut[i];
    button.addEventListener("click", removeCartItem);
  }
  var addcart = document.getElementsByClassName("add-cart");
  for (var i = 0; i < addcart.length; i++) {
    var button = addcart[i];
    button.addEventListener("click", addCartClicked);
    addcart[i].onclick = () => {};
  }
}
function addProductToCart(title, price, productImg) {
  var cartShopBox = document.createElement("div");
  cartShopBox.classList.add("cart-box");
  var cartItems = document.getElementsByClassName("cart-content")[0];
  var cartItemsNames = cartItems.getElementsByClassName("cart-img");
  for (var i = 0; i < cartItemsNames.length; i++) {
    if (cartItemsNames[i].src == productImg) {
      alert("you have already add this item to cart");
      return;
    }
  }
  var cartBoxContent = `
  <div>
  <img src="${productImg}" class="cart-img" alt="">
  <p class="product-title">${title}</p>
  </div>
  <div class="detail">
      <p class="cart-price">${price}</p>
      <i class="fa-solid fa-trash cart-remove"></i>
  </div>`;
  cartShopBox.innerHTML = cartBoxContent;
  cartItems.append(cartShopBox);
  cartShopBox
    .getElementsByClassName("cart-remove")[0]
    .addEventListener("click", removeCartItem);
}
function removeCartItem(event) {
  var buttonClicked = event.target;
  let btn2 = buttonClicked.parentElement
  btn2.parentElement.remove();
}
// end cart

// start wishlist

function addWishClicked(event) {
  var buttonn = event.target;
  var shopProductss = buttonn.parentElement;
  let pa11 = shopProductss.parentElement;
  let pa22 = pa11.parentElement;
  let pa33 = pa22.parentElement;
  var pricee = pa11.children[0].innerText;
  var titlee = pa22.children[0].innerText;
  var productImgg = pa33.children[0].src;
  addProductToWish(titlee, pricee, productImgg);
}

let wishIcon = document.getElementById("wisha");
let wish = document.querySelector(".wish");
let closee = document.querySelector("#close-wish");

wishIcon.onclick = () => {
  wish.classList.add("active");
};
closee.onclick = () => {
  wish.classList.remove("active");
};

if (document.readyState == "loading") {
  document.addEventListener("DOMContentLoaded", readyy);
} else {
  readyy();
}

function readyy() {
  var removeWishBut = document.getElementsByClassName("wish-remove");
  for (var i = 0; i < removeWishBut.length; i++) {
    var buttonn = removeWishBut[i];
    buttonn.addEventListener("click", removeWishItem);
  }
  var addwish = document.getElementsByClassName("wishlist");
  for (var i = 0; i < addwish.length; i++) {
    var button = addwish[i];
    button.addEventListener("click", addWishClicked);
  }
}

function addProductToWish(titlee, pricee, productImgg) {
  var wishShopBox = document.createElement("div");
  wishShopBox.classList.add("wish-box");
  var wishItems = document.getElementsByClassName("wish-content")[0];
  var wishItemsNames = wishItems.getElementsByClassName("wish-img");
  for (var i = 0; i < wishItemsNames.length; i++) {
    if (wishItemsNames[i].src == productImgg) {
      alert("you have already add this item to wishlist");
      return;
    }
  }
  var wishBoxContent = `
    <div>
      <img src="${productImgg}" class="wish-img" alt="">
      <p class="product-title">${titlee}</p>
    </div>
    <div class="wish-detail">
        <p class="wish-price">${pricee}</p>
        <i class="fa-solid fa-trash wish-remove"></i>
    </div>`;

  wishShopBox.innerHTML = wishBoxContent;
  wishItems.append(wishShopBox);
  wishShopBox
    .getElementsByClassName("wish-remove")[0]
    .addEventListener("click", removeWishItem);
}
function removeWishItem(event) {
  var buttonClickedd = event.target;
  var btn1 = buttonClickedd.parentElement;
  btn1.parentElement.remove();
}

// start color
let root = document.querySelector(":root");
let gcs = getComputedStyle(root);
let mainColor = gcs.getPropertyValue("--main-color");
let lis = document.querySelectorAll(".color1 li");
let exp = document.querySelector(":root");
if (window.localStorage.getItem("color")) {
  root.style.setProperty("--main-color", window.localStorage.getItem("color"));
}
lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    mainColor = e.currentTarget.dataset.color;
    root.style.setProperty("--main-color", e.currentTarget.dataset.color);
  });
});
// end color

// start toggle menu
let toggleB = document.querySelector(".toggle-menu");
let tlink = document.querySelector(".lin");
let lik = document.querySelectorAll(".main li a");
if (tlink.classList.contains("open")) {
  tlink.classList.toggle("open");
}
toggleB.onclick = function () {
  tlink.classList.toggle("open");
};
document.addEventListener("click", (e) => {
  if (e.target !== toggleB && e.target !== tlink) {
    if (tlink.classList.contains("open")) {
      tlink.classList.toggle("open");
    }
  }
});

// end toggle menu

let box = document.querySelectorAll(".sofa .box .learn");

for (let i = 0; i < box.length; i++) {
  box[i].onclick = () => {
    window.location = "product-details.html";
  };
}

// start setting
let setting = document.querySelector(".setting");
let btnSetting = document.querySelector(".setting .icon");

btnSetting.onclick = () => {
  setting.classList.toggle("open");
};

// change background
let backgroundImage = document.querySelector(".landing .img");
let imgsArray = [
  "./images/33.jpg",
  "./images/back22.jpg",
  "./images/lamp1.jpg",
  "./images/lamp2.jpg",
];
setInterval(() => {
  let random = Math.floor(Math.random() * imgsArray.length);
  backgroundImage.style.backgroundImage = `url(${imgsArray[random]})`;
}, 10000);

// change language

const translations = {
  en: {
    color: "Colors :",
    language: "Language :",
    home: "Home",
    cart: "Cart",
    wishlist: "Wishlist",
    contact: "Contact",
    about: "About",
    login: "Login",
    staor: "Store",
    addCart: "Your Cart",
    addWishlist: "Your Wishlish",
    welcome: "Welcome to our <span> furniture </span> site .",
    wel: "We have a wide range of quality furniture that will help you create a abeautiful and comfortable home.",
    safas: "safas",
    soTitle1: "Three-seat sofa",
    soDetiles1:
      "The sofa gives a beautiful look to the place, in addition to its spaciousness for all members of your family.",
    soPrice1: "prices : 180$ <del>220$</del>",
    table: "tables",
    tabTitle1: "Brown dining table",
    tabDetiles1:
      "A dining and study table that can accommodate all members of your family and all weddings.",
    tabPrice1: "prices : 180$ <del>220$</del>",
    lamps: "lamps",
    lamTitle1: "Iron desk lamp",
    lamDetiles1:
      "The desk lamp gives the space an elegant and comfortable look and helps in studying.",
    lamPrice1: "prices : 180$ <del>220$</del>",
    learn: "See more",
    about: "About Us",
    furnStore: "Furniture<span> store</span>",
    about1:
      "Welcome to our furniture store, where we offer a wide selection of stylish and comfortable furniture for your home. Our inventory includes sofas, tables, and lamps that are carefully crafted to meet your unique tastes and needs. Our sofas are available in a variety of sizes, styles, and colors, making it easy for you to find the perfect fit for your living room. Whether you're looking for a classic leather sofa or a cozy fabric loveseat, we have a variety of options to choose from. In addition to sofas, we also carry a selection of beautiful and functional tables, including coffee tables, end tables, and dining tables. Our tables are made from high-quality materials,such as solid wood and tempered glass, ensuring they will last for years to come.",
    about2:
      "The purpose of a website dedicated to selling furniture is to provide a platform for customers to purchase various furniture items such as sofas, tables, and lamps. The goal of such a website is to make the process of buying furniture convenient, efficient, and accessible for customers by offering a wide range of products, detailed product information, and an easy-to-use online shopping experience. Additionally, the website may aim to increase brand visibility and drive sales for the furniture retailer.",
    enterName: "enter name",
    enterEmail: "enter email",
    enterMessage: "enter message",
    submit: "submit",
    get: "Get in touch",
    contact1:
      "Thank you for your interest in our furniture store. We value your business and want to ensure that you have a seamless shopping experience with us. If you encounter any issues or have questions about our website, please do not hesitate to reach out to us.",
    contact2:
      "You can keep in touch with us through several channels, including email, phone, or by filling out a contact form on our website. Our customer service team is available to assist you during business hours and will respond to your inquiry as soon as possible.",
    sign: "Sign In",
    dont: "Don't have an account ? ",
    registerHere: "Register here",
    already: "Already Register ?",
    link: "Furniture / product / details",
    h2title: "Seven seater sofa ",
    spanPrice: "prices : 180$ <del>220$</del>",
    pDetails: " The sofa gives a beautiful look to the place, in addition to its spaciousness for all members of your family.",
    addToCart: "add to cart",
    fast: "Fast delivery .",
    returning: "The possibility of returning the product for free.",
    dollar: "Providing the option to pay upon receipt.",
  },
  ar: {
    color: "الالوان",
    language: "اللغة",
    home: "الرئيسية",
    cart: "العربة",
    wishlist: "المفضلة",
    contact: "تواصل",
    about: "من نحن",
    login: "دخول",
    staor: "متجر",
    addCart: "عربتك",
    addWishlist: "المفضلة",
    welcome: "مرحبًا بك في موقع <span> الأثاث </span> الخاص بنا.",
    wel: "لدينا مجموعة واسعة من الأثاث عالي الجودة الذي سيساعدك على إنشاء منزل جميل ومريح.",
    safas: "اريكة",
    soTitle1: "صوفا بثلاثة مقاعد",
    soDetiles1:
      "الكنبة تضفي شكلاً جميلاً على المكان ، بالإضافة إلى اتساعها لجميع أفرادها عائلتك.",
    soPrice1: "السعر : 180$ <del>220$</del>",
    table: "الطاولات",
    tabTitle1: "طاولة طعام بني",
    tabDetiles1:
      "طاولة طعام ودراسة تتسع لجميع أفراد عائلتك وجميع حفلات الزفاف.",
    tabPrice1: "السعر : 380$ <del>420$</del>",
    lamps: "مصابيح",
    lamTitle1: "مصباح مكتبي حديد",
    lamDetiles1:
      "المصباح المكتبي يضفي على المساحة مظهرًا أنيقًا ومريحًا ويساعد في المذاكرة.",
    lamPrice1: "السعر : 20$ <del>40$</del>",
    learn: "انظر المزيد",
    about: "معلومات عنا",
    furnStore: "متجر <span>اثاث</span>",
    about1:
      "مرحبًا بكم في متجر الأثاث لدينا ، حيث نقدم مجموعة واسعة من الأثاث الأنيق والمريح لمنزلك. يتضمن مخزوننا أرائك وطاولات ومصابيح مصنوعة بعناية لتلبي أذواقك واحتياجاتك الفريدة. تتوفر أرائكنا بمجموعة متنوعة من الأحجام والأنماط والألوان ، مما يسهل عليك العثور على المكان المثالي لغرفة المعيشة الخاصة بك. سواء كنت تبحث عن أريكة جلدية كلاسيكية أو كنبة مريحة من القماش ، فلدينا مجموعة متنوعة من الخيارات للاختيار من بينها. بالإضافة إلى الأرائك ، نحمل أيضًا مجموعة مختارة من الطاولات الجميلة والعملية ، بما في ذلك طاولات القهوة وطاولات النهاية وطاولات الطعام. طاولاتنا مصنوعة من مواد عالية الجودة ، مثل الخشب الصلب والزجاج المقسّى ، مما يضمن استمرارها لسنوات قادمة.",
    about2:
      "الغرض من موقع الويب المخصص لبيع الأثاث هو توفير منصة للعملاء لشراء عناصر أثاث متنوعة مثل الأرائك والطاولات والمصابيح. الهدف من موقع الويب هذا هو جعل عملية شراء الأثاث مريحة وفعالة ويمكن الوصول إليها للعملاء من خلال تقديم مجموعة واسعة من المنتجات ومعلومات مفصلة عن المنتج وتجربة تسوق عبر الإنترنت سهلة الاستخدام. بالإضافة إلى ذلك ، قد يهدف موقع الويب إلى زيادة ظهور العلامة التجارية وزيادة المبيعات لمتاجر الأثاث بالتجزئة.",
    enterName: "أدخل الاسم",
    enterEmail: "أدخل البريد الإلكتروني",
    enterMessage: "أدخل رسالة",
    submit: "أرسل",
    get: "ابقى على تواصل",
    contact1:
      "شكرا لاهتمامك في متجر الأثاث لدينا. نحن نقدر عملك ونريد التأكد أن لديك تجربة تسوق سلسة معنا. إذا واجهت أي مشاكل أو لديك أسئلة حول موقعنا ، من فضلك لا تتردد في التواصل معنا.",
    contact2:
      "يمكنك البقاء على اتصال معنا من خلال عدة قنوات ، بما في ذلك البريد الإلكتروني أو الهاتف أو عن طريق التعبئة نموذج اتصال على موقعنا. فريق خدمة العملاء لدينا متاح لمساعدتك أثناء ساعات العمل وسيتم الرد على استفسارك في أقرب وقت ممكن.",
    sign: "تسجيل الدخول",
    dont: "ليس لديك حساب ؟",
    registerHere: "سجل هنا",
    already: "مسجل بالفعل؟",
    link: "الأثاث / المنتج / التفاصيل",
    h2title: "صوفا بسبعة مقاعد ",
    spanPrice: "الأسعار: 180 $ <del> 220 $ </del>",
    pDetails: "الكنبة تضفي مظهرًا جميلًا على المكان ، بالإضافة إلى اتساعها لجميع أفراد عائلتك. ",
    addToCart: "أضف إلى السلة",
    fast: "توصيل سريع .",
    returning: "امكانية ارجاع المنتج مجانا.",
    dollar: "توفير خيار الدفع عند الاستلام.",
  },
};

let ar = document.querySelector(".ar");
let en = document.querySelector(".en");
let body = document.querySelector("body");
let elements = document.querySelectorAll("[data-i18n]");
ar.onclick = () => {
  window.localStorage.setItem("lang", "ar");
  elements.forEach((ele) => {
    let transKey = ele.getAttribute("data-i18n");
    ele.innerHTML = translations[window.localStorage.getItem("lang")][transKey];
  });
  ar.classList.add("active");
  en.classList.remove("active");
  body.style.direction = "rtl";
  email.placeholder = "أدخل الايميل";
  pass.placeholder = "أدخل كلمة المرور";
  firstName.placeholder = "الاسم الأول";
  lastName.placeholder = "اسم العائلة";
};
let email = document.querySelector("#email");
let pass = document.querySelector("#pass");
let firstName = document.querySelector("#fName");
let lastName = document.querySelector("#lName");
en.onclick = () => {
  window.localStorage.setItem("lang", "en");
  elements.forEach((ele) => {
    let transKey = ele.getAttribute("data-i18n");
    ele.innerHTML = translations[window.localStorage.getItem("lang")][transKey];
  });
  en.classList.add("active");
  ar.classList.remove("active");
  body.style.direction = "ltr";
  email.placeholder = "Enter Email";
  pass.placeholder = "Enter Password";
  firstName.placeholder = "First Name";
  lastName.placeholder = "Last Name";
};

elements.forEach((ele) => {
  let transKey = ele.getAttribute("data-i18n");
  ele.innerHTML = translations[window.localStorage.getItem("lang")][transKey];
});

if (localStorage.getItem("lang") == "ar") {
  body.style.direction = "rtl";
  ar.classList.add("active");
  en.classList.remove("active");
  email.placeholder = "أدخل الايميل";
  pass.placeholder = "أدخل كلمة المرور";
  firstName.placeholder = "الاسم الأول";
  lastName.placeholder = "اسم العائلة";
} else {
  body.style.direction = "ltr";
  en.classList.add("active");
  ar.classList.remove("active");
  email.placeholder = "Enter Email";
  pass.placeholder = "Enter Password";
  firstName.placeholder = "First Name";
  lastName.placeholder = "Last Name";
}
