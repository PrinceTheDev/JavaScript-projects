var greet = (user) => {
	var name = user ? user.name : "stranger";
	return `Hello, ${name}`;
};

console.log(greet({ name: "John" }) + '\n' + greet(null));

console.log('\n', '\n');

var num = 25;
var me = "Prince";
var obj = {
	Hair: "black",
	eyes: "white",
	gender: "male"
};
var arr = ["a","b", "c", "d", "e"];

console.log("The type of the num: ", num, " is", typeof(num));
console.log("the type of me: ",  me, "is", typeof(me));
console.log("the type of obj: ",  obj, "is", typeof(obj));
console.log("the type of arr: ",  arr, "is", typeof(arr));
