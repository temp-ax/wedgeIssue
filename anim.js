window.addEventListener("load", function(){
    const title = document.getElementById("header-title");
    const armies = document.getElementsByClassName("content-a-army");
    const content = document.getElementById("content");
    const bigA = document.getElementById("bigA");
    const bigB = document.getElementById("bigB");
    const submit = document.getElementById("btn-sub");



    title.addEventListener("focus", function(){
        keyframes={
            transform: ["rotate(0deg)","rotate(360deg)"],
            color: ["black", "red", "black"]

        }
        options={
            duration: 2500,
        }
        title.animate(keyframes, options)
    })
    
    content.addEventListener("dblclick",function(){
        for (let i = 0; i < armies.length; i++) {
            snap(armies[i])
        }
    })
    bigA.addEventListener("click",function(){
        for (let i = 0; i < armies.length; i++) {
            snap(bigA)
        }
    })
    bigB.addEventListener("click",function(){
        for (let i = 0; i < armies.length; i++) {
            snap(bigB)
        }
    })
    submit.addEventListener("click",function(){
        const warn = document.getElementById("warn1");
        const err = document.getElementById("err1"); // Fuck em' blindies, the error will always appear
        warn.style.display="none";
        err.style.display="flex";
    })



    title;
})


function snap(el){
    keyframes={
        opacity: ["100","0"],
    }
    options={
        duration: 1000
    }
    el.animate(keyframes, options)
    el.style.opacity=0;
}

function randomColor(){
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    return `rgb(${red}, ${green}, ${blue})`;
}