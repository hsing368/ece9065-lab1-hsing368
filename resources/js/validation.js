function validate_getpokename()
{
    var x=document.getElementById("pokename").value;
    var regex=/^[a-zA-Z]+$/;
    if (x.length > 20) 
    {
        alert("Must input name less than 20 characters");
    }
    if (!x.match(regex))
    {
        alert("Must input string");
        document.getElementById("pokename").innerHTML = "";
    }
}
function validate_getpokeno()
{
    var x=document.getElementById("pokeno").value;
    if (x<1 || x>20)
    {
        alert("Number must be between 1-20");
    }
}