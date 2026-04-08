/* const about = document.getElementById("about")
const expand = document.getElementById("expand")
let expanded = false

expand.addEventListener('click', ()=>{
    expanded = !expanded
    
    if(expanded){
        // about.className = "lg:w-4/5 bg-amber-300 mx-auto pt-20 h-auto transition-all duration-900"
        about.classList.remove("hidden")
        about.classList.add("m-h-auto")
        about.classList.add("bg-amber-900")
        expand.className = " block mt-0 cursor-pointer mx-auto w-fit rounded-full font-icon text-4xl p-3 text-red-700 bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(150,150,150,0.6)_40%,rgba(255,255,255,0)_70%)] rotate-0 "
    }else{
        about.classList.add("hidden")

        expand.className = " block mt-0 cursor-pointer mx-auto w-fit rounded-full font-icon text-4xl p-3 text-red-700 bg-[radial-gradient(circle,rgba(255,255,255,1)_0%,rgba(150,150,150,0.6)_40%,rgba(255,255,255,0)_70%)] rotate-180 "
    }
        

    
}) */


const about = document.getElementById("about");
const expand = document.getElementById("expand");

let expanded = false;

expand.addEventListener('click', () => {
    expanded = !expanded;

    if (expanded) {
        // expand smoothly
        about.style.maxHeight = about.scrollHeight + "px";
        
        about.classList.remove("opacity-0");
        about.classList.add("opacity-100");
        
        expand.classList.remove("rotate-180");
        expand.classList.add("rotate-0");
    } else {
        // collapse smoothly
        about.style.maxHeight = "0px";

        about.classList.remove("opacity-100");
        about.classList.add("opacity-0");
        
        expand.classList.remove("rotate-0");
        expand.classList.add("rotate-180");
    }
});