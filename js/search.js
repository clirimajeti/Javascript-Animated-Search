const searchBtn = document.getElementById('search-icon');
const search = document.getElementById('search');
const searchAnimation = document.getElementById('search-animation');
const tip = document.getElementById('tip');

searchBtn.addEventListener('click', ()=>{
    search.style.animation = 'none';
    search.style.width = '50%';
    search.style.paddingLeft = '50px';
    search.style.cursor = 'text';
    search.focus();
    searchAnimation.style.animation = 'none';
    searchAnimation.style.zIndex = "-1";
});
 search.addEventListener('blur',()=>{
    search.style.width = '20px';
    search.style.paddingLeft = '20px';
    search.style.cursor = 'pointer';
    search.value = ""; 
    searchAnimation.style.animation = 'grow 1s infinite 2s';
 });
