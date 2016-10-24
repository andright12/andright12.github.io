// Bai tap 1

function baitap1() 
{
	var s = document.getElementById('value1').value;
	var t = 1;
	for (var i = 1; i <= s; i++) {
		t = t*i; 
	}
	var a = t;
	console.log(a);
    document.getElementById('kqbt1').innerHTML = a;
}

// Bai tap 2

function baitap2()
{
	var a = document.getElementById('value2').value;
	var s = a.split("");
	var kq = "";
	for (var i = s.length - 1; i >= 0; i--) {
		kq = kq + s[i];
	}
		
	document.getElementById('kqbt2').innerHTML = kq;
}

// Bai tap 3

function baitap3()
{
	var a = document.getElementById("value5").value;
	var kq="";
	for (var i = 0; i < 10; i++) {
		kq = kq+a+"-";
	}
	var kqqc = kq.substring(0, kq.length - 1);
	document.getElementById('kqbt3').innerHTML = kqqc;
}

// Bai tap 4

function baitap4()
{
	var a = document.getElementById("value6").value;
	var s = a.split(",")
	kq ="";
	for (var i = 0; i < s.length; i++) {
		kq = kq+i+"."+s[i]+",";
	}
	var kqqc = kq.substring(0,kq.length-1);
	document.getElementById('kqbt4').innerHTML = kqqc;
}

// Bai tap 5

function baitap5()
{
	var a = document.getElementById('dayso').value;
	var s = a.split("");
	var kq = ""; 
	for (var i = 0; i < s.length; i++) {
		kq = kq + s[i]*2;
	}
	document.getElementById('kqbt5').innerHTML = kq;
}

// Bai tap 6

function baitap6()
{
	var a = document.getElementById('dshocvien').value;
	var s = a.split(",");
	kq = "";
	for (var i = 0; i < s.length; i++) {
		kq = kq + (s[i]%2) +",";
	}
	var kqqc = kq.substring(0,kq.length-1);

	document.getElementById('kqbt6').innerHTML = kqqc; 
}

// Bai tap 7 

/* 	var teacher = {
		firstName: "Andree",
		lastName: "Righ Hand",
		age: 28,
		say: function() {}
		}
	var student = {
		firstName: "Viet",
		lastName: "Dragon",
		age: 33,
		say: function() {}
	}
	var parent = {
		firstName: "Ngoc Thao",
		lastName: "Le Truong",
		age:27,
		say: function() {}
	}
	var aboutMe = function() {
		alert("Xin chao toi la" +" "+this.firstName+ " " + this.lastName + " " + "năm nay tôi" +" " +this.age +" "+"tuổi" );
	}
	teacher.say = aboutMe;
	teacher.say();
	student.say = aboutMe;
	student.say();
	parent.say = aboutMe;
	parent.say();
*/