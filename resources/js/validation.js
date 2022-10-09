var last_ip_name = "";
var last_ip_num  = "";

function validate_getpokename(x)
{
    //Regex for matching the name, includes only characters from A-Z or a-z
    var regex=/^[a-zA-Z]+$/; 

    //If input name length is greater than 20
    
    if (x.length > 20)
    {
        alert("Must input name less than 20 characters");
        return false;
    }

    /*
        If the input is not a string, invalidate the input, invlaidate the input
        only if there was some previous input
    */
    if (!x.match(regex))
    {
        if((last_ip_name==""))
        {
            alert("Must input string");
        }
        return false;
    }

    //Save the current input for future validations
    last_ip_name = x;
    last_ip_num  = "";
    return true;
}

function validate_getpokeno(x)
{
    //Regex for matching the name, includes only characters from A-Z or a-z
    var regex=/^[0-9]+$/; 

    /*
        If input name length is greater than 20, invlaidate the input
        only if there was some previous input
    */
    var ip_number = Number(x);
    
    if (!x.match(regex))
    {   
        if((last_ip_num==""))
        {
            alert("Must input number");
        }
        return false;
    }

    

    //Check if the number is from 1 - 20
    if (ip_number<1 || ip_number>20)
    {
        alert("Match input number between 1-20");
        return false;
    }

    //Save the current input for future validations
    last_ip_num  = x;
    last_ip_name = "";
    return true;
}