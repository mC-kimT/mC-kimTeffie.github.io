let bar = document.querySelector('.bar')
let topBtn = document.querySelector('.topBtn')
let btn = document.querySelector('.topBtn i')
let contactBtn = document.querySelector('.btn')
let btn2 = document.querySelector('.btn a')
let nav = document.querySelector('nav ul')

bar.addEventListener('click',()=>{
    bar.classList.toggle('active')
    nav.classList.toggle('active')
})

topBtn.addEventListener('click',()=>{
    btn.click()
})
contactBtn.addEventListener('click',()=>{
    btn2.click()
})








var options = {
    strings: ['Freelancer', 'Web Developer', 'Youtuber'],
    typeSpeed: 100,
    backSpeed: 100,
    loop: true
  };
  
  var typed = new Typed('.typing1', options);
  var typed = new Typed('.typing2', options);

  ScrollOut({
    targets: '.img, .aboutText , .box, div.left, div.right'
  })
  ScrollOut({
    targets: '.header',
    offset: 50
  })
  
  // Dark Mode / light mode
let darkmode = document.querySelector("#darkmode");

darkmode.onclick = () => {
  if (darkmode.classList.contains("bx-moon")) {
    darkmode.classList.replace("bx-moon", "bx-sun");
    document.body.classList.add("active");
  } else {
    darkmode.classList.replace("bx-sun", "bx-moon");
    document.body.classList.remove("active");
  }
};