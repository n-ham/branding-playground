function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const neon_1d_1 = document.getElementById("1d-neon-1");
const neon_1d_2 = document.getElementById("1d-neon-2");
const neon_1d_3 = document.getElementById("1d-neon-3");
const neon_1d_4 = document.getElementById("1d-neon-4");
const neon_1d_5 = document.getElementById("1d-neon-5");
const neon_1d_6 = document.getElementById("1d-neon-6");
const neon_1d_7 = document.getElementById("1d-neon-7");
const neon_1d_8 = document.getElementById("1d-neon-8");
const neon_1d_9 = document.getElementById("1d-neon-9");
const neon_1d_10 = document.getElementById("1d-neon-10");
const neon_1d_11 = document.getElementById("1d-neon-11");
const neon_1d_12 = document.getElementById("1d-neon-12");
const evil_laughter = document.getElementById("evil-laughter");
const zombite = document.getElementById("zombite");



let active = 0;
let speedy = 0;
let count = 0;
let h = 100;
const h_offset = 144;

async function reveal(x)
{
	x.style.visibility = "visible";
}


async function animate_colors()
{
	if(++count == 1)
	{
		active = 1;
		while(active)
		{
			neon_1d_1.style.background 
				= neon_1d_2.style.background 
				= neon_1d_3.style.background 
				= neon_1d_4.style.background 
				= neon_1d_5.style.background 
				= neon_1d_6.style.background 
				= neon_1d_7.style.background 
				= neon_1d_8.style.background 
				= neon_1d_9.style.background 
				= neon_1d_10.style.background 
				= neon_1d_11.style.background 
				= neon_1d_12.style.background 
				= evil_laughter.style.background 
				= zombite.style.background 
				= "hsl(" + h + "deg, 50%, 50%)";

			h = (h+2)%360;
			await sleep(50);
		}
	}
	--count;
}
animate_colors();