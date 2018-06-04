$(document).ready(function() {
// JavaScript Document
	var total= 0;
	var index = 0;
	var itemArray = [];

$("#add").click(function(){
	addItem();
});



function addItem(){
	var itemObj ={};

	itemObj.name = $("#item").val();
	itemObj.priority = Number($("#priority").val());

	itemArray[index] = itemObj;
	console.log("Add Item "+itemArray);

	$(".itemtable").append("<tr id="+index+"><th>"+index+"</th><td>"+itemArray[index].name+"</td><td>"+itemArray[index].priority+"</td><td><input type='checkbox' name='checkbox-1' id='"+index+"'></td></tr>");
	index++;
	}

function deleteItem(){

}
});
