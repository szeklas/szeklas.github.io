function MouseOver(target){
    target.style.filter="drop-shadow(2px 1px 3px grey)"
}

function MouseLeave(target){
    target.style.filter="none"
}


const sections=document.querySelectorAll("section")

window.onscroll=()=>{
    sections.forEach(sec=>{
        let offset=window.scrollY
        let top=sec.offsetTop-400
        let height=sec.offsetHeight

        if(offset >= top && offset < top + height){
            sec.classList.add("show-animate")
        }
        else{
            sec.classList.remove("show-animate")
        }
    })
}



let elements=document.querySelectorAll(".mouseEnterElements")

for(let i=0;i<elements.length;i++){
    elements[i].addEventListener("mouseenter",()=>{
            elements[i].style.filter="drop-shadow(2px 1px 3px grey)"
    })
}

for(let i=0;i<elements.length;i++){
    elements[i].addEventListener("mouseleave",()=>{
        elements[i].style.filter="none"
    })
}

