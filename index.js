
function newImage( imgSrc , imgLeft , imgBottom  ){
    let object = document.createElement('img')
    object.src = imgSrc
    object.style.position = 'fixed'
    object.style.left = imgLeft + "px"
    object.style.bottom = imgBottom + "px"
document.body.append(object)
   return object
}



function newItem( imgSrc , imgLeft , imgBottom){
    let object = newImage( imgSrc , imgLeft , imgBottom);
    object.addEventListener("dblclick", function(){
    object.remove()})
}

newImage("assets/tree.png","300","300")
newImage("assets/pillar.png","350","100")
newImage("assets/crate.png","150","200")
newImage("assets/well.png","500","425")
newImage("assets/green-character.gif","200","200")
newImage("assets/pine-tree.png","450","200")
newItem("assets/sword.png","500","405")
newItem("assets/sheild.png","165","185")
newItem("assets/staff.png","600","100")