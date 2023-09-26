let hassan = document.getElementById('king');
fetch("https://api.currencyfreaks.com/v2.0/rates/latest?apikey=88de44942c3442259aaa25811de1a3a5")
.then((result) => {
	//console.log(result);
	let myDate = result.json();
	return myDate;
}).then((currency) => {
	let amount = document.querySelector('.amount');
	let egd = document.querySelector('.egd span');
	let sar = document.querySelector('.sar span');


	
	egd.innerHTML = Math.round(amount.innerHTML * currency.rates["egd"]);
	sar.innerHTML = Math.round(amount.innerHTML * currency.rates["sar"]);


console.log(currency.rates['egd']);
console.log(currency.rates['sar']);


});

