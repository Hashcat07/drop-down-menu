const container=document.querySelectorAll(".container")
container.forEach((contain)=>{
    const trigger=contain.querySelector(".trigger")
    const content=contain.querySelector(".content")

trigger.addEventListener("click",()=>
{
    getComputedStyle(content).display=="none"? content.style.display="block":content.style.display="none"
})
})
