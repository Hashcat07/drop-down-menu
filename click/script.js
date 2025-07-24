const container=document.querySelector(".container")
const trigger=container.querySelector(".trigger")
const content=container.querySelector(".content")

trigger.addEventListener("click",()=>
{
    getComputedStyle(content).display=="none"? content.style.display="block":content.style.display="none"
})