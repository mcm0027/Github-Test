

var myHouse ={
	rooms: "10",
	color: "blue",
	size: "1,500 square feet",
	sayHouseInfo:function(){
	return "This house has "+ this.rooms + " rooms, is " + this.color + ", and is " + this.size + ".";
	}
}

console.log(myHouse.sayHouseInfo());

var yourHouse = Object.create(myHouse);

yourHouse.rooms = "20";

yourHouse.color = "green";

console.log(yourHouse.sayHouseInfo());