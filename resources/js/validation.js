function validate_getpokename(x)
{
    //Regex for matching the name, includes only characters from A-Z or a-z
    var regex=/^[a-zA-Z]+$/; 

    //If input number is greater than 20, invlaidate the input
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
    //Check if the number is from 1 - 20
    if (x<1 || x>20)
    {
        alert("Match input number between 1-20");
        return false;
    }
    return true;
}