var fund = function() {
    var date = new Date();          //gets current date
    var month = date.getMonth();    //shows a current month
    var dow = function(d){          //returns day of week 
        var dat = new Date(2018, month, d);
        var dw = dat.getDay();
        return dw;
    }
    var day = date.getDate();       // returns date of month
    var a = 0;                      // default amount of working days this month
    var res = document.getElementById('res'); // div with results
    var descr = document.getElementById('description');//div with description phrase
    var c_hours = document.getElementById('c_hours'); // div with counted hours
    //var h = a*8;
    
    for (i = 1; i<day;i++){         // cycle that counts amount of working days to current day
        if(dow(i) in [0,7])
            {continue}
        a = i;
    }
    
        a = a*8;
         return a;
    c_hours.innerHTML = a.toLocaleString(); // should insert result div to main div
}
