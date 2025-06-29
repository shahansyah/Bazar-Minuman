// Toggle class active untuk navbar-nav
const navbarNav = document.querySelector(".navbar-nav");
const hamburgerMenu = document.querySelector("#hamburger-menu");

// Ketika hamburger menu di klik
if (hamburgerMenu) {
	hamburgerMenu.addEventListener("click", function (e) {
		e.preventDefault();
		e.stopPropagation();
		navbarNav.classList.toggle("active");
		console.log("Hamburger clicked!"); // untuk debugging
	});
}

// Tutup menu saat klik di luar
document.addEventListener("click", function (e) {
	if (navbarNav && hamburgerMenu) {
		if (
			!navbarNav.contains(e.target) &&
			!hamburgerMenu.contains(e.target)
		) {
			navbarNav.classList.remove("active");
		}
	}
});

// Tutup menu saat ukuran layar berubah ke desktop
window.addEventListener("resize", function () {
	if (window.innerWidth > 768) {
		navbarNav.classList.remove("active");
	}
});

feather.replace();

// Create floating particles
function createParticle() {
	const particle = document.createElement("div");
	particle.className = "particle";
	particle.style.left = Math.random() * 100 + "%";
	particle.style.animationDelay = Math.random() * 6 + "s";
	particle.style.animationDuration = Math.random() * 3 + 3 + "s";
	document.querySelector(".particles").appendChild(particle);

	setTimeout(() => {
		particle.remove();
	}, 6000);
}

// Create particles periodically
setInterval(createParticle, 300);

// Add smooth scroll effect for form inputs
document.querySelectorAll(".input-group input").forEach((input) => {
	input.addEventListener("focus", function () {
		this.parentElement.style.transform = "translateY(-2px)";
	});

	input.addEventListener("blur", function () {
		if (!this.value) {
			this.parentElement.style.transform = "translateY(0)";
		}
	});
});

// Add form submission effect
document.querySelector("form").addEventListener("submit", function (e) {
	e.preventDefault();
	const btn = this.querySelector(".btn");
	const originalText = btn.innerHTML;

	btn.innerHTML = "<span>Mengirim...</span>";
	btn.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";

	setTimeout(() => {
		btn.innerHTML = "<span>Terkirim! ✓</span>";
		btn.style.background = "linear-gradient(135deg, #27ae60, #2ecc71)";

		setTimeout(() => {
			btn.innerHTML = originalText;
			btn.style.background =
				"linear-gradient(135deg, var(--primary), var(--accent))";
		}, 2000);
	}, 1500);
});

// Add intersection observer for animations
const observer = new IntersectionObserver((entries) => {
	entries.forEach((entry) => {
		if (entry.isIntersecting) {
			entry.target.style.animationPlayState = "running";
		}
	});
});

document.querySelectorAll(".input-group, .btn").forEach((el) => {
	observer.observe(el);
});
