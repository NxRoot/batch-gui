# Batch GUI - Boilerplate ([Demo](https://streamable.com/2l81mc))

![gif](https://i.ibb.co/MfvkZbv/ezgif-com-gif-maker-3.gif)

# How Does It Work
This project provides a way to create **executable graphical interfaces** using simple **html** code.

**Runtime Process**
* Creates an [HTML Application](https://en.wikipedia.org/wiki/HTML_Application) using [HTA](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program).
* Javascript **send responses** directly to **Batch Script**.

**Features**
* Extremelly small size ( Full size of **24kb on disk** )
* Simulated Router Navigation
* Callbacks between JS and BATCH files
* Full style customization made easy with CSS

# How To Use

**Add or Remove pages**
* Pages are handled in `gui.hta`.
* To add or remove a page just **add or remove elements** from the container with `id="pages"`.</br>

Example: 
```jsx
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
```jsx
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
```jsx
<div id="pages">
  <div>
    Page 1
    <div class="button" onclick="shell({'message': 'ENABLE'});">Enable Service</div>
    <div class="button" onclick="shell({'message': 'LAUNCH'});">Launch Program</div>
  </div>
</div>
```  
<hr></hr>

**Receive Messages from JS**
* Messages from JS are handled in `script.bat`.
* You will **receive the arguments** from the previous `shell` function directly. </br>

Example: 
```batch
@ECHO OFF
set msg=%1
echo %msg%

pause
```

Output:
```
{'message': 'LAUNCH'}

Press any key to continue . . .
```

# How To Run
* Execute `gui.hta` or just call it from another process.


# Limitations
* Since this is not running on any browser, you can only use pure javascript.


## &nbsp;
⭐ If you find this useful!
