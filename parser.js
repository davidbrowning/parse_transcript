(function(){var tableElement = document.getElementsByClassName("dddefault"),

tableInfo = document.getElementsByClassName("datadisplaytable"),


newWin = window.open("");

var keepChecking = false;

var counter = 0

var subject = ["ENGL", "CHEM", "PHIL"];

var transfer = "TRANSFER AND EXAM CREDIT ACCEPTED BY THE INSTITUTION"

var institution = "INSTITUTION CREDIT"





Array.prototype.forEach.call(tableElement, function(el) {
	subject.forEach(function(sub){
	  if(el.textContent == sub){
	    keepChecking = true
	  }
	})
	
	if(counter < 8 && keepChecking == true){
      newWin.document.write(el.textContent + ",");
		counter += 1
	}
	
	if(counter == 8){
	  counter = 0
	  keepChecking = false
	  newWin.document.write("</br>")
	}
});



//newWin.document.write(tableElement[0].outerHTML);

//newWin.document.write(tableInfo[0].outerHTML);



//newWin.close()

})()
