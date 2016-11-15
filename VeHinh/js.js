// Bai tap 1

 function printTrigangle(n) 
{
	var str = '';
	for (var i = 0; i <n; i++) {
		for(var j=0; j <=i;j++)
			{
				str = str + '*';
			}
		str = str + '<br/>';
	}
	return str;
} 

// Bai tap 2

function printEmptyRectangle(a, b)
{
	var str = '';
	for (var i = 1; i <= a; i++) {
		for (var j = 1; j <= b; j++)
		{
			if(i == 1|| i == a || j == 1 || j == b)
			{
				str = str + '*';
				if( j == b)
					str = str + '<br/>';
				else
				str = str + " "; 
			}
		}
	}
	return '<pre>' +str + '</pre>';
}

// Bai tap 3

function printSpecialTrigangle(n)
{
	var str = '';
	for (var i = 0; i < n; i++)
	{
		for (var j = 1; j <= n*2 - i*2 - 1 ; j++) 
	    {
			str = str + '*';
			if(j === (2*n) - i*2 - 1)
				str = str + '<br/>';
	    }
	    for(j = 0; j <= i; j++)
	    {
	    	str = str + " ";
	    }
	}
	return '<pre>' + str + '</pre>';	
}

// Bai tap 4 

function printX(n)
{
	var str = '';
	for (var i = 0; i < n; i++)
	{
		for (var j = 0; j < n; j++)
		{
			if(i == j || j == (n - i - 1))
			{
				str = str + '*';
			}
			else
			{
				str = str + " ";
			}
		}
		str = str + '</br>';
	}
	return '<pre>' + str + '</pre>';
}

function printButterfly(n)
{
	var str = '';
	for (i = 1; i <= n; i++)
      {
		for(var j = 1; j <= n; j++)
           {
			  if (i <= (n+1)/2) 
              {
				  if (j <= i || j > (n-i))
                  {
					   str += "*";
				  } 
                  else
                  {
					   str += " ";
				  }
			  } 
              else
              {
			      if (j >= i || j <= (n-i+1))
			      {
					   str += "*";
				  } 
                  else
                  {
					   str += " ";
				  }
			   }
			}
			str += "<br>";
		} 
	return '<pre>' + str + '</pre>';
}


// Bai tap 5

