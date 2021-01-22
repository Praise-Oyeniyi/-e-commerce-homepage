function change() {
    var list = document.querySelector('ul');
    const btn = document.querySelectorAll('.btn');
   
          list.classList.toggle('show');
            for(let i = 0; i < btn.length; i++) {
                btn[i].classList.toggle('active');
        }
};


var next = document.querySelector('.next');
var prev = document.querySelector('.prev')
var picSlide = document.querySelector('.slide1');
var textSlide = document.querySelector('.item');
var textContainer = document.querySelector('.flex2');
var slide = ['images/desktop-image-hero-1.jpg','images/desktop-image-hero-2.jpg','images/desktop-image-hero-3.jpg'];

var text = [`<div class="item">
                <h3>
                Discover innovative ways to decorate
                </h3> 
                <p>
                We provide unmatched quality, comfort, and style for property owners across the country. 
                Our experts combine form and function in bringing your vision to life. Create a room in your 
                own style with our collection and make your property a reflection of you and what you love.
                </p>
                <a href="#" class="shop">Shop now <img class='arrow' src="images/icon-arrow.svg" alt="pointer"></a>
                </div>`,
             `<div class="item">
                <h3>
                We are available all across the globe
                </h3> 
                <p>
                With stores all over the world, it's easy for you to find furniture for your home or place of business. 
                Locally, we’re in most major cities throughout the country. Find the branch nearest you using our 
                store locator. Any questions? Don't hesitate to contact us today.
                </p>
                <a href="#" class="shop">Shop now <img class='arrow' src="images/icon-arrow.svg" alt="pointer"></a>
            </div>`,
            `<div class="item">
                <h3>
                Manufactured with the best materials
                </h3>
                <p>
                Our modern furniture store provide a high level of quality. Our company has invested in advanced technology 
                to ensure that every product is made as perfect and as consistent as possible. With three decades of 
                experience in this industry, we understand what customers want for their home and office.
                </p>
                <a href="#" class="shop">Shop now <img class='arrow' src="images/icon-arrow.svg" alt="pointer"></a>
            </div>`
        ];

 textContainer.innerHTML = text[0];

 var num = 0;
 var textS = 0;
 

picSlide.style.background = 'url('+slide[0]+')';

prev.addEventListener('click', ()=>{
    num--;
    textS--;

    if(num < 0 && textS < 0){
       num = slide.length - 1;
       textS = text.length -1;
       
    }
    textContainer.innerHTML = text[textS];
    picSlide.style.background = 'url('+slide[num]+')';;
}
);

next.addEventListener('click', ()=>{
    num++;
    textS++;

    if(num >= slide.length && textS >= text.length){
       num = 0;
       textS =0;
    }
    picSlide.style.background = 'url('+slide[num]+')';
    textContainer.innerHTML =  text[textS];
});

