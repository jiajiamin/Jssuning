window.onload=function () {
    let bigBox=document.getElementsByClassName("bigBox")[0];
    let sonNav=document.getElementsByClassName("sonNav");
    let jsBox=document.getElementsByClassName("jsBox");
    for (let i=0;i<sonNav.length;i++){
        sonNav[i].onmouseenter=function(){
            for (let j=0;j<sonNav.length;j++){
                jsBox[j].style.display="none";
            }
            jsBox[i].style.display="block";
        }
        sonNav[i].onmouseleave=function () {
            jsBox[i].style.display="none";
        }
    }
}