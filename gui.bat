<!-- :: Batch section
@echo off
setlocal

:listen
set "reply="
for /F "delims=" %%a in ('mshta.exe "%~F0"') do set "reply=%%a"
if "%reply%" == "" ( goto :EOF )
ECHO Message from JS = %reply%
goto :listen
-->

<html>
<head>
   <title>Batch GUI - Launcher</title>

   <HTA:APPLICATION 
      NAME="myApp"
      BORDER="thin"
      BORDERSTYLE="normal"
      ICON="favicon.ico"
      WINDOWSTATE="normal"
      INNERBORDER="no"
      MAXIMIZEBUTTON="no"
      MINIMIZEBUTTON="yes"
      SINGLEINSTANCE="yes"
      CONTEXTMENU="no"
      SYSMENU="yes"
      SCROLL="no"
      SELECTION="no"
      VERSION="1.0" 
   >
   <link rel="stylesheet" href="style.css">
   <script language="JavaScript" src="js/window.js"></script>
</head>

<body >
   <div id="pages">
      
      <div name="Page 1">
         <div class="button" onclick="send(1);">Enable Service</div>
         <div class="button" onclick="send(2);">Launch Program</div>
         <div class="button fixed right" onclick="setPage(2);">Settings</div>
      </div>

      <div name="Page 2">
         <div class="button" onclick="send(3);">Edit Config File</div>
         <div class="button" onclick="send(4);">Reset Settings</div>
         <div class="backButton button" onclick="setPage(1);">Go Back</div>
      </div>

   </div>
   <div class="author fixed left">By NxRoot</div>
</body>

<script language="JavaScript" src="js/hover.js"></script>
<script language="JavaScript" src="js/pages.js"></script>
</html>