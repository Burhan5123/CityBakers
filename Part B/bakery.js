function getpage(id) {
    var xhr = new XMLHttpRequest();
    if(id == "sheetCake"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("inputChoice").innerHTML = xhr.responseText;
      }
    };

        xhr.open("GET", "PartB.html", true);
        xhr.send();
    }
    else if(id == "roundCake"){
        xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
        document.getElementById("inputChoice").innerHTML = xhr.responseText;
      }
    };
        xhr.open("GET", "PartB2.html", true);
        xhr.send();
	}
}

function calculations(){

		var radio_value=document.querySelector('input[name=cake]:checked').value;
		radio_value=parseFloat(radio_value);

		var cakeType = "";
		var layersAmount = parseFloat(document.getElementById("layers").value);
		var length = parseFloat(0);
		var width = parseFloat(0);
		var radius = parseFloat(0);
		var totalArea = parseFloat(0);
		var extraArea = parseFloat(0);
		var extraCost = parseFloat(0);
		var totalBaseCost = parseFloat(0);
		var totalCakeCost = parseFloat(0);
		var additionalCost = parseFloat(0);
		var firstName = document.getElementById("firstname").value;
		var lastName = document.getElementById("lastname").value;
		var address = document.getElementById("address").value;
		var postalCode = document.getElementById("postalcode").value;
		var phoneNumber = document.getElementById("phnumber").value;
		var email = document.getElementById("emailId").value;
		var message = "";
		var additionalStuff = "";
		var finalCost = parseFloat(0);
		message = firstName + " " + lastName + "<br>" + address + "<br>" + postalCode + "<br>" + phoneNumber + "<br>" + email + "<br>" + "<br>" + "Your order:" + "<br>" + "<br>";


		if(radio_value == 18){
			cakeType = "Sheet Cake";
			length = document.getElementById("length").value;
			width = document.getElementById("width").value;
			totalArea = length * width;
			extraArea = totalArea - 900;
			extraCost = extraArea * 0.02;
			totalBaseCost = radio_value + extraCost;

		}
		else if(radio_value == 15){
			cakeType = "Round Cake";
			radius = document.getElementById("radius").value;
			totalArea = (radius * radius) * 3.14;
			extraArea = totalArea - 706.5;
			extraCost = extraArea * 0.02;
			totalBaseCost = radio_value + extraCost;
		}

		if(layersAmount == 1){
			totalCakeCost = totalBaseCost;

		}

		else if(layersAmount == 2){
			totalCakeCost = totalBaseCost + (totalBaseCost/2);

		}
		else if(layersAmount == 3){
			totalCakeCost = totalBaseCost + ((totalBaseCost/2) * 2);

		}

		if(document.querySelector('input[name=creamCheese]:checked')){
			additionalCost+=parseFloat(document.querySelector('input[name=creamCheese]:checked').value);
			additionalStuff += "Cream Cheese icing:			$5 <br>";
			
		}

		if(document.querySelector('input[name=fruitAlmond]:checked')){
			additionalCost+=parseFloat(document.querySelector('input[name=fruitAlmond]:checked').value);
			additionalStuff += "Fruit and Almond topping: 			$7 <br>";
		}

		if(document.querySelector('input[name=fruitJam]:checked')){
			additionalCost+=parseFloat(document.querySelector('input[name=fruitJam]:checked').value);
			additionalStuff += "Fruit Jam filling:			$4 <br>";
		}

		finalCost = totalCakeCost + additionalCost;

		if(radio_value == 18){
		message += cakeType + " " + length + "cm X " + width + "cm with " + layersAmount + " layers: 				$" + totalCakeCost.toFixed(2) + "<br>" + additionalStuff + "Total: 			$" + finalCost.toFixed(2);
		}

		else if (radio_value == 15) {
		message += cakeType + " " + radius + "cm with " + layersAmount + " layers: 				$" + totalCakeCost.toFixed(2) + "<br>" + additionalStuff + "Total: 			$" + finalCost.toFixed(2);
		}

		document.getElementById("result").innerHTML = message;

}