// 7/17/2023

var n = Math.random();
n = n * 6;
n = Math.floor(n);


var arr = [];

function fib(n) {
    arr = [];
    for (var i = 1; i < n; i++) {
        arr.push(helper(i));
    }
    
}

// 0, 1, 2

function helper(num) {
    if (num == 0 || num == 1) {
        return 0;
    } else if (num == 2) {
        return 1;
    } else {
        return helper(num - 1) + helper(num - 2);
    }
}


function fibonacciGenerator(n) {
    var output = [];
    if (n === 1) {
        output = [0];
    }
    else if (n === 2) {
        output = [0, 1];
    }
    else {
        output = [0, 1];
        for (var i = 2; i < n; i++) {
            output.push(output[output.length - 2] + output[output.length - 1]);
        }

    }
    return output;
}


document.firstElementChild.lastElementChild.lastElementChild.lastElementChild.innerHTML="Angela";


document.getElementsByTagName("li")[2].innerText = 123;
123
document.getElementsByTagName("li")[2].innerHTML = 123;
123
document.getElementsByTagName("li")[2].innerHTML = 12344;
12344
document.getElementsByTagName("li")[2].textContent = 12344;
12344
document.getElementsByTagName("li")[2].textContent = 123442345;

document.getElementsByTagName("li")[2].style.color = 'red';

<ul class="lists">
    <li>Google</li>
    <li>Seconed</li>
    <li>Third</li>
</ul>
document.querySelector("ul li:nth-child(2)");
<li>​::marker​"Seconed"</li>​




document.querySelectorAll('li')[0].style.color='red';

visibility: hidden;



document.querySelector('.lists').classList.toggle('invisible');


document.querySelector('.lists').classList.toggle('huge');



document.querySelector(".lists li:nth-child(2)").innerHTML;
document.querySelector("a").attributes;
document.querySelector("a").getAttribute("href");



<script>
    document.querySelector("button").addEventListener("click", handleClick);
    function handleClick() {
      alert("I got clicked");
    }
  </script>
callback function used to call later, and pass it as parameter.

function add(num1, num2) {
    return num1 + num2;
}

function multiply(num1, num2) {
    return num1 * num2;
}

function calculator(num1, num2, operator) {
    return operator(num1, num2)
}

calculator(4, 5, add);

calculator(4, 5, multiply);

debugger; // debug statement



var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    var comp = document.querySelectorAll('.drum')[i];
    comp.addEventListener('click', function() {
        console.log(this.style.color="white");
        //this.setAttribute("class", "w drum color");
        var audio = new Audio("./sounds/tom-1.mp3");
        audio.play();
    })
}


Constructor Function:

function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorPermit;
    this.languages = languages;
}


function BellBoy(name, age, hasWorkPermit, languages) {
    this.name = name;
    this.age = age;
    this.hasWorkPermit = hasWorkPermit;
    this.languages = languages;
}

var p1 = new BellBoy("Tom", 11, "yes", "English");
var p2 = new BellBoy("Geoff", 15, "no", ["Korean", "Arabica"]);

var p3 = new BellBoy("Geoff", 15, "no", ["Korean", "Arabica"], moveSuitcase: function() {
                    alert("May I take your suitcase?");
                    pickUpSuitcase();
                    move();
                    clean: function() {
                        alert("cleaning in progress");
                    }
                }
            );

p3.clean();

function BellBoy(name, age, hasCar, cuisines) {
    this.name = name;
    this.age = age;
    this.hasCar = hasCar;
    this.cuisines = cuisines;
    this.moveSuitcase = function() {
        alert("May I take your suitcase?");
        this.pickUpSuitcase();
        this.move();
    };
    this.clean = function() {
        alert("cleaning in progress");
    };
}

var p3 = new BellBoy("Geoff", 15, "no", ["Korean", "Arabica"]);
p3.clean();

undefined
p3.moveSuitcase();





var n = document.querySelectorAll(".drum").length;

for (var i = 0; i < n; i++) {
    var comp = document.querySelectorAll('.drum')[i];
    comp.addEventListener('click', function() {
        var buttonInnerHTML = this.innerHTML;
        
        makeSound(buttonInnerHTML);
    })
}

document.addEventListener("keydown", function(event) {
    makeSound(event.key);
})


function makeSound(buttonInnerHTML) {

    switch (buttonInnerHTML) {
        case 'w':
            var tom1 = new Audio("./sounds/tom-1.mp3");
            tom1.play();
            break;
        case 'a':
            var tom2 = new Audio("./sounds/tom-2.mp3");
            tom2.play();
            break;
        case 's':
            var tom3 = new Audio("./sounds/tom-3.mp3");
            tom3.play();
            break;
        case 'd':
            var tom4 = new Audio("./sounds/tom-4.mp3");
            tom4.play();
            break;
        case 'j':        
            var crash = new Audio("./sounds/snare.mp3");
            crash.play();
            break;
        case 'k':
            var bass = new Audio("./sounds/crash.mp3");
            bass.play();
            break; 
        case 'l':
            var snare = new Audio("./sounds/kick-bass.mp3");
            snare.play();
            break; 
        default:
            return;
    }


}





    

function anotherAddEventListener(typeOfEvent, callback) {
    var eventThatHappened = {
        eventType: "keypress",
        key: "p",
        durationOfKeypress: 2
    }
    
    if (eventThatHappened.eventType == typeOfEvent) {
        callback(eventThatHappened);
    }
}
debugger;
anotherAddEventListener("keypress", function(event) {
    console.log(event);
});




unix command:

rm *    // delete all 
rm -r directory name // deleta all files within the directory including the directory folder

minify javascript or css code, 
www.minifier.org












