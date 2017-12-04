var addList = document.getElementById('addList');

addList.addEventListener('click',function(){

 document.getElementById('boxList').className = 'addOff';
 document.getElementById('container').className= 'listOn';
 document.getElementById('list').focus();

})


var button = document.getElementById('button');

button.addEventListener('click',function(){

	var newSection = document.createElement('section');
	newSection.className='inline listOn'

	var newTitle = document.createElement('span');
	var titleDiv = document.createElement('div');
	titleDiv.appendChild(newTitle);
	titleDiv.className='title';

	var newlink = document.createElement('a');
	newlink.setAttribute('href','#');
	newlink.innerHTML='Añadir una Tarjeta';

	var divTarjetas = document.createElement('div');
	divTarjetas.className='contenedor';

	var divLink = document.createElement('div');
	divLink.appendChild(newlink);
	divLink.className='link';

	var newTextA = document.createTextNode(document.getElementById('list').value);
	document.getElementById('list').value="";
  newTitle.appendChild(newTextA);

  var textArea = document.createElement('textArea');
  textArea.className='textAreaOff';

  var divArea = document.createElement('div');
	divArea.appendChild(textArea);

  var newButton = document.createElement('button');
  newButton.innerHTML='Guardar';
  newButton.className='buttonOff';

  var divButton = document.createElement('div');
	divButton.appendChild(newButton);

	newlink.addEventListener('click',function(){
  newlink.className = 'newLinkTarjetaOff';
  textArea.className = 'areaText';
  newButton.className = 'bttn';
	textArea.focus();
	})


newButton.addEventListener('click',function(){

	var text= document.createElement('p');
	var nameListText = textArea.value;
	var newListText = document.createTextNode(nameListText);
	text.appendChild(newListText);
	divTarjetas.appendChild(text);
	textArea.value = "";
	textArea.focus();

	})


	var boxbttn = document.createElement('div');
	boxbttn.appendChild(divArea);
	boxbttn.appendChild(divButton);
	boxbttn.className = 'principal';


	/*hijos de newSection*/

	newSection.appendChild(titleDiv);
	newSection.appendChild(divLink);
	newSection.appendChild(divTarjetas);
	newSection.appendChild(boxbttn);


	formBox = document.getElementById("formBox");
  principal.insertBefore(newSection,formBox);


	})
