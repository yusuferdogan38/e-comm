
function homeSideBarFunc() {
    //home side bar  js start
const btnOpenSideBar= document.querySelector("#btn-menu");
const sideBar= document.querySelector("#side-bar");
const sideBarClose= document.querySelector("#btn-close");
btnOpenSideBar.addEventListener("click", function(){   
    sideBar.style.left="0";
    sideBar.style.zIndex="1";
})

sideBarClose.addEventListener("click", function(){
    sideBar.style.left="-100%";
})


/*click outside start*/
document.addEventListener("click",function (event) {
   if (!event.composedPath().includes(sideBar)&&!event.composedPath().includes(btnOpenSideBar) ) {
    sideBar.style.left="-100%";
   }
})

/*click outside end*/
//home side bar  js end
}

function modalSearchFunc(params) {
    /*modal search start*/
                  
const btnOpenSearch = document.querySelector("#btn-search");
const modalSearch=document.getElementsByClassName("modal-search")
const modalSearchWrapper=document.getElementsByClassName("modal-wrapper")
const btnCloseSearch = document.querySelector("#btn-modal-close");

btnOpenSearch.addEventListener("click",function () {
    modalSearch[0].style.visibility="visible";
    modalSearch[0].style.opacity="1";
});

btnCloseSearch.addEventListener("click",function () {
    modalSearch[0].style.visibility="hidden";
    modalSearch[0].style.opacity="0";
})

/*click outside*/
document.addEventListener("click",function (e) {
    if (!e.composedPath().includes(modalSearchWrapper[0])&&
    (!e.composedPath().includes(btnOpenSearch))) {
        modalSearch[0].style.visibility="hidden";
        modalSearch[0].style.opacity="0";
    }
})
/*modal search end*/
}
 
 function headerFunc() {
    homeSideBarFunc();
    modalSearchFunc();
};


export default  headerFunc();



