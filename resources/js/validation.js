function validate_getpokename(x)
{
    var regex=/^[a-zA-Z]+$/;
    if (x.length > 20) 
    {
        alert("Must input name less than 20 characters");
        return false;
    }
    if (!x.match(regex))
    {
        alert("Must input string");
        return false;
            }
    return true;
}
function validate_getpokeno(x)
{
    if (x<1 || x>20)
    {
        alert("Match input number between 1-20");
        return false;
    }
    return true;
}