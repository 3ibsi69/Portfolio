const anims=document.querySelectorAll('.anim');

window.addEventListener('scroll',scrollAnim);

scrollAnim();
function scrollAnim(){
const triggerBottom=window.innerHeight/5*4;

anims.forEach(anim=>{
    const animTop=anim.getBoundingClientRect().top;
    if(animTop<triggerBottom){
        anim.classList.add('show');
    }else{
        anim.classList.remove('show');
    }
});
}


const zoomins=document.querySelectorAll('.zoomin');

window.addEventListener('scroll',scrollzoomin);

scrollzoomin();
function scrollzoomin(){
const triggerBottom=window.innerHeight/5*4;
zoomins.forEach(zoomin=>{
    const zoominTop=zoomin.getBoundingClientRect().top;
    if(zoominTop<triggerBottom){
        zoomin.classList.add('showz');
    }else{
        zoomin.classList.remove('showz');
    }
});
}




const flipups=document.querySelectorAll('.flipup');

window.addEventListener('scroll',scrollflipup);

scrollflipup();
function scrollflipup(){
const triggerBottom=window.innerHeight/5*4;
flipups.forEach(flipup=>{
    const flipupTop=flipup.getBoundingClientRect().top;
    if(flipupTop<triggerBottom){
        flipup.classList.add('showf');
    }else{
        flipup.classList.remove('showf');
    }
});
}



const slidedowns=document.querySelectorAll('.slidedown');

window.addEventListener('scroll',scrollslidedown);

scrollslidedown();
function scrollslidedown(){
const triggerBottom=window.innerHeight/5*4;
slidedowns.forEach(slidedown=>{
    const slidedownTop=slidedown.getBoundingClientRect().top;
    if(slidedownTop<triggerBottom){
        slidedown.classList.add('shows');
    }else{
        slidedown.classList.remove('shows');
    }
});
}