// window.alert("Hello")    //Test
const canvas = document.getElementById("canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let centerX = window.innerWidth / 2;
let centerY = window.innerHeight / 2;

function reportWindowSize() {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	let centerX = window.innerWidth / 2;
	let centerY = window.innerHeight / 2;
}

window.onresize = reportWindowSize;

class Root {
	constructor(x, y, color, centerX, centerY) {
		this.x = x;
		this.y = y;
		this.color = color;
		this.speedX = 0;
		this.speedY = 0;
		this.centerX = centerX;
		this.centerY = centerY;
	}

	draw() {
		this.speedX += (Math.random() - 0.5) / 4;
		this.speedY += (Math.random() - 0.5) / 4;
		this.x += this.speedX;
		this.y += this.speedY;

		const distanceX = this.x - this.centerX;
		const distanceY = this.y - this.centerY;
		const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
		const radius = distance / 800;

		if (radius < 10) {
			requestAnimationFrame(this.draw.bind(this));
			ctx.beginPath();
			ctx.arc(this.x, this.y, radius, 0, 10);
			ctx.fillStyle = this.color;
			ctx.fill();
			ctx.strokeStyle = "black";
			ctx.stroke();
		}
	}
}

function branchOut() {
	let leftCenter = centerX;
	let topCenter = centerY;

	for (let i = 0; i < 800; i++) {
		const root = new Root(leftCenter, topCenter, "#86DC3D", centerX, centerY);
		root.draw();
	}

	//setTimeout(branchOut, 100);
}

branchOut();
