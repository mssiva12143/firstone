const words = ["eveloper"];
let i = 0;
let timer;

function typingEffect() {
	let word = words[i].split("");
	var loopTyping = function() {
		if (word.length > 0) {
			document.getElementById('word').innerHTML += word.shift();
		} else {
			deletingEffect();
			return false;
		};
		timer = setTimeout(loopTyping, 150);
	};
	loopTyping();
};

function deletingEffect() {
	let word = words[i].split("");
	var loopDeleting = function() {
		if (word.length > 0) {
			word.pop();
			document.getElementById('word').innerHTML = word.join("");
		} else {
			if (words.length > (i + 1)) {
				i++;
			} else {
				i = 0;
			};
			typingEffect();
			return false;
		};
		timer = setTimeout(loopDeleting, 150);
	};
	loopDeleting();
};

typingEffect();

document.addEventListener('contextmenu', function(e){
	e.preventDefault();	
});



// document.addEventListener('keydown', function(e) {
// 	if(e.key == 123) {
// 		e.preventDefault();
// 	}
// 	if(e.ctrlKey && e.shiftKey && e.key == 'I'.charCodeAt(0)){
// 		e.preventDefault();
// 	}
// 	if(e.ctrlKey && e.shiftKey && e.key == 'J'.charCodeAt(0)){
// 		e.preventDefault()
// 	}
// 	if(e.ctrlKey && e.key == 'U'.charCodeAt(0)){
// 		e.preventDefault();
// 	}
// });


function myFunction() {
	var x = document.querySelector(".keira_menu");
	if (x.style.display === "none") {
	  x.style.display = "block";
	} else {
	  x.style.display = "none";
	}
  }

function ctrlkeyfun(e){
	if(e.ctrlKey){
		return false;
		alert("hiii")
	}
}

document.addEventListener("keydown",function(e){
	if(e.ctrlKey){
		return false;
		alert("jjc")
	}
});

document.addEventListener("keydown", function(e){
	if(e.keyCode === 123){
		return false;
	}
});