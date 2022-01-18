
function newImage(newImgName, imgSrc , imgLeft , imgBottom  ){
    var newImgName = document.createElement('img')
    newImgName.src = imgSrc
    newImgName.style.position = 'fixed'
    newImgName.style.left = imgLeft
    newImgName.style.bottom = imgBottom
document.body.append(newImgName)
    newImgName.addEventListener("dblclick", function(){
    newImgName.remove()})
}



function newItem(newImgName, imgSrc , imgLeft , imgBottom){
    newImage(newImgName, imgSrc , imgLeft , imgBottom);
    newImgName.addEventListener("dblclick", function(){
    newImgName.remove()})
}

newImage("tree","assets/tree.png","300px","300px")
newImage("pillar","assets/pillar.png","350px","100px")
newImage("crate","assets/crate.png","150px","200px")
newImage("well","assets/well.png","500px","425px")
newImage("greenCharacter","assets/green-character.gif","200px","200px")
newImage("pine-tree","assets/pine-tree.png","450px","200px")
newItem("sword","assets/sword.png","500px","405px")
newItem("shield","assets/sheild.png","165px","185px")
newItem("staff","assets/staff.png","600px","100px")