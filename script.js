// CARGAR IMAGENES RESEÑAS
const pfpArrReviews = document.querySelectorAll(".pfps");

for (let i = 0; i < pfpArrReviews.length; i++) {
	pfpArrReviews[i].style.backgroundImage = `url(./img/pfp/pfp${i + 1}.png)`;
}

// CARGAR IMAGENES RANKING
const pfpArrRanking = document.querySelectorAll(".ranking-pfp");

for (let i = 0; i < pfpArrRanking.length; i++) {
	pfpArrRanking[i].style.backgroundImage = `url(./img/pfp/pfp${i + 6}.png)`;
}

// CARGAR TEXTO FAQS
const arrFaqs = document.querySelectorAll(
	"#faqs-container > div > p:first-child"
);
const arrFaqsAnswers = document.querySelectorAll(
	"#faqs-container > div > p:last-child"
);

for (let i = 0; i < arrFaqs.length; i++) {
	arrFaqs[i].addEventListener("click", () => {
		showAnswer(i);
	});
	arrFaqs[i].addEventListener("keydown", (e) => {
		if (e.key === "Enter" || e.key === " ") {
			e.preventDefault();
			showAnswer(i);
		}
	});
}

function showAnswer(i) {
	arrFaqsAnswers[i].classList.toggle("hidden");
	if (arrFaqsAnswers[i].classList.contains("hidden")) {
		arrFaqs[i].setAttribute("aria-expanded", "false");
		arrFaqsAnswers[i].setAttribute("aria-hidden", "true");
	} else {
		arrFaqs[i].setAttribute("aria-expanded", "true");
		arrFaqsAnswers[i].setAttribute("aria-hidden", "false");
	}
}

/* SIDE BAR BUTTON*/
const sideBarButton = document.querySelector("header>button");
const overlay = document.querySelector("header>span");
const sideBar = document.querySelector("#side-bar-menu");

const cover = document.querySelector("#cover");
const gameplay = document.querySelector("#gameplay");
const reviews = document.querySelector("#reviews");
const rankings = document.querySelector("#ranking");
const faqs = document.querySelector("#faqs");
const newsletter = document.querySelector("#newsletter");
const arrSideBar = [cover, gameplay, reviews, rankings, faqs, newsletter];

sideBarButton.addEventListener("click", function () {
	if (!sideBar.classList.contains("hiddenSidebar")) {
		overlay.classList.toggle("hidden");
		sideBar.classList.toggle("hiddenSidebar");
		sideBar.style.transform = "translateX(0)";
		arrSideBar.forEach((el, i) => {
			const target = document.querySelector(`li>a[href='#${el.id}']`);
			target.setAttribute("tabindex", i + 2);
		});
	} else {
		overlay.classList.toggle("hidden");
		sideBar.style.transform = "translateX(100%)";
		sideBar.classList.toggle("hiddenSidebar");
		arrSideBar.forEach((el, i) => {
			const target = document.querySelector(`li>a[href='#${el.id}']`);
			target.removeAttribute("tabindex");
		});
	}
});

// CARGAR FAQS
const faqsDesktop = document.querySelector(
	'#nav-bar-responsive-hidden>li>a[href="#faqs"]'
);

faqsDesktop.addEventListener("keydown", function (e) {
	if (e.key === "Enter" || e.key === " ") {
		faqs.scrollIntoView({ behavior: "smooth", block: "start" });
		e.preventDefault();
		for (let i = 0; i < arrFaqs.length; i++) {
			showAnswer(i);
		}
		console.log(faqsDesktop);
	}
});
