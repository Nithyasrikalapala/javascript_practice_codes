const grid  =document.getElementsByClassName("ctn")[0]



const gridhandler= (event)=>{
    const division=document.getElementById(event.target.id)
    if(division.getElementsByTagName("img").length===1){
        alert("Please select other field")
        return
    }
    console.log(division);
    const cross= document.createElement("img")
    cross.src="close.png"
    division.appendChild(cross)
}


grid.addEventListener("click",gridhandler)