
// code for dark mode toggle
const toggleBtn = document.querySelector(".header__dark-mode-toggler__btn");
const body = document.querySelector("body");
const root = document.querySelector(":root");
const style =   getComputedStyle(root);

toggleBtn.addEventListener("click",function(){
   
    this.classList.toggle("translate");
    if(this.classList.contains("translate")){ // toggle to dark mode
        root.style.setProperty("--background-color","hsl(230, 17%, 14%)")
        root.style.setProperty("--overViewCard-color","hsl(228, 28%, 20%)")
        root.style.setProperty("--number-font-color","hsl(0, 0%, 100%)")
        root.style.setProperty("--text-font-color","hsl(228, 34%, 66%)")
        root.style.setProperty("--toggle-theme","linear-gradient(90deg,hsl(210, 78%, 56%),hsl(146, 68%, 55%))");
        root.style.setProperty("--toggle-btn","hsl(230, 17%, 14%)");
        root.style.setProperty("--hover","hsla(228, 28%, 50%,0.4)");
    } else {
        root.style.setProperty("--background-color","hsl(0, 0%, 100%)")
        root.style.setProperty("--overViewCard-color","hsl(227, 47%, 96%)")
        root.style.setProperty("--number-font-color","hsl(230, 17%, 14%)")
        root.style.setProperty("--text-font-color","hsl(228, 12%, 44%)")
        root.style.setProperty("--toggle-theme","hsl(230, 22%, 74%)")
        root.style.setProperty("--toggle-btn","hsl(0, 0%, 100%)");
        root.style.setProperty("--hover","rgba(0,0,0,0.1)");
    }
})

function changeMode(){
   
}


//   /* dark mode */
//   --very-dark-blue: hsl(230, 17%, 14%);
//   --very-dark-blue: hsl(232, 19%, 15%);
//   --dark-desaturated-blue : hsl(228, 28%, 20%);
//   --desaturated-blue: hsl(228, 34%, 66%);
//   --white : hsl(0, 0%, 100%);
  
//   /* light mode */
//   --white: hsl(0, 0%, 100%);
//   --very-pale-blue: hsl(225, 100%, 98%);
//   --light-grayish-blue : hsl(227, 47%, 96%);
//   --dark-grayish-blue: hsl(228, 12%, 44%);
  
  
//   --header-font-size: 12px;
  
//   /* --background-color: var(--very-pale-blue);
//  --overViewCard-color: var(--light-grayish-blue);
//  --number-font-color: var(--very-dark-blue);
//  --toggle-theme: var(--toggle-light-theme);
//  --text-font-color: var(--dark-grayish-blue);





