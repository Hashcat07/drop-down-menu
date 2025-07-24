const container=document.querySelectorAll(".container")
container.forEach((contain)=>{
    
    const trigger=contain.querySelector(".trigger")
    const content=contain.querySelector(".content")
content.style.display="none"
trigger.addEventListener("mouseenter",()=>
{
    content.style.display="block"
})
trigger.addEventListener("mouseleave",()=>{
    content.style.display="none"
})
})

