const repeatString = function(string,times) {
    
        if(times < 0)
           return "";
        if(times === 1)
           return string;
        else
           return string + repeatString(string, times - 1);
           console.log(repeatString("hey", 3));
     }
   
   
    
// Do not edit below this line
module.exports = repeatString;
