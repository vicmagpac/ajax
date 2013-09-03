var request = null; // aqui está uma variavel para o armazenamento do objeto de solicitação
try {
	// tenta criar um novo objeto de solicitação
	request = new XMLHttpRequest();
}catch(trymicrosoft) {
	try {
		// tenta criar o objeto de solicitação, mas de uma maneira que funcione o no Internet Explorer
		request = new ActiveXObject("Msxml2.XMLHTTP");
	}catch(othermicrosoft) {
		try {
			// tenta criar o objeto de solicitação, mas de uma maneira que funcione o no Internet Explorer
			request = new ActiveXObject("Microsoft.XMLHTTP");
		}catch(failed) {
			// se algo der errado, essa instrução assegurará que a variavel da solicitação, continue nulo.
			request = null;
		}
	}
}

// verificando se a solicitação ainda é nula, se for algo deu errado no codigo
if(request == null) {
	alert('Error creating request object!');
}