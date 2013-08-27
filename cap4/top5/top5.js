function addOnClickHandlers()
{
	var cdsDiv = document.getElementById("cds");
	//retorna uma matriz com todos os elementos IMG dentro da div CDS
	var cdImages = cdsDiv.getElementsByTagName("img");
	for(var i = 0; i < cdImages.length; i++) {
		cdImages[i].onclick = addToTop5; // adicionando os eventos a todas a IMG dentro da div CDS
	}
}

function addToTop5()
{
	var imgElement = this;
	var top5Element = document.getElementById("top5");
	
	var qtdTop5Element = top5Element.getElementsByTagName("img");
	if(qtdTop5Element.length < 5) {
		top5Element.appendChild(imgElement);
		imgElement.onclick = null;
	}
}

function startOver()
{
	
}