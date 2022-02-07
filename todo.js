let textInput = document.getElementById("textInput");
let saveBtn = document.getElementById("saveBtn");
let clearBtn = document.getElementById("clearBtn");
let itemList= document.getElementById("itemlist");
let deleteItem = document.getElementById("deleteItem");
let item=[];

saveBtn.addEventListener("click",function(){

	if(textInput.value !="")
	{
		item.push(textInput.value);
	}
	localStorage.setItem('item',JSON.stringify(item));
	textInput.value="";
	saveItem();
})
let myTaskfromlocalstorage = JSON.parse(localStorage.getItem("item"));
console.log(myTaskfromlocalstorage);
 
if(myTaskfromlocalstorage){
	item = myTaskfromlocalstorage;
	saveItem();
}

function saveItem(){

	let element="";
	for(let i=0; i < item.length ;i++)
	{
		element +=`<li>${item[i]} 
	 <button id="deleteItem" onclick="deleteEle(${i})" >X</button> 
	 <button>Done</button></li>`;

	}
	itemList.innerHTML = element;
}


/*function saveItem(){
itemList.innerHTML += `<li>${textInput.value} 
	 <button id="deleteItem" onclick="clearList()" >X</button> 
	 <button>Done</button></li>`;

	 item.push(itemList);
	for (let i = 0 ;i < item.length ; i++)
		{
			//itemList.innerText(item[i]);
			console.log(item[i]);
		}
}*/

function deleteEle(index){
	item.splice(index,1);
	console.log(index)
	saveItem();
}	





function clearList(){

itemList.innerText ="";

}


