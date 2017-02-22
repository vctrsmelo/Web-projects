function addClass(elemento, cls) {
	var elclass = elemento.className;
	if(elclass){
		elemento.className = elclass +" "+ cls;
    }
	else{
		elemento.className = cls;
	}
}

function removeClass(elemento,cls){
	var elclass = elemento.className;
	var clsArray = elclass.split(" ");
	for(i=0;i<clsArray.length;i++){
		if(cls == clsArray[i]){
			clsArray[i];
			index = clsArray.indexOf(clsArray[i]);
			if (index > -1) {
				clsArray.splice(index,1);
				elemento.className = clsArray;
			}
		}
	}
	
}