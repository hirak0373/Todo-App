function addItem()
{
    var ul = document.getElementById("list")
    
    var tr = document.createElement("tr");
    var li = document.createElement("td");
    var l = document.getElementById("todo");
    var text = document.createTextNode(l.value)
    li.setAttribute("class","lidec")
    li.appendChild(text)
    l.value = ""
    tr.appendChild(li)
    console.log(tr)
    //Delete Button
    var DelBtn = document.createElement("button");
    var text = document.createTextNode("Delete");
    DelBtn.appendChild(text)
        
    // Delete Button Attribute
    DelBtn.setAttribute("class","Btn");
    DelBtn.setAttribute("onclick","Del(this)");
    var li = document.createElement("td");
    li.appendChild(DelBtn)
    tr.appendChild(li)    
     //Edit Button
     var DelBtn = document.createElement("button");
     var text = document.createTextNode("Edit");
     var li = document.createElement("td");
     DelBtn.appendChild(text)
         
     // Edit Button Attribute
     DelBtn.setAttribute("class","Btn");
     DelBtn.setAttribute("onclick","Edit(this)");
     li.appendChild(DelBtn)    
     tr.appendChild(li)
    
     ul.appendChild(tr)
   // console.log(li)

}



function DelAll()
{
    var ul = document.getElementById("list")
    ul.innerHTML="";
}



function Del(e)
{
e.parentNode.parentNode.remove()
}



function Edit(e)
{
   console.log( e.parentNode.parentNode.childNodes[0].innerHTML)
 var j =  prompt(" Enter new value or edit ",e.parentNode.parentNode.childNodes[0].innerHTML);
 e.parentNode.parentNode.childNodes[0].innerHTML =j; 
}
