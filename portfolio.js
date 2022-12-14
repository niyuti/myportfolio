
const btns = document.querySelectorAll('.btn');
for (const btn of btns) {
    btn.addEventListener("mouseenter",function(e){
        for (const span of btn.children) {
            if (span.nodeName == 'SPAN') {
                span.classList.remove('reset');
                span.classList.add('enter');
            }
        } 
    });
    btn.addEventListener("mouseleave",function(e){

        for (const span2 of btn.childNodes) {
            if (span2.nodeName == 'SPAN') { 
                setTimeout(() => {
                    span2.classList.remove('enter');
                    span2.classList.add('leave');
                }, 100);
                setTimeout(() => {
                    span2.classList.remove('leave');
                    span2.classList.add('reset');
                }, 300);
            }
        } 
    });    
}


const rubberEls = document.querySelectorAll('.rubberband span');
rubberEls.forEach((el)=>{
    el.addEventListener('mouseenter',(e)=>{
        if (!el.classList.contains('enter')) {
            el.parentElement.classList.remove('PopInLetters');
            el.style.animationDelay = '0ms';
            el.classList.add('enter');   
        }
    })
    el.addEventListener('mouseleave',(e)=>{
        setTimeout(() => {
            if (el.classList.contains('enter')) {
                el.classList.remove('enter');
            }
        }, 500);
        
    })
})



const tabAll = document.querySelector('#taball');
let selectedTab=tabAll;
tabAll.addEventListener('click',toggleall);
function toggleall(){
    const items = document.querySelectorAll('.item');
    for (const item of items) {
        item.style.display = 'block';
    }
    if (selectedTab!=undefined) {
        selectedTab.classList.remove('selected');
    }
    selectedTab = tabAll;
    selectedTab.classList.add('selected')
}

const tab1 = document.querySelector('#tab1');
tab1.addEventListener('click',toggletab1);
function toggletab1(){
    const items = document.querySelectorAll('.item');
    for (const item of items) {
        if (item.classList.contains('tab-1')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';            
        }
    }
    if (selectedTab!=undefined) {
        selectedTab.classList.remove('selected');
    }
    selectedTab = tab1;
    selectedTab.classList.add('selected')
}

const tab2 = document.querySelector('#tab2');
tab2.addEventListener('click',toggletab2);
function toggletab2(){
    const items = document.querySelectorAll('.item');
    for (const item of items) {
        if (item.classList.contains('tab-2')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';            
        }
    }
    if (selectedTab!=undefined) {
        selectedTab.classList.remove('selected');
    }
    selectedTab = tab2;
    selectedTab.classList.add('selected')
}

const tab3 = document.querySelector('#tab3');
tab3.addEventListener('click',toggletab3);
function toggletab3(){
    const items = document.querySelectorAll('.item');
    for (const item of items) {
        if (item.classList.contains('tab-3')) {
            item.style.display = 'block';
        } else {
            item.style.display = 'none';            
        }
    }
    if (selectedTab!=undefined) {
        selectedTab.classList.remove('selected');
    }
    selectedTab = tab3;
    selectedTab.classList.add('selected')
}

const itemCards = document.querySelectorAll('.item-card_');
for (const card of itemCards) {
    card.addEventListener('mouseenter',function(){
        for (const child of card.children) {
            child.classList.add('enter');
        }
    });
    card.addEventListener('mouseleave',function(){
        for (const child of card.children) {
            child.classList.remove('enter');
        }
    });
}

