# Batch GUI - Boilerplate
Simple Batch Graphical Interface ( Batch &amp; Javascript )

![video](https://i.ibb.co/MfvkZbv/ezgif-com-gif-maker-3.gif)

# How Does It Work
This Project was made in [Batch  Script](https://en.wikipedia.org/wiki/Batch_file) and [Javascript](https://en.wikipedia.org/wiki/JavaScript)

It provides a way to **create graphical interfaces** using simple **Batch Script** code.

**Runtime Process**
* Batch Script creates an [HTML Application](https://en.wikipedia.org/wiki/HTML_Application) using [HTA](https://en.wikipedia.org/wiki/%22Hello,_World!%22_program)
* Javascript **send responses** directly to **Batch**

# How To Use

**Add or Remove Pages**
* Pages are handled by JS dynamically
* So to add or remove a page just add a new page inside `div` container with `id="pages"`</br>

Example: 

    <div id="pages">
      <div> Page 1 </div>
      <div> Page 2 </div>
    </div>

# Limitations
* You can only use **pure javascript**, since this is not running on any browser, **web functions** and css events **are not available**
* After a response is sent from JS to BAT the windows is restarted

# TODO
* Workaround window restarting limitation (**PRIORITY**)
* Implement object parsing to send in reply
