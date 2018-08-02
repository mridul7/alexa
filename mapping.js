var doc = "This is a placeholder welcome message.This skill includes 6 intents. Try one of your intent utterances to test the skill.";
var msg=[]= doc.split(".").filter((line)=>line.length!=0);




var tokens= [ "placeholder", "message", "intents", "utterances", "skill" ];
 
var HashMap=require('hashmap');
var Set=require('set');
var map=new HashMap();

msg.forEach(function(line)
{
	
	var sets=new Set();
	tokens.forEach(function(word)
	{
	
		if(line.indexOf(word)>=0)
		{  
			sets.add(word);
			
		}
		
	});
	map.set(sets.get(),line);
	
});

console.log(map.entries());


var Set1=require('set');
var set1=new Set1();
set1.add("placeholder");
set1.add("message");
console.log(map.get(set1.get()));



