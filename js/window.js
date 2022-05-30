
// Here you can configure the window size

var width = 400
var height = 300
var offsetX = 0
var offsetY = 0


// Apply window size at start and center window

window.resizeTo (width, height);
window.moveTo(((screen.width - width) / 2) - offsetX, ((screen.height - height) / 2) - offsetY);

// Function used to send a reply from JS to BATCH ( A reply is saved and the window is restarted to return to the batch loop )

function send(reply){
    var fso = new ActiveXObject("Scripting.FileSystemObject");
    fso.GetStandardStream(1).WriteLine(reply);
    window.close();
}