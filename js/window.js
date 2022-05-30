
// Here you can configure the window size

var width = 400
var height = 300
var offsetX = 0
var offsetY = 0


// Apply window size at start and center window

window.resizeTo (width, height);
window.moveTo(((screen.width - width) / 2) - offsetX, ((screen.height - height) / 2) - offsetY);

// Function used to send a reply from JS to BATCH ( A message is sent to 'gui_shell.bat', please handle your batch code there )
function shell(command){
    // get current path
    var location = window.location.pathname;
    var escaped = location.split("\\")
    var directoryPath = location.replace(escaped[escaped.length-1], "")

    // send a message to 'gui_shell'
    var objShell = new ActiveXObject("WScript.shell");
    objShell.run(directoryPath + 'gui_shell.bat ' + command);
}