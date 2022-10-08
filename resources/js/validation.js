function validate_getpokename(x)
{
    //Regex for matching the name, includes only characters from A-Z or a-z
    var regex=/^[a-zA-Z]+$/; 

    //If input name length is greater than 20, invlaidate the input
    if (x.length > 20)  
    {
        alert("Must input name less than 20 characters");
        return false;
    }

    //If the input is not a string, invalidate the input
    if (!x.match(regex))
    {
        alert("Must input string");
        return false;
    }
    return true;
}

function validate_getpokeno(x)
{
    //Regex for matching the name, includes only characters from A-Z or a-z
    var regex=/^[0-9]+$/; 

    //If the input is a string, invalidate the input
    if (!x.match(regex))
    {   
        if((last_ip_num==""))
        {
            alert("Must input number");
        }
        return false;
    }

    var ip_number = Number(x);
    //Check if the number is from 1 - 20
    if (ip_number<1 || ip_number>20)
    {
        alert("Match input number between 1-20");
        return false;
    }

    return true;
}