window.onload=function () {
    let bigBox=document.getElementsByClassName("bigBox")[0];
    let sonNav=document.getElementsByClassName("sonNav");
    let jsBox=document.getElementsByClassName("jsBox");
    let son3=document.getElementsByClassName("son3")[0];
    let sonImg=son3.getElementsByClassName("sonImg")[0];
    let aL=sonImg.getElementsByTagName("a");
    let icol=bigBox.getElementsByClassName("icol")[0];
    let icor=bigBox.getElementsByClassName("icor")[0];
    let num=0;
    let t=setInterval(move,1000);
    icor.onclick=function(){
        move();
    }
    icol.onclick=function(){
        move1();
    }
    function move() {
        num++;
        if (num==aL.length) {
            num=0;
        }
        for (var i = 00; i < aL.length; i++) {
            aL[i].style.zIndex=5;
        }
        aL[num].style.zIndex=10;
    }
    function move1() {
        num--;
        if (num<0) {
            num=aL.length-1;
        }
        for (var i = 0; i < aL.length; i++) {
            aL[i].style.zIndex=5;
        }
        aL[num].style.zIndex=10;
    }
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
    son3.onmouseenter=function(){
        clearInterval(t)
    }
    son3.onmouseleave=function(){
        t=setInterval(move,1000);
    }
}