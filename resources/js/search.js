//Initialize the pokemon data array

const pokemon_data =  
[
  [['Bulbasaur'],	1,	[''], ['Ivysaur'],	['Grass','Poison']],
  [['Ivysaur'],	2,	['Bulbasaur'],	['Venusaur'],	['Grass','Poison']],
  [['Venusaur'],	3,	['Ivysaur'],	[''],	['Grass','Poison']],
  [['Charmander'],	4,	['Charmeleon'],	[''],	['Fire','']],
  [['Charmeleon'],	5,	['Charmander'],	['Charizard'],	['Fire','']],
  [['Charizard'],	6,	['Charmeleon'],	[''],	['Fire','Flying']],
  [['Squirtle'],	7,	['Wartortle'],	[''],	['Water','']],
  [['Wartortle'],	8,	['Squirtle'],	['Blastoise'],	['Water','']],
  [['Blastoise'],	9,	['Wartortle'],	[''],	['Water','']],
  [['Caterpie'],	10,	['Metapod'],	[''],	['Bug','']],
  [['Metapod'],	11,	['Caterpie'],	['Butterfree'],	['Bug','']],
  [['Butterfree'],	12,	['Metapod'],	[''],	['Bug','Flying']],
  [['Weedle'],	13,	['Kakuna'],	[''],	['Bug','Poison']],
  [['Kakuna'],	14,	['Weedle'],	['Beedrill'],	['Bug','Poison']],
  [['Beedrill'],	15,	['Kakuna'],	[''],	['Bug','Poison']],
  [['Pidgey'],	16,	['Pidgeotto'],	[''],	['Normal','Flying']],
  [['Pidgeotto'],	17,	['Pidgey'],	['Pidgeot'],	['Normal','Flying']],
  [['Pidgeot'],	18,	['Pidgeotto'],	[''],	['Normal','Flying']],
  [['Rattata'],	19,	['Raticate'],	[''],	['Normal','']],
  [['Raticate'],	20,	['Rattata'],	[''],	['Normal','']]
];

//Caller function to invoke Search functions when Enter key is pressed
function searchKeyPress(e, ip_id)
{
    if (e.keyCode == 13)
    {
        if (ip_id === 'number')
        {
          console.log("Enter key number pressed");
          searchByNumber();
        }
        else if (ip_id === 'name')
        {
          console.log("Enter key name pressed");
          searchByName();
        }
    }
}

//Function to clear the text box values for Search by Name & Number text-boxes
function clearInput()
{
  document.getElementById("pokeno").value = "";
  document.getElementById("pokename").value = "";
}

//Function to Search by number
function searchByNumber()
{
  //Get the input value from the user
  let ip_number = document.getElementById("pokeno").value;

  //Validate the input number for incorrect range
  let ret_val = validate_getpokeno(ip_number);
  if (ret_val == false)
  {
    clearInput();
    return;
  }

  let pokemon_found = false;
  let result = []; //This holds the resultant strings to display in alert box

  //Loop through the pokemon data to match the input number
  for (let i = 0; i < pokemon_data.length; i++)
  {
    let stored_number = (pokemon_data[i][1]).toString();

    //If the number matches, add to the result array
    if ( stored_number.includes(ip_number.toString()) )
    {
      let pokemon_parent = (pokemon_data[i][2].toString()==="") ? "NA" : pokemon_data[i][2].toString();
      let pokemon_desc   = (pokemon_data[i][3].toString()==="") ? "NA" : pokemon_data[i][3].toString();
      
      result.push( (result.length + 1) +". Name: " + pokemon_data[i][0].toString() + "; Number: " + stored_number + "; Pokemon-type: " + pokemon_data[i][4][0].toString()
                    + " " + pokemon_data[i][4][1].toString() + "\n\tPokemon Parent: " + pokemon_parent + "; Pokemon Descendant: " + pokemon_desc + "\n");
      pokemon_found = true;
      
      //Stop processing if there are 5 results
      if(result.length == 5)
      {
        break;
      }
    }
  }

  //console.log(result);
  if( pokemon_found  == false)
  {
    alert("Pokemon not found :( !!");
    return;
  }
  else
  {
    let alert_message = "Pokemon match found for: \"" + ip_number + "\" !!\n" ;
    result.sort();

    //Construct the alert message log
    for (let i = 0; i < result.length; i++)
    {
      alert_message += result[i];
    }
    alert( alert_message );
  }

  //Clear the text-box input after the process is done
  clearInput();
}

//Function to Search by name
function searchByName()
{
  //Get the input value from the user
  let name = document.getElementById("pokename").value;

  //Validate the input number for incorrect range
  let ret_val = validate_getpokename(name);
  if (ret_val == false)
  {
    clearInput();
    return;
  }

  let ip_name = name.toLowerCase();
  let pokemon_found = false;
  let result = []; //This holds the resultant strings to display in alert box

  //If the number matches, add to the result array
  for (let i = 0; i < pokemon_data.length; i++)
  {
    let stored_name = pokemon_data[i][0].toString().toLowerCase();
    if ( stored_name.includes(ip_name) )
    {
      let pokemon_parent = (pokemon_data[i][2].toString()==="") ? "NA" : pokemon_data[i][2].toString();
      let pokemon_desc   = (pokemon_data[i][3].toString()==="") ? "NA" : pokemon_data[i][3].toString();
      
      result.push( (result.length + 1) +". Name: " + pokemon_data[i][0].toString() + "; Number: " + ((pokemon_data[i][1]).toString()) + "; Pokemon-type: " + pokemon_data[i][4][0].toString()
                    + " " + pokemon_data[i][4][1].toString() + "\n\tPokemon Parent: " + pokemon_parent + "; Pokemon Descendant: " + pokemon_desc + "\n");

      pokemon_found = true;

      //Stop processing if there are 5 results
      if(result.length == 5)
      {
        break;
      }
    }
  }
  
  if( pokemon_found  == false)
  {
    alert("Pokemon not found :( !!");
    return;
  }
  else
  {
    let alert_message = "Pokemon match found for: \"" + ip_name + "\" !!\n" ;
    result.sort();

    //Construct the alert message log
    for (let i = 0; i < result.length; i++)
    {
      alert_message += result[i];
    }
    alert( alert_message );
  }

  //Clear the text-box input after the process is done
  clearInput();
}