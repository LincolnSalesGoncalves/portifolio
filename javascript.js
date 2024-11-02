var textarea = document.getElementById("textareaexpand");
var heightLimit = 100;

function textareasize (textarea) {
    textarea.style.height = "";
    textarea.style.height = Math.min(textarea.scrollHeight, heightLimit) + "px";
};

// simple function to use for callback in the intersection observer
const changeNav = (entries, observer) => {
	entries.forEach((entry) => {
		// verify the element is intersecting
		if(entry.isIntersecting && entry.intersectionRatio >= 0.55) {
			// remove old active class
			document.querySelector('.active').classList.remove('active');
			// get id of the intersecting section
			var id = entry.target.getAttribute('id');
			// find matching link & add appropriate class
            var newLink = document.querySelector(`[href="#${id}"]`).classList.add('active');
		}
	});
}

// init the observer
const options = {
	threshold: 0.55
}

const observer = new IntersectionObserver(changeNav, options);

// target the elements to be observed
const sections = document.querySelectorAll('section');
sections.forEach((section) => {
	observer.observe(section);
});


let mode = 1;
function lightmode() {
	let element = document.body;
	element.classList.toggle("light-mode");
	let html = document.getElementById("html");
	let css = document.getElementById("css");
	let js = document.getElementById("js");
	let ui = document.getElementById("ui");
	let c = document.getElementById("c");
	let sql = document.getElementById("sql");
	let mysql = document.getElementById("mysql");
	let python = document.getElementById("python");
	let linux = document.getElementById("linux");
	let manutenção = document.getElementById("manutenção");
	const logo = document.getElementById("logo");
	if (mode % 2 == 0) {
		logo.src = "img/logo_dark.png"
		html.src = "img/html.png"
		css.src = "img/css.png"
		js.src = "img/js.png"
		ui.src = "img/ui.png"
		c.src = "img/c.png"
		sql.src = "img/sql.png"
		mysql.src = "img/mysql.png"
		python.src = "img/python.png"
		linux.src = "img/linux.png"
		manutenção.src = "img/manutencao.png"
	} else {
		logo.src = "img/logo_light.png"
		html.src = "img/html_light.png"
		css.src = "img/css_light.png"
		js.src = "img/js_light.png"
		ui.src = "img/ux_light.png"
		c.src = "img/c_light.png"
		sql.src = "img/sql_light.png"
		mysql.src = "img/mysql_light.png"
		python.src = "img/python_light.png"
		linux.src = "img/linux_light.png"
		manutenção.src = "img/manutencao_light.png"
	}
	mode ++;
  }



let projectimg = document.getElementById("projectsimg");
// let pjt1 = document.getElementById("pjt1");
// let pjt2 = document.getElementById("pjt2");
// let pjt3 = document.getElementById("pjt3");
// let pjt4 = document.getElementById("pjt4");
let certificadosimg = document.getElementById("certificadosimg");
// let cert1 = document.getElementById("cert1");
// let cert2 = document.getElementById("cert2");
// let cert3 = document.getElementById("cert3");
// let cert4 = document.getElementById("cert4");

// pjt1.addEventListener("click", ()=> {
// 	console.log("pjt1clickado")
// 	projectimg.src = "img/crudprint.PNG"
// });

setTimeout

function cert1() {
	certificadosimg.src = "img/certBD-1.png"
}

function cert2() {
	certificadosimg.src = "img/certGIT-1.png"
}

function cert3() {
	certificadosimg.src = "img/certIFOOD-1.png"
}

function cert4() {
	certificadosimg.src = "img/certUNIMED-1.png"
}

function pjt1() {
	projectimg.src = "img/crudprint.PNG"
}

function pjt2() {
	projectimg.src = ""
}

function pjt3() {
	projectimg.src = ""
}

function pjt4() {
	projectimg.src = ""
}


