let users = [
	{
	  first_name: 'Mike',
	  last_name: 'Sheridan'
	},
	{
	  first_name: 'Tim',
	  last_name: 'Lee'
	},
	{
	  first_name: 'John',
	  last_name: 'Carte'
	}
  ];
//   Using Map method
//   output:['Mike Sheridan', 'Tim Lee', 'John Carte']


let result=users.map(function(e){
	return e.first_name +" "+ e.last_name;
	
})
document.write(result)









