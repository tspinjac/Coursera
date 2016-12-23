// Custom js script

function net () {
	function zbroj (a,b) {
		zbroj = a+b;
		console.log(zbroj);
		console.log(this);
	};
	zbroj(10, 20);
	console.log(this);
};
console.log(this);
net();
console.log(this);