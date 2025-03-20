// Toggle the sidebar on small screen
const sidebar = document.querySelector('.sidebar');
const navbarToggler = document.querySelector('.navbar-toggler');

navbarToggler.addEventListener('click', () => {
	sidebar.classList.toggle('active');
});

// Optional: Smooth scroll to sections
document.querySelectorAll('.nav-link').forEach((link) => {
	link.addEventListener('click', function (event) {
		event.preventDefault();
		const targetId = this.getAttribute('href').slice(1);
		document.getElementById(targetId).scrollIntoView({
			behavior: 'smooth',
		});
	});
});
