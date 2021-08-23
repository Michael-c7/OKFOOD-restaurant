import './style.scss';
// images
    // header
    import headerImage1 from "./images/header/pexels-kasumi-loffler-3535395.jpg"
    import headerImage2 from "./images/header/pexels-lisa-1279330.jpg";
    import headerImage3 from "./images/header//pexels-roger-cziwerny-792028.jpg";
// about
    import aboutImage1 from "./images/about/divani-diva-s0duM7x1yuA-unsplash_a.png"
// popular-dish
    import popularDish1 from "./images/popular-dish/amirali-mirhashemian-jh5XyK4Rr3Y-unsplash_a.png";
    import popularDish2 from "./images/popular-dish/homescreenify-sA3wymYqyaI-unsplash_a.png";
    import popularDish3 from "./images/popular-dish/lynda-hinton-77RJFb0IXnQ-unsplash_a.png";
// our-menu
    import ourMenuImage1 from "./images/our-menu/alexandru-bogdan-ghita-UeYkqQh4PoI-unsplash.jpg";
    import ourMenuImage2 from "./images/our-menu/melissa-walker-horn-gtDYwUIr9Vg-unsplash.jpg";
    import ourMenuImage3 from "./images/our-menu/patrick-le-6HvDmcA0W1w-unsplash.jpg";
    import ourMenuImage4 from "./images/our-menu/proriat-hospitality-lwoTuByIuC4-unsplash.jpg";
    import ourMenuImage5 from "./images/our-menu/vitalii-chernopyskyi-Oxb84ENcFfU-unsplash.jpg";
// testimonial
    import testimonialImage1 from "./images/testimonial/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
    import testimonialImage2 from "./images/testimonial/luis-villasmil-hh3ViD0r0Rc-unsplash.jpg";








let $navbarBtn = document.querySelector(".navbar-btn");
let $navbarLinks = document.querySelector(".navbar__links");






// navabar
let navabarFunctonality = _ =>
    $navbarLinks.classList.toggle("show-mobile-menu")


$navbarBtn.addEventListener("click", navabarFunctonality);
