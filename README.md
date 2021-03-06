# Batch GUI - Boilerplate ([Demo](https://streamable.com/2l81mc))
Simple Batch Graphical Interface ( Batch &amp; Javascript )

![gif](https://i.ibb.co/MfvkZbv/ezgif-com-gif-maker-3.gif)

# How Does It Work
This Project was made in [Batch  Script](https://en.wikipedia.org/wiki/Batch_file) and [Javascript](https://en.wikipedia.org/wiki/JavaScript).

It provides a way to **create graphical interfaces** using simple **Batch Script** code.

**Runtime Process**
* Batch Script creates an [HTML Application](https://en.wikipedia.org/wiki/HTML_Application) using [HTA](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).
* Javascript **send responses** directly to **Batch Script**.

**Features**
* Extremelly small size ( Full size of **124kb on disk** )
* Simulated Router Navigation
* Callbacks between JS and BATCH files
* Full style customization made easy with CSS

# How To Use

**Add or Remove pages**
* Pages are handled in `gui.bat`.
* To add or remove a page just **add or remove elements** from the container with `id="pages"`.</br>

Example: 
```js
<div id="pages">
  <div> Page 1 </div>
  <div> Page 2 </div>
</div>
```
 <hr></hr>
 
**Navigation between pages**
* Page events are handled by JS dynamically.
* Use `setPage` function to navigate between pages. </br>

Example: 
```js
<div id="pages">
  <div>
    Page 1
    <div class="button" onclick="setPage(2);">Go to page 2</div>
  </div>
  <div>
    Page 2
    <div class="button" onclick="setPage(1);">Go to page 1</div>
  </div>
</div>
```
<hr></hr>

**Send Messages to Batch**
* Callbacks are handled by JS dynamically.
* Use `shell` function to **send a message** from JS to Batch. </br>

Example: 
```js
<div id="pages">
  <div>
    Page 1
    <div class="button" onclick="shell("ENABLE");">Enable Service</div>
    <div class="button" onclick="shell("LAUNCH");">Launch Program</div>
  </div>
</div>
```  
<hr></hr>

**Receive Messages from JS**
* Messages from JS are handled in `gui_shell.bat`.
* You will **receive the arguments** from the previous `shell` function directly. </br>

Example: 
```batch
@ECHO OFF
set action=%1
echo %action%

pause
```

Output:

    LAUNCH
    Press any key to continue . . .
    
# How To Run
* Execute `gui.bat` or just call it from another process.


# Limitations
* Since this is not running on any browser, **web functions** and **CSS events** are `not available`.</br> 
* **JSON** functions are also `not available` you can use [JSON2.js](https://github.com/douglascrockford/JSON-js) to get them.

# TODO
* Implement JSON object parsing to send in reply.