const modalBtns = document.querySelectorAll('.modal-open');
for (const btn of modalBtns) {
    btn.onclick = ()=>{
        let target = '#' +btn.getAttribute('_target');
        const modal = document.querySelector(target);
        
        modal.classList.add('visible');
        modal.querySelector('.close').onclick = ()=>{
            modal.classList.add('hide');
            setTimeout(() => {
                modal.classList.remove('hide');  
                modal.classList.remove('visible');
            }, 400);
        }
        window.onclick = function(event) {
            if (event.target == modal.querySelector('.modal-mask')) {
                modal.classList.add('hide');
                setTimeout(() => {
                    modal.classList.remove('hide');  
                    modal.classList.remove('visible');
                }, 400); 
            }
          }
    }
}
window.onscroll = function(){stickyNav();reveal();}
const navbar = document.querySelector('#nav');
const navlist = navbar.querySelector('.navlist');
const sections = document.querySelectorAll('section');
let section;
let selectedNav;
const stickPoint = navbar.offsetTop;
const stickyNav = ()=>{
    if(window.pageYOffset >=stickPoint)
    {
        navbar.classList.add('sticky');
    }else {
        navbar.classList.remove('sticky');
    }
    for (let index = 0; index < sections.length; index++) {
        const s = sections[index];
        if (s.getBoundingClientRect().top <=150) {
            if(selectedNav!=undefined){
                selectedNav.classList.remove('selected');
            }
            selectedNav = navlist.children[index].firstElementChild;
            selectedNav.classList.add('selected');
        }
    }
}

const reveals = document.querySelectorAll('.reveal');
const reveal = ()=>{
    for (const ele of reveals) {
        if (((window.innerHeight-150) > ele.getBoundingClientRect().top) && !ele.classList.contains('active')) {
            ele.classList.add('active');     
        }
    }
}

const menu = document.querySelector('#menu-btn');
menu.onclick = ()=>{
    if (navbar.classList.contains('nav-show')) {
        navbar.classList.remove('nav-show');
        menu.classList.remove('open');
    } else {
        navbar.classList.add('nav-show');
        menu.classList.add('open');
    }
}

// Animation delay code
const PopInElements = document.querySelectorAll('.PopInLetters');
for (const element of PopInElements) {
    const letters = element.querySelectorAll('span');
    let i = 0;
    for (const letter of letters) {
        let delay = (i*200) + 'ms';
        letter.style.animationDelay = delay;
        i++;
        letter.addEventListener('animationend',()=>{letter.style.visibility = 'visible'})
    }
}

const modals = document.querySelectorAll('.modal');
for (const modal of modals) {
    const btnLeft = modal.querySelector('#left');
    const btnRight = modal.querySelector('#right');
    const carouselImages = modal.querySelector('.carousel .images');
    carouselImages.children[0].style.display = 'block';
    carouselImages.children[0].style.animation = 'AnimateRightIn 1s';
    const indicators = modal.querySelector('.indicators');
    for (let index = 0; index < carouselImages.children.length; index++) {
        const indicator = document.createElement('div');
        indicator.classList.add('indicator');
        indicators.appendChild(indicator);            
    }
    indicators.children[0].classList.add('active');

    let imageIndex=0;
    let flag = false;
    btnLeft.onclick = ()=>{
        if (!flag) {
            flag = true;
            setTimeout(() => {
                flag = false;
            }, 900);
            carouselImages.children[imageIndex].style.animation = 'AnimateRightOut 1s';
            indicators.children[imageIndex].classList.remove('active');
            let tempindex = imageIndex;
            setTimeout(() => {
            carouselImages.children[tempindex].style.display = 'none'
            }, 900);
            imageIndex =imageIndex-1;
            if (imageIndex<0) {
                imageIndex = carouselImages.children.length-1;
            }
            carouselImages.children[imageIndex].style.display = 'block'
            carouselImages.children[imageIndex].style.animation = 'AnimateLeftIn 1s';
            indicators.children[imageIndex].classList.add('active');
        }
    }
    btnRight.onclick = ()=>{
        if (!flag) {
            flag = true;
            setTimeout(() => {
                flag = false;
            }, 900);
            carouselImages.children[imageIndex].style.animation = 'AnimateLeftOut 1s';
            indicators.children[imageIndex].classList.remove('active');
            let tempindex = imageIndex;
            setTimeout(() => {
            carouselImages.children[tempindex].style.display = 'none'
            }, 900);
            imageIndex = (imageIndex+1)%carouselImages.children.length;
            carouselImages.children[imageIndex].style.display = 'block'
            carouselImages.children[imageIndex].style.animation = 'AnimateRightIn 1s';
            indicators.children[imageIndex].classList.add('active');
        }
    }
}


