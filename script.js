console.log("Завдання 1")
    let liGet = document.body.getElementsByTagName("li");
    for (let i = 0; i < liGet.length; i++) 
    {
        console.log("«"+liGet[i].firstChild.nodeValue.trim()+"» = "+liGet[i].getElementsByTagName("li").length)
    }


console.log("Завдання 2")
console.log(document.body.lastChild.nodeType)
console.log("Властивість nodeType дозволяє дізнатися про тип DOM-вузла. Його значення – числове: 1 для елементів, 3 для текстових вузлів тощо")










/*console.log(document.getElementById("age-table"))
console.log(document.getElementById("age-table").querySelectorAll('label'))
console.log(document.getElementById("age-table").querySelector('td'))
console.log(document.querySelector('form[name=search]'))
inputs = document.querySelector('form[name=search]').querySelectorAll('input')
console.log(inputs[0])
console.log(inputs[inputs.length-1])*/




/*console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild.previousElementSibling)
console.log(document.body.lastElementChild.previousElementSibling.lastElementChild)

console.log(document.body.children)
console.log(document.body.firstElementChild)
console.log(document.body.lastElementChild)*/




/*function arrSumPush() 
{
  	let arrN = [];
  	let sum = 0;
 	while (true) 
 	{
    	let value = prompt("Введите число", 0);
    	if (value == "" || value == null || !isFinite(value)) 
    		{
    			break;
    		}
    	arrN.push(+value);
  	}
  	for (let number of arrN) 
  	{
    	sum += number;
  	}
  	return sum;
}
console.log("Сумма введеных чисел в массив: " + arrSumPush());



let arr = [1, -2, 3, 4, -9, 6]
function getMaxSubSum(arr) 
{
  	let sum = 0
  	let count = 0
  	for(let i = 0; i < arr.length; i++) 
  	{
  		if (arr[i] > 0)
  		{
  			count++;
  		}
  	}
  	if (count == 0) 
  	{
  		return 0;
  	}
  	if (count > 0)
  	{
  		for(let i = 0; i < arr.length; i++) 
  		{
     		sum += arr[i];
  		}
  	}	
 	return sum
}
console.log("УМОВА: Функція getMaxSubSum(arr) має повертати цю суму. Якщо ВСІ елементи негативні - нічого не беремо (підмасив порожній) і сума дорівнює «0»")
console.log("Сумма чисел в массиве: " + getMaxSubSum(arr))*/












/*function readNumber() 
{
    provereno = false;
    while(!provereno)
    {
        number = +prompt("Введите число");
        if (number == null || number == '') 
        {
        	provereno = true;
            return null;
        } 
        else if (!isNaN(number)) 
        {
        	provereno = true;
            return number;
        }
    }
}
console.log("Вы ввели: " + readNumber())



function random(min, max) 
{
  return Math.random() * (max - min) + min;
}
console.log("Рандомное число: " + random(1, 10));



let chislo1 = +prompt("Введите 1-вое число", 0);
let chislo2 = +prompt("Введите 2-рое число", 1);
let sumChisel = chislo1 + chislo2;
console.log("Сума чисел: " + sumChisel);



let array =
[ 
"Спочатку JavaScript був створений, щоб зробити веб-сторінки живими ", 
"Різні двигуни мають різні «кодові імена».",
"Коли JavaScript створювався, він мав інше ім'я – «LiveScript» ",
"Повна інтеграція з HTML/CSS "
]
for(let i = 0; i < array.length; i++) 
{
	if(array[i].indexOf("JavaScript") !== -1) 
	{
    	console.log(array[i])
  	}
}



function register(str)
{
    str = str.slice(0, 1).toUpperCase() + str.slice(1, str.length).toLowerCase();
    return str;
}
console.log("Строка в исправленном регистре: " + register("бУквА"));*/

















/*function calculator(a,b)
{
	this.read = function()
	{
		this.a = Number(prompt("Vvedite a chislo", 0));
		this.b = Number(prompt("Vvedite b chislo", 0));
	},
	this.sum = function()
	{
		let sum;
		sum = this.a + this.b;
		console.log("sum = " + sum);
		return sum;
	},
	this.mul = function(){
		let mul;
		mul = this.a * this.b;
		console.log("mul = " + mul);
		return mul;
	}
}
let constructors = new calculator(0,0);
constructors.read();
constructors.sum();
constructors.mul();



function constructor(startingValue)
{
	this.startingValue = startingValue,
	this.value = this.startingValue,

	this.add = function()
	{
		let number;
		number = Number(prompt("Vvedite chislo: ",1));
		this.value = this.value + number;
		console.log("Number = " + number + ", value = " + this.value + ", but startingValue = " + this.startingValue);
		return this;
	}
}

let zadanie = new constructor(23);
zadanie.add();*/
















/*let calculator =
{
	a: 0,
	b: 0,

	read:function()
	{
		this.a = Number(prompt("Vvedite a chislo", 0));
		this.b = Number(prompt("Vvedite b chislo", 0));
	},

	sum:function()
	{
		let sum;
		sum = this.a + this.b;
		alert("Sum = " + sum);
		console.log("sum = " + sum);
		return sum;
	},

	mul:function(){
		let mul;
		mul = this.a * this.b;
		alert("Mul = " + mul);
		console.log("mul = " + mul);
		return mul;
	}
}
calculator.read();
calculator.sum();
calculator.mul();

let ladder = 
{
	step: 0,

	up:function()
    {
		this.step = this.step + 1;
		console.log("up " + this.step);
        return this;
	},

	down:function()
	{
		this.step = this.step - 1;
		console.log("down " + this.step);
        return this;
	},

	showStep:function()
	{
		alert("Step = " + this.step);
		console.log("Step = " + this.step);
	}
}
ladder.up().up().down().showStep();*/





















/*let user = {
	name: "Ivan",
	Say: function()
	{
		console.log(this);
	}

}

user.Say();

function makeUser(){
	return {
		name: "asd",
		ref (){
			return this;
		}
	};
}


let user1 = makeUser();*/




















/*let zarp = 
{
	Danya: 5000,
	Misha: 4500,
	Roma: 1000,
	Andrey: 0009
}

function checkzp(){
	let sum = 0;
	for(Key in zarp)
	{
		sum+=zarp[Key];
	}
	return sum;
}

console.log(checkzp())

let zarpl = 
{
	Danya: 5000,
	name1:"Danya",
	Misha: 4500,
	name2:"Misha",
	Roma: 1000,
	name3:"Andry",
	Andrey: 0009
}

function check(){
	let sum = 0;
	for(Key in zarp)
	{
		if(typeof(Key) == Number)
		{
			
		}
		sum+=zarpl[Key];
	}
	return sum;
}

console.log(check())*/
















/*let obj = 
{
	name:" ",
	surname:" ",
	age: " ",
	zarplata: " "
}

obj.name = "Danya";
obj.surname = "Marchenko";
obj.age = "18";
obj.zarplata = "4800";

obj.surname = "Yumanov";

delete obj.name;

for(let Key in obj)
{
	console.log(obj[Key]);
}

function check(key){
	for(Key in obj)
	{
		if(key==Key){
			return true;
		}
	}
	return false;
}

console.log(check('age'))*/