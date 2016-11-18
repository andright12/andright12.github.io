// Bai tap 1

function changeFontSize() 
{	
	var x = document.getElementById('value1').value;
	if(x === "")
	{
		var kq = "bạn chưa nhập vào x";
		document.getElementById('null').innerHTML = kq; 

	}
	else
	{
	    document.getElementById('doanvan1').style.fontSize = x + "px";
	    document.getElementById('doanvan2').style.fontSize = x + "px";
        document.getElementById('doanvan3').style.fontSize = x + "px";
    }
} 

// Bai tap 2

function increaseFontSize()
{
	var x = document.getElementById('value1').value;
	var y = document.getElementById('value2').value;
	if(y == 1)
	{
		x++;
		kq = x;
		document.getElementById('doanvan1').style.fontSize = kq + "px";
	}
	if(y == 2)
	{
		x ++;
		kq = x;
		document.getElementById('doanvan2').style.fontSize = kq + "px";
	}
	if(y == 3)
	{
		x ++;
		kq = x;
		document.getElementById('doanvan3').style.fontSize = kq + "px";
	}
}

// Bai tap 3

function decreaseFontSize()
{
	var x = document.getElementById('value1').value;
	var y = document.getElementById('value3').value;
	if(y == 1)
	{
		x--;
		kq = x;
		document.getElementById('doanvan1').style.fontSize = kq + "px";
	}
	if(y == 2)
	{
		x--;
		kq = x;
		document.getElementById('doanvan2').style.fontSize = kq + "px";
	}
	if(y == 3)
	{
		x--;
		kq = x;
		document.getElementById('doanvan3').style.fontSize = kq + "px";
	}	
}

// Bai tap 4 

function changeColor()
{
	document.getElementById('doanvan1').style.color = "green";
	document.getElementById('doanvan2').style.color = "yellow";
	document.getElementById('doanvan3').style.color = "red";
}

function changeBgColor()
{
	document.getElementById('body').style.backgroundColor = "purple";
}
function copyContent()
{
	var x = "";
	var y = "";
	x = document.getElementById('doanvan2').innerText;
	document.getElementById('doanvan1').innerText = x; 
}

// Bai tap 5

