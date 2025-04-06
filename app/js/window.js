
// Here you can set window size
var width = 400
var height = 300

// Apply window size at start
window.resizeTo(width, height);

// Center window
window.moveTo(
    (screen.width - width) / 2, 
    (screen.height - height) / 2
);

// Function to send message from JS to BATCH ( Sends to 'script.bat' )
function shell(msg, visible) {
    
    var path = "script.bat"
    var shell = new ActiveXObject("WScript.Shell");
    var fs = new ActiveXObject("Scripting.FileSystemObject");

    // Decode any %20 etc. from file:// path
    rawPath = decodeURIComponent(window.location.pathname);

    // Remove leading slash on some Windows setups (file:///C:/...)
    if (rawPath.charAt(0) === '/' && rawPath.charAt(2) === ':') {
        rawPath = rawPath.slice(1);
    }

    // Join all paths to build command
    var script = [fs.GetParentFolderName(rawPath), path].join("\\");
    var command = [script, JSON.stringify(msg)].join(" ");

    try {
        shell.Run(command, visible || 0, false); // false = don't wait
    } catch (e) {
        alert("Error running batch file:\n" + e.message + "\nPath: " + batFile);
    }
}