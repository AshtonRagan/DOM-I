const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io"
  },
  footer: {
    copyright: "Copyright Great Idea! 2018"
  }
};

// Example: Update the img src for the logo
const logo = document.getElementById("logo-img");
const wholeNav = document.querySelector("nav");
const navbar = document.querySelectorAll("a");
const bigImage = document.querySelector("#cta-img");
const topH1 = document.querySelector("h1");
const topBtn = document.querySelector("button");
const midImage = document.querySelector(".middle-img");
const topDiv = document.querySelectorAll(".text-content");
const contact = document.querySelectorAll(".contact");
const foot = document.getElementsByTagName("footer");
const newLink = document.createElement("a");
const newLink2 = document.createElement("a");

newLink.textContent = "priceing";
newLink.style.color = "red";
newLink2.textContent = "tours";
newLink2.style.color = "red";

wholeNav.appendChild(newLink);
wholeNav.prepend(newLink2);

logo.setAttribute("src", siteContent["nav"]["img-src"]);

for (let i = 0; i < navbar.length; i++) {
  let num = i + 1;
  navbar[i].textContent = siteContent["nav"][`nav-item-${num}`];
  navbar[i].style.color = "#cc0000";
}

bigImage.setAttribute("src", siteContent.cta["img-src"]);

topH1.textContent = siteContent.cta.h1;
topBtn.textContent = siteContent.cta.button;

midImage.setAttribute("src", siteContent["main-content"]["middle-img-src"]);

// topDiv[0].children[0].textContent =siteContent["main-content"]["features-h4"];
// topDiv[0].children[1].textContent =siteContent["main-content"]["features-content"]

changeIt(0, "features");
changeIt(1, "about");
changeIt(2, "services");
changeIt(3, "product");
changeIt(4, "vision");

contact[0].children[0].textContent = siteContent["contact"]["contact-h4"];
contact[0].children[1].textContent = siteContent.contact.address;
contact[0].children[2].textContent = siteContent.contact.phone;
contact[0].children[3].textContent = siteContent.contact.email;

foot[0].children[0].textContent = siteContent.footer.copyright;

function changeIt(ind1, name) {
  topDiv[ind1].children[0].textContent =
    siteContent["main-content"][`${name}-h4`];
  topDiv[ind1].children[1].textContent =
    siteContent["main-content"][`${name}-content`];
}
