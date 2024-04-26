var mouseMov = window.addEventListener("mousemove", (dets) => {
	var rect = document.querySelector(".rect");

	//to move it left to right
	var xval = gsap.utils.mapRange(
		0,
		window.innerWidth,
		100 + rect.getBoundingClientRect().width / 2,
		window.innerWidth - (100 + rect.getBoundingClientRect().width / 2),
		dets.clientX
	);

	//To move it up and down
	var yval = gsap.utils.mapRange(
		0,
		window.innerHeight,
		50 + rect.getBoundingClientRect().height / 2,
		window.innerHeight - (50 + rect.getBoundingClientRect().height / 2),
		dets.clientY
	);
	gsap.to(".rect", {
		left: xval,
		ease: Power3,
		top: yval,
	});
});
