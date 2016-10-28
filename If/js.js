// Bai tap 1

function baitap1() 
{
	var a = document.getElementById('value1').value;
	var b = document.getElementById('value2').value;
	var kq ="";
	var kqqt ="";
	if(isNaN(a) === false && isNaN(b) === false)
	{
	  	if(a > b) {
	  		var kq = "Số lớn hơn là: "+ a;
	  		document.getElementById('kqbt1').innerHTML = kq;
	  	}
	  	else
	  	{
	  		var kq = "Số lơn hơn là: "+ b;
	  		document.getElementById('kqbt1').innerHTML = kq;
	  	}
	  	if (a == b) {
	  		var kq = "Hai số bằng nhau";
	  		document.getElementById('kqbt1').innerHTML = kq;
	  	}
 	}
 	else 
 	{
 		var kqqt = "Một trong 2 số không phải dạng number";
 		document.getElementById('kqbt1').innerHTML = kqqt; 
 	}
}

// Bai tap 2

function baitap2()
{
	var a = document.getElementById('value3').value;
	var kq = 1;
	var kqqc = "";
	if (isNaN(a) === false)
	{
		if(a > 0)
		{
			for (var i = 1; i <= a; i++) {
				kq = kq*i;
			}
			kqqc = "Giai thừa của số nhập vào là: " + kq
			document.getElementById('kqbt2').innerHTML = kqqc;
		}
		else {
			kqqc = "Số bạn nhập không phải số nguyên dương";
			document.getElementById('kqbt2').innerHTML = kqqc;
		}
	}
	else {
		kqqc = "Bạn nhập không phải dạng số";
		document.getElementById('kqbt2').innerHTML = kqqc;
		}
}

// Bai tap 3

function baitap3()
{
	var a = document.getElementById("value5").value;
	var s = a.split("");
	var mang = []; 
	for (var i = 0; i < s.length; i++) 
	{
		if(isNaN(s[i]) === true) 
		{
			kq = "Chuôi bạn nhập vào có kí tự chữ";
			document.getElementById('kqbt3').innerHTML = kq;
		}
		else
		{
			if(s[i] %2 === 0) 
			{
				mang.push(s[i]);
			}
		}
	}
	var kq = mang.sort();
	var kqqc1 = mang.reverse();
	var kqqc = "";
	for (var i = 0; i < kq.length; i++) {
		kqqc = kqqc + kqqc1[i]; 
	}
	var kqqc2 = "Chuỗi số chẵn được xếp theo thứ tự giảm dần là: " + kqqc;
	document.getElementById('kqbt3').innerHTML = kqqc2;
}

// Bai tap 4

function baitap4()
{
	var a = document.getElementById("value6").value;
	var b = document.getElementById("value7").value;
	var c = document.getElementById("value8").value;
	var obj = new Object();
	var kq = "";
	obj.username = a;
	obj.password = b;
	obj.confirm = c; 
	if(obj.username.length === 0)
	{
		kq = "Chuỗi username nhập vào phải khác rỗng";
		document.getElementById('kqbt4').innerHTML = kq;
	}
	else {
		if(obj.username.length > 20)
		{
			kq = "Chuỗi username nhập vào không được lớn hơn 20 kí tự";
			document.getElementById('kqbt4').innerHTML = kq; 
		}
		else {
			if(obj.password.length <= 6 || obj.password.length >= 32)
			{
				kq = "password không được ít hơn 6 và nhiều hơn 32 kí tự";
				document.getElementById('kqbt4').innerHTML = kq;
			}
			else {
				if(obj.password != obj.confirm )
				{
					kq = "password và confirm bạn nhập không đúng";
					document.getElementById('kqbt4').innerHTML = kq;
				}
				else {
					kq = "Bạn nhập thông tin chuẩn xác luôn";
					document.getElementById('kqbt4').innerHTML = kq;
				}
			}
		}
	}
}

// Bai tap 5

