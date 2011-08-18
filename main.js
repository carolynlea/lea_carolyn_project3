//Project 3
//Carolyn Lea
//Visual Frameworks 1108
//August 12, 2011


function doChange(srcList, targetId){
	
	var val = srcList.options[srcList.selectedIndex].value;
	var targetList = document.getElementById(targetId);
	alert("You have chosen " + val + ".  Press ok to continue.");
	removeAll(targetList);
	if(val == 'animal')
	{
		addOption('bears', targetList);
		addOption('crabs', targetList);
		addOption('fish', targetList);
		addOption('lions', targetList);
		addOption('rats', targetList);
		addOption('wolves', targetList);	

	}
	else if(val == 'human')
	{
		addOption('bandits', targetList);
		addOption('conjurers', targetList);
		addOption('marauders', targetList);
		addOption('necromancers', targetList);
		addOption('quest giver', targetList);
		addOption('trainer', targetList);
	}
	else if(val == 'mythic')
	{
		addOption('goblins', targetList);
		addOption('imps', targetList);
		addOption('minotaurs', targetList);
		addOption('ogres', targetList);
		addOption('unicorn', targetList);
	}
	else if(val == 'undead')
	{
		addOption('skeletons', targetList);
		addOption('vampires', targetList);
		addOption('wraiths', targetList);
		addOption('zombies', targetList);
	}
 };

function addOption(value, list){
	
	var o = new Option(value);
	try
	{
		list.add(o);
	}
	catch(listing)
	{
		list.add(o, null);
	}
};

function removeAll(list){
	
	for(var i = 0, limit = list.options.length; i < limit - 1; ++i)
	{
		list.remove(1);
	}
};







function storeItems(id){
	var dungeon_name = document.getElementById('dungeon_name').value;
	var dungeon_type = document.getElementById('dungeon_type').value;
	var location = document.getElementById('location').value;
	var date_found = document.getElementById('date_found').value;
	var populated = document.getElementById('populated').value;
	var friendly = document.getElementById('friendly').value;
	var selOne = document.getElementById('selOne').value;
	var no_loot_here = document.getElementById('no_loot_here').value;
	var notes = document.getElementById('notes').value;
	var selTwo = document.getElementById('selTwo').value;
	localStorage.setItem('appDungeonName', dungeon_name);
	localStorage.setItem('appDungeonType', dungeon_type);
	localStorage.setItem('appLocation', location);
	localStorage.setItem('appDateFound', date_found);
	localStorage.setItem('appPopulated', populated);
	localStorage.setItem('appFriendly', friendly);
	localStorage.setItem('appSelOne', selOne);
	localStorage.setItem('appNoLootHere', no_loot_here);
	localStorage.setItem('appNotes', notes);
	localStorage.setItem('appSelTwo', selTwo);
	document.getElementById('clear').style.display = "block";
	document.getElementById('main').style.display = "none";
	
	
};

function validateForm(){
	var getDungeonName = document.forms[0]["dungeon_name"].value;
	if (getDungeonName == ""){
		document.getElementById("dungeon_name").style.border="1px solid #990000";
		var encourage = prompt("You did not include a Dungeon Name.", "");
		if(encourage !=null && encourage != ""){
			document.forms[0]["dungeon_name"].value = encourage;
		}
		return false;
	}else{
		document.getElementById("dungeon_name").style.border = "1px solid #37382C";
	}
	//alert ("Form Submitted!");
};

function getItems(){
	if (localStorage.getItem('appDungeonName')) {
		var dungeon_name = localStorage.getItem('appDungeonName');
		var dungeon_type = localStorage.getItem('appDungeonType');
		var location = localStorage.getItem('appLocation');
		var date_found = localStorage.getItem('appDateFound');
		var populated = localStorage.getItem('appPopulated');
		var friendly = localStorage.getItem('appFriendly');
		var selOne = localStorage.getItem('appSelOne');
		var no_loot_here = localStorage.getItem('appNoLootHere');
		var notes = localStorage.getItem('appNotes');
		var selTwo = localStorage.getItem('appSelTwo');
		
		var viewForm = [
		dungeon_name,
		dungeon_type,
		location,
		date_found,
		populated,
		friendly,
		selOne,
		selTwo,
		no_loot_here,
		notes
		
		];
		alert(viewForm);
	}
};



function showList(){
	var showEachItem = document.forms
};

function clearlocal(){
	localStorage.clear();
	return false;
};







