function validatedate(inputText)
  {
				
  var dateformat1 = /\d{4}-(0?[1-9]|1[012])-(0?[1-9]|[12][0-9]|3[01])+T+([01][0-9]|[2][0-3]):([0-5][0-9]):([0-9][0-9]).\d{3}\w/; // we can replace T or Z with regexr \w that means it could be any char instead of T or Z

  // Match the date format through regular expression
  if(inputText.match(dateformat1))
  {
  var opera = inputText.split('-');
  lopera = opera.length;
  // Extract the string into month, date, year ...
  if (lopera>1)
  {
	  var pdate = inputText.split('-');
    var pdaystime = pdate[2].split('T'); // we can replace T with regexr /\w/ that means it could be any char instead of T
    //var ptime = pdaystime[1].split(':');
    //var ptimemil = ptime[2].split('.')
  }
  var yy = parseInt(pdate[0]);
  var mm  = parseInt(pdate[1]);
  var dd = parseInt(pdaystime[0]);
  //var hour = parseInt(ptime[0]);
  //var minutes = parseInt(ptime[1]);
  //var seconds = parseInt(ptimemil[0]);
  //var msec = parseInt(ptimemil[0]);


  // list of days for each month 
  var ListofDays = [31,28,31,30,31,30,31,31,30,31,30,31];
  if (mm==1 || mm>2)
  {
	if (dd>ListofDays[mm-1])
		{
			console.log('Invalid date format!');
			return false;
		}
  }
  if (mm==2)
  {
    var lyear = false;
    if ( (!(yy % 4) && yy % 100) || !(yy % 400)) 
    {
      lyear = true;
    }
    if ((lyear==false) && (dd>=29))
    {
      console.log('Invalid day date format!');
      return false;
    }
    if ((lyear==true) && (dd>29))
    {
      console.log('Invalid day date format!');
      return false;
    }
  }
  }
  else
  {
    console.log("Invalid date format!");
    return false;
  }
  return true;
  }
  
  console.log(validatedate('2015-12-18T16:18:32.123Z'));
  
  