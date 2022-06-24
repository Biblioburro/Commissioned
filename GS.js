//steps
//1. select 100 elements per page if more than 50 items sold at bottom
//2. press f12 with your commision pulled 
//3. click on the console tab
//4. click on the prompt so you get a flashing |
//5. paste the code below this line in

//variables to store info about commission 
var planNums = 0;
var lowDollar = 0;
var highDollar = 0;
var medDollar = 0;

//function to determine and return the total commission for an item
function itemComm(price,name){
//console.log(price);
if(name.includes("Protection Plan") || name.includes("Replacement Plan")){
			planNums++;
			return(price*.1);
}else if (price<9.99){
			lowDollar++;
			return(price*.125);
}else if (price<99.99){
			medDollar++;
			return(price*.06);
}else{
			highDollar++;
			return(price*.03);
}
}

function calcCommission(){
	//extracting the content from the second table on the page
	//note: can easily be extended to the first table for adding in plan sales,
	//eset, etc.
	var productTable = document.getElementsByTagName("table")[1];
	var productRows = productTable.getElementsByTagName("tr");
	var products = new Array(productRows.length);
	//document.getElementById("out").innerHTML = productRows.length;
	//for loop to populate 2d products array with appropriate elements
	for(let i = 2 ; i < productRows.length;i++){
		//initialize the row we're working with 
		var currentRow = productRows[i];
		//console.log(currentRow.getElementsByTagName("td").length);
		//initialize the array to the number of td elements in the current row
		products[i] = new Array(currentRow.getElementsByTagName("td").length);
		
		//nested for loop to assign each elements values to array elements
		for(let k = 0 ; k<currentRow.getElementsByTagName("td").length;k++){
		products[i][k] = currentRow.getElementsByTagName("td")[k].innerHTML;
		}
		}
		
		//console.log(products[2][5]);
		//start at index two because first two elements are undefined and garbage
		//respectively
		var totalCommission = 0.0;
		var totalLoss = 0.0;
		for(let i =2 ;i<products.length;i++ ){
			var name = products[i][4];
			var quantity = parseFloat(products[i][5]);
			
			
			var unitPrice;
			if(quantity<0){
			unitPrice = parseFloat(products[i][6].substring(2));
			totalLoss += itemComm(unitPrice,name)*quantity;
			}else{
			unitPrice = parseFloat(products[i][6].substring(1));
			}
			
			
			//console.log("item "+i+": commission:"+itemComm(unitPrice,name)+"Quantity:"+quantity);
			//console.log("TotalCommission:"+totalCommission);
			
			totalCommission += itemComm(unitPrice,name)*quantity;
		}
		//round the loss to be extra pretty
		var roundedCommission = Math.round(totalCommission*100.0)/100.0;
		var roundedLoss = Math.round(totalLoss*100.0)/100.0;
		//display the total commission and losses
		console.log("Total commission Estimate(includes replacement plans and returns):$"+roundedCommission);
		console.log("You lost this much in commission on returns: $"+roundedLoss+"OUCH!")
		console.log("Plans       # "+planNums);
		console.log("Low Dollar  # "+lowDollar);
		console.log("Med Dollar  # "+medDollar);
		console.log("High Dollar # "+highDollar);
}
calcCommission();
