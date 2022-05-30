/**
 * This is a workaround for the missing web css native functions like :hover
 * Since we are not running js on a browser, we can only use pure javascript and css
 * 
*/

var items = document.getElementsByTagName("*")

// Set mouseover and mouseout events to all elements adding a '_hover' class to enable css hover events
for(var i = 0; i < items.length; i++){
    var element = items[i]
    if(element){
        element.onmouseover = function() {
            var firstClass = this.className.split(' ')[0]
            this.className = [this.className, firstClass + "_hover"].join(" ")
        }
        element.onmouseout = function() {
            var firstClass = this.className.split(' ')[0]
            this.className = this.className.replace(firstClass + "_hover", "")
        }
    }
}