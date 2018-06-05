$(document).ready(function() {
// JavaScript Document
var total= 0;
	var index = 0;
	var taskArray = [];
	var exerciseArray = [
		{"day":1,
		"type":"speed",
		"program":[
		{
			"exercise":"pull-ups",
			"reps":"5",
			"sets":"3",
		},
		{
			"exercise":"situps",
			"reps":"20",
			"sets":"3"
		}
		]},
		{
			"day":2,
			"type":"strength",
			"program":[
			{
				"exercise":"pull-ups",
				"reps":"12",
				"sets":"5",
			},
			{
				"exercise":"situps",
				"reps":"20",
				"sets":"3",
			}],
		}];
console.log(exerciseArray)
/*
$.getJSON("hip.json", function(data){
	console.log(data);
});
*/
console.log("Starting warmup");
//For Enter key to add task

$("#task").keypress(function() {
  if (event.which == 13 ) {
 	event.preventDefault();
 	addTask();
  }
 });



$("#add").click(function(){
	addTask();
});




function addTask(){
	var taskObj ={};
	taskObj.day = $("#task").val();
	for (i=0;i<exerciseArray.length;i++){
		if(exerciseArray[i].day == Number(taskObj.day)){
			for (j=0;j<exerciseArray[i].program.length;j++){
				taskObj.name = exerciseArray[i].program[j].exercise;
				console.log(exerciseArray[i].program[j].exercise);
				taskObj.reps = exerciseArray[i].program[j].reps;
				taskObj.sets = exerciseArray[i].program[j].sets;
				taskArray[index] = taskObj;
				$(".tasktable").append("<tr class='taskrow'><th>"+index+"</th><td>"+taskArray[index].name+"</td><td>"+taskArray[index].reps+"</td><td>"+taskArray[index].sets+"</td><td><input type='checkbox' id="+j+"></td></tr>");
			}
		}
	}

	console.log(taskArray);

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
		console.log(taskArray);
		for(i=0;i<taskArray.length;i++){
			console.log(taskArray[index])
			$(".tasktable").append("<tr class='taskrow'><th>"+index+"</th><td>"+taskArray[index].name+"</td><td>"+taskArray[index].reps+"</td><td>"+taskArray[index].sets+"</td><td><input type='checkbox' id="+i+"></td></tr>");
        	if($(this).is(":checked")) {
            	removeTask(this.id);
            	index--;
        	}
   		};
	}
});