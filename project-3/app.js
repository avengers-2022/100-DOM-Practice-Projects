/**
 * Project Requirements:
 * - Change the background color by generating random hex color by clicking a button
 * - Also display the hex code to a disabled input field
 * - Add a button to copy the color code
 */

// Steps

// Step 1 - create onload handler


window.onload = () => {
	main();
}

function main() {

	const root = document.getElementById('root');
	const output = document.getElementById('output');
	const changeBtn = document.getElementById('change-btn');
	const copyBtn = document.getElementById('copy-btn');

	changeBtn.addEventListener('click', () => {
		const bgcolor = randomHexColor();
		root.style.backgroundColor = bgcolor;
		output.value = bgcolor;
	})

	copyBtn.addEventListener('click', () => {
		navigator.clipboard.writeText(output.value);
	})

}


// step 2 - random color generator function

function randomHexColor() {

	const green = Math.floor(Math.random() * 255);
	const blue = Math.floor(Math.random() * 255);
	const red = Math.floor(Math.random() * 255);

	return `#${green.toString(16)}${blue.toString(16)}${red.toString(16)}`;

}

// step 3 - collect all necessary references

// step 4 - handle the change button click event

// step 5 - handle the copy button click event








