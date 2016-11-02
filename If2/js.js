// Bai tap 1

function baitap1() 
{
	var now = new Date();
	var ngay = now.getDate();
	var thang = now.getMonth() +1;
	var nam = now.getFullYear();
	var kq1 = "Hôm nay là ngày"+" " + ngay +" "+ "tháng"+" " + thang +" "+ "năm"+" " + nam;
	document.getElementById("kqbt1").innerHTML = kq1;
	var kq = "";
	switch(thang)
	{
		case 1: 
		{
			kq = "Mùa hiện tại là mùa xuân";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 2: 
		{
			kq = "Mùa hiện tại là mùa xuân";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 3: 
		{
			kq = "Mùa hiện tại là mùa xuân";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 4: 
		{
			kq = "Mùa hiện tại là mùa xuân";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 5: 
		{
			kq = "Mùa hiện tại là mùa hạ";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 6: 
		{
			kq = "Mùa hiện tại là mùa hạ";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 7: 
		{
			kq = "Mùa hiện tại là mùa hạ";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 8: 
		{
			kq = "Mùa hiện tại là mùa hạ";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 9: 
		{
			kq = "Mùa hiện tại là mùa thu";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 10: 
		{
			kq = "Mùa hiện tại là mùa thu";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 11: 
		{
			kq = "Mùa hiện tại là mùa đông";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}
		case 12: 
		{
			kq = "Mùa hiện tại là mùa đông";
			document.getElementById("kqbt2").innerHTML = kq;
			break;
		}

	}
}

// Bai tap 2

function baitap2()
{
	var a = document.getElementById('value3').value;
	kq = "";	
	if(a.length < 10)
	{
		kq = a;
		document.getElementById("kqbt3").innerHTML = kq;
	}
	else
	{
		kq = a.substring(0,10) + "......................";
		document.getElementById("kqbt3").innerHTML = kq;
	}
}

// Bai tap 3

function baitap3()
{
	var a = document.getElementById("value5").value;
	kq ="";
	if(a >= 0 && a <= 10)
	{
		if(a >= 0 && a <=3.9)
		{
			kq = "Bạn dạt điểm F";
			document.getElementById("kqbt4").innerHTML = kq;
		}
		if(a >= 4 && a <=5.4)
		{
			kq = "Bạn dạt điểm D";
			document.getElementById("kqbt4").innerHTML = kq;
		}
		if(a >= 5.5 && a <= 6.9)
		{
			kq = "Bạn dạt điểm C";
			document.getElementById("kqbt4").innerHTML = kq;
		}
		if(a >= 7 && a <=8.4)
		{
			kq = "Bạn dạt điểm B";
			document.getElementById("kqbt4").innerHTML = kq;
		}
		if(a >= 8.5 && a <=10)
		{
			kq = "Bạn dạt điểm A";
			document.getElementById("kqbt4").innerHTML = kq;
		}
	}
}

// Bai tap 4

function baitap4()
{
	var a = document.getElementById("value6").value; 
	var kq ="";
	switch(a) 
	{
		case "vn" :
		{
			kq = "Dịch Hello sang tiếng việt là Xin Chào";
			document.getElementById("kqbt5").innerHTML = kq;
			break;
		}
		case "eng" :
		{
			kq = "Dịch Hello sang Anh là Hi";
			document.getElementById("kqbt5").innerHTML = kq;
			break;
		}
		case "fran" :
		{
			kq = "Dịch Hello sang Pháp là bonjour";
			document.getElementById("kqbt5").innerHTML = kq;
			break;
		}
		case "ger" :
		{
			kq = "Dịch Hello sang đức là Hallo";
			document.getElementById("kqbt5").innerHTML = kq;
			break;
		}
		case "ita" :
		{
			kq = "Dịch Hello sang tiếng italia là ciao";
			document.getElementById("kqbt5").innerHTML = kq;
			break;
		}
	}
}

function baitap5()
{
	var a = [false,false,false,true,false,true,false,true];
	for (var i = 0; i < a.length; i++) 
	{
		if(a[i] === true)
		{
			kq = "true đầu tiên trong mảng nằm ở vị trí thứ  " + i;
			document.getElementById("kqbt6").innerHTML = kq;
			break;
		}
	}

}
function baitap6()
{
	for(i=1;i<=100;i++)
	{
		var kq = "";
		var kq1 = "";

		if(i%2 === 0)
		{			
			kq = i.toString();
			kq1 = kq.fontcolor("blue") + " ";
			document.getElementById("kqbt7").innerHTML += kq1;
		}
		else
		{
			kq = i.toString();
			kq1 = kq.fontcolor("red") + " ";
			document.getElementById("kqbt7").innerHTML += kq1;
		}
	}
}

// Bai tap 5

