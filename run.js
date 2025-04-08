 var closeoverlay=document.querySelector(".background-overlay")
 var formpage=document.querySelector(".form-page")
var openbutton=document.getElementById("addoverlay")
  
openbutton.addEventListener("click",function()
{
    formpage.style.display="block"
    closeoverlay.style.display="block" 
}) 



//cancel webpage
var deletesite=document.getElementById("delete")
    deletesite.addEventListener("click",function(event)
{
     event.preventDefault()
     deletesite.style.display="none"
     closeoverlay.style.display="none"
})
 //select the input title,input author,input description

var container=document.querySelector(".article1")
var addcontent=document.getElementById("addit")
var inputtitle=document.querySelector(".input-title")
var inputauthor=document.querySelector(".input-author")
var inputdescription=document.querySelector(".input-description")


addcontent.addEventListener("click",function(event)
{
    event.preventDefault()
    var div=document.createElement("div")
    div.setAttribute("class","box1")
    div.innerHTML=`<h1>${inputtitle.value}</h1>
    <h3>${inputauthor.value}</h3>
    <p>${inputdescription.value}</p>
    <button class="btn" onclick="deletebook(event)">delete</button>`
    container.append(div)
    formpage.style.display="none"
    closeoverlay.style.display="none" 
})

function deletebook(event)
{
    event.target.parentElement.remove()
}



