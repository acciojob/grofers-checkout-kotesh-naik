const getSumBtn = document.createElement("button");
getSumBtn.append("Get Total Price");
document.body.appendChild(getSumBtn);

const getSum = () => {
//Add your code here
 getSumBtn.disabled = true;
	const prices = document.querySelectorAll(".price");
	let sum = 0;
	prices.forEach((price)=>{
		const value = parseInt(price.textContent);
		if(! isNon(value)){
			sum += value;
		}
	})
	const totalPriceRow = document.createElement("tr");
	totalPriceRow.id = "ans";
	const totalPriceData = document.createElement("td");
	const totalPriceAns= document.createElement("td");
	totalPriceRow.appendChild(totalPriceData);
	totalPriceRow.appendChild(totalPriceAns);
	const data = ' total price (in Rs) : ';
	totalPrice.Data.append('total price( in Rs):');
	const table = document.querySelector("tbody");
	table.appendChild(totalPriceRow);
};

getSumBtn.addEventListener("click", getSum);

