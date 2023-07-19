
function play(event) {
    console.log("enter play function");
    var audio;
    switch(event.key) {

      case 'w':
        audio = new Audio("./sounds/tom-1.mp3");
        console.log("w entered");
        break;
      case 'a':
        audio = new Audio("./sounds/tom-2.mp3");
        break;
      case 's':
        audio = new Audio("./sounds/tom-3.mp3");
        break;
      case 'd':
        audio = new Audio("./sounds/tom-4.mp3");
        break;
      case 'j':
        audio = new Audio("./sounds/crash.mp3");
        break;
      case 'k':
        audio = new Audio("./sounds/kick-bass.mp3");
        break;
      case 'l':
        audio = new Audio("./sounds/snare.mp3");
        break;
      default:
        return;
    }
    audio.play();
  }



<!DOCTYPE html>
<html lang="en" dir="ltr">

<head>
  <meta charset="utf-8">
  <title>Drum Kit</title>
  <link rel="stylesheet" href="styles.css">
  <link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
</head>

<body onkeydown="play(event)">

  <h1 id="title">Drum 🥁 Kit</h1>
  <div class="set" >
    <button class="w drum" >w</button>
    <button class="a drum" >a</button>
    <button class="s drum" >s</button>
    <button class="d drum" >d</button>
    <button class="j drum" >j</button>
    <button class="k drum" >k</button>
    <button class="l drum" >l</button>
  </div>


  <footer>
    Made with ❤️ in London.
  </footer>
  <script src="index.js" charset="utf-8"></script>

</body>
</html>



