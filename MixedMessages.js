function randomNumber(input) {
	return Math.floor(Math.random()*input);
}

function randomHello() {
	const pronoun = ['My','Your',"His",'Her'];
	const verb = ['best friend','boyfriend','girlfriend','father','mother'];
	const adjective = ['stupid','clever','fat','tiny','jealous','wise'];
	return `${pronoun[randomNumber(4)]} ${verb[randomNumber(5)]} is ${adjective[randomNumber(6)]}`;
}

console.log(randomHello());