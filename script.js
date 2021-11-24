var ismobile=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
if(ismobile){
    document.getElementById("img1").style.height="250px";
    document.getElementById("img2").style.height="250px";
    document.getElementById("img3").style.height="250px";
}
document.addEventListener("DOMContentLoaded", () => {
    function counter(id,start,end,duration){
        let obj=document.getElementById(id);
        let current=start;
        let range=end-start;
        let increment=end>start?1:-1;
        let stepTime=Math.abs(Math.floor(duration/range));
        let timer=setInterval(()=>{
            current+=increment;
            obj.innerHTML=current+"+";
            if(current==end){
                clearInterval(timer);
            }
        },stepTime);
    }
    counter("counter1",0,110,1000);
    counter("counter2",2300,2796,1000);
    counter("counter3",1100,1590,1000);
});