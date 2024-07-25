/* STICKY NAVIGATION */
const heroElement = document.querySelector('.section-hero');
const navObserver = new IntersectionObserver(
	function (entries) {
		!entries[0].isIntersecting
			? document.body.classList.add('sticky')
			: document.body.classList.remove('sticky');
	},
	{
		root: null,
		threshold: 0,
	}
);

/* SCROLL ANIMATE */
const appShots = document.querySelectorAll('.mobile-bg');
const scrollObserver = new IntersectionObserver(entries => {
	entries.forEach(entry => {
		entry.isIntersecting
			? entry.target.classList.toggle('animate-img')
			: entry.target.classList.remove('animate-img');
	});
});