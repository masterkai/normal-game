const cover = document.querySelector('.cover')
cover.addEventListener('click', ()=>{
  cover.style.display='none'
})

const close = document.querySelector('.close')
const modal = document.querySelector('.modal')
const luckyCat = document.querySelector('.luckyCat')
luckyCat.addEventListener('click',()=>{
  modal.classList.add('show')
})
close.addEventListener('click',()=>{
  modal.classList.remove('show')
})

resizeDiv();
window.onresize = function (event) {
  resizeDiv();
}

function resizeDiv() {
  var viewportHeight = $(window).height();
  $('.game_bg').css('height', viewportHeight);

}