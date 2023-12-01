
function colorsFunc() {
    const colors=document.querySelectorAll(".color-wrapper");
  colors.forEach((color)=>{
   color.addEventListener("click",function(){
    color.classList.add("hover");
   })
  })

}


export default colorsFunc();