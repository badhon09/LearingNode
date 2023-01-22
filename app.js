// const fs = require('fs')
// const bills = require('./bills.js')
// let name = fs.writeFileSync('note.txt','I love you')
// console.log("Starter....")
// check();
//-----------------------------------
// //take command line text
// const command = process.argv[2];
// if(command == 'Add'){
// 	console.log("adding command");
// }else{
// 	console.log("no code");
// }
//-------------------------------------

//array to string to array 
// const book = {'name':'Book of the Year', 'author':'Badhon'}
// const string = JSON.stringify(book)
// const array = JSON.parse(string)
// console.log(array.name);

//----------------------------------------

//array functions 
// const multiply = (x) => x*x;
// console.log(multiply(2));

//---------------------------------------------
//Binding this dont work with arrow functions
// const event = {
// 	'name':'Mr Badhon',
// 	'guestList': ['Rafiq','Karim','Jabbar'],
// 	 printList(){
// 		console.log('listttt',+ this.guestList);
// 		this.guestList.forEach((g)=>{
// 			console.log(g);
// 		})
// 	}
// }
// event.printList();