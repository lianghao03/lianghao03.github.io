$(document).ready(function() {
// JavaScript Document
var total= 0;
	var index = 0;
	var taskArray = [];
	var exerciseArray = [];
	
$.getJSON("stuff.json", function(data){
	exerciseArray = data;
});
//For Enter key to add task

 $("#task").keypress(function() {
  if (event.which == 13 ) {
 event.preventDefault();
 addTask();
  }
  });



$("#add").click(function(){
	addTask();
	seeTask();
	
});



function seeTask(){
	var taskObj = {};
	taskObj.warmup = exerciseArray[0].warmup;
	console.log(taskObj.warmup);
}

function addTask(){
	var taskObj ={};
	taskObj.name = $("#task").val();
	taskObj.warmup = Number($("#warmup").val());
	console.log(taskObj.warmup);

	taskArray[index] = taskObj;

	$(".tasktable").append("<tr class='taskrow'><th>"+index+"</th><td>"+taskArray[index].name+"</td><td>"+taskArray[index].warmup+"</td><td><input type='checkbox' id="+index+"></td></tr>");
	//total +=itemArray[index].category;
	 $("#"+index).change(function() {
	 		console.log(this.id);
        if($(this).is(":checked")) {
           removeTask(this.id);
           index--;
        }
    });
    index++;
    $("#task").val("");
	}

	function removeTask(id){
		$(".taskrow").remove();
		taskArray.splice(id,1);
		for(i=0;i<taskArray.length;i++){
		  $(".tasktable").append("<tr class='taskrow'><th>"+i+"</th><td>"+taskArray[i].name+"</td><td>"+taskArray[i].warmup+"</td><td><input type='checkbox' id="+i+"></td></tr>");
		  $("#"+i).change(function() {
        	if($(this).is(":checked")) {
            	removeTask(this.id);
            	index--;
        	}
   		 });
		}

	}
});
