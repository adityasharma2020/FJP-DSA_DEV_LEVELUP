const cursor = document.querySelector('#cursor')
const blur = document.querySelector('#cursor-blur')
document.addEventListener('mousemove', function (dets) {
  cursor.style.left = dets.x + 'px'
  cursor.style.top = dets.y + 'px'

  blur.style.left = dets.x -200+ 'px'
  blur.style.top = dets.y -200+ 'px'
  blur.style.transition = "all ease 0.5s"
})


//-------------- gsap------------------------------
gsap.to('#nav', {
  backgroundColor: '#000',
  duration: 0.5,
  height: '90px',
  scrollTrigger: {
    trigger: '#nav',
    scroller: 'body',
    markers: false,
    start: 'top -10%',
    end: 'top -11%',
    scrub: 1,
  },
})

gsap.to('#main', {
  backgroundColor: '#000',
  scrollTrigger: {
    trigger: '#main',
    scroller: 'body',

    start: 'top -20%',
    end: 'top -50%',
    scrub: 1,
  },
})
