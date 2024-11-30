var toggleStatus = false;
function navToggle(){
    if(toggleStatus){
        document.getElementsByClassName("nav")[0].style.display ="none";
        toggleStatus =false;
    }else{
        document.getElementsByClassName("nav")[0].style.display ="block";
        toggleStatus = true;
    }
    
}