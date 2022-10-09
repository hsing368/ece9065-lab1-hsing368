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

//Get the reference to the dynamic search list
var dyn_search_list = document.getElementById("dyn-image-list");

//Caller function to invoke Search functions when Enter key is pressed
function searchKeyPress(e, ip_id)
{
    //if (e.keyCode == 13)
    {
        if (ip_id === 'number')
        {
          searchByNumber();
        }
        else if (ip_id === 'name')
        {
          searchByName();
        }
    }
}

//Function to clear the text box values for Search by Name & Number text-boxes
function clearInput(clr_string)
{
  if(clr_string == 'all' || clr_string == 'number')
  {
    document.getElementById("pokeno").value = "";
  }

  if(clr_string == 'all' || clr_string == 'name')
  {
    document.getElementById("pokename").value = "";
  }

  console.log("Clear input called");  
}

//Function to get the new Image list element
function getImageElement(i)
{
  let stored_number = (pokemon_data[i][1]).toString();
  let pokemon_name = pokemon_data[i][0].toString().toLowerCase();

  //Creating a new list element
  let li = document.createElement('li');
  li.className = 'image-item';
  let pok_id = "item"+stored_number; //Populate the unique id for each list element
  li.id = pok_id;

  //Creating the new image child node
  let img = document.createElement('img');
  img.src = "resources/images/pokemon/"+stored_number+".png";
  img.alt = pokemon_name;
  img.className = 'dyn-image-item';

  //Creating the new div to hold the pokemon info
  let p_info = document.createElement('div');
  p_info.className = 'pokemon-info';

  //Creating the div child nodes

  let p_id_num = document.createElement('p');
  p_id_num.className = 'id-number';
  p_id_num.appendChild(document.createTextNode("#00"+stored_number));

  let p_name = document.createElement('p');
  p_name.className = 'name';
  p_name.appendChild(document.createTextNode(pokemon_name.charAt(0).toUpperCase() + pokemon_name.slice(1)));

  //Creating the div child node to hold the details of pokemon family
  let p_parent_info = document.createElement('div');
  p_parent_info.className = 'img-text';
  p_parent_info.appendChild(document.createTextNode('Parent: '+(pokemon_data[i][2]).toString()+'- '));
  p_parent_info.appendChild(document.createElement('br'));
  p_parent_info.appendChild(document.createTextNode(' Descendant: '+(pokemon_data[i][3]).toString()));
  
  //Creating the div child node to hold the pokemon talen information
  let p_talent = document.createElement('div');
  p_talent.className = 'talent';

  let p_talent_1 = document.createElement('span');
  p_talent_1.className = 'disp-col-'+(pokemon_data[i][4][0]).toString().toLowerCase();
  p_talent_1.appendChild(document.createTextNode((pokemon_data[i][4][0]).toString()));
  p_talent.appendChild(p_talent_1);

  let p_talent_2 = document.createElement('span');
  p_talent_2.className = 'disp-col-'+(pokemon_data[i][4][1]).toString().toLowerCase();
  p_talent_2.appendChild(document.createTextNode((pokemon_data[i][4][1]).toString()));
  p_talent.appendChild(p_talent_2);

  //Linking all the child nodes of the list element
  li.appendChild(img);
  li.appendChild(p_info);
  p_info.appendChild(p_id_num);
  p_info.appendChild(p_name);
  p_info.appendChild(p_parent_info);
  p_info.appendChild(p_talent);

  return li;
}

//Function to Search by number
function searchByNumber()
{
  //Reset the list element before the Search
  dyn_search_list.replaceChildren();

  //Get the input value from the user
  let ip_number = document.getElementById("pokeno").value;

  //Validate the input number for incorrect range
  let ret_val = validate_getpokeno(ip_number);
  if (ret_val == false)
  {
    clearInput('all');
    return;
  }

  ip_number = Number(ip_number);
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
      
      /*result.push( (result.length + 1) +". Name: " + pokemon_data[i][0].toString() + "; Number: " + stored_number + "; Pokemon-type: " + pokemon_data[i][4][0].toString()
                    + " " + pokemon_data[i][4][1].toString() + "\n\tPokemon Parent: " + pokemon_parent + "; Pokemon Descendant: " + pokemon_desc + "\n");
      */
      
      //Get the new dynamic list element & append to the dynamic list
      let li = getImageElement(i);
      dyn_search_list.appendChild(li);

      pokemon_found = true;
      //Stop processing if there are 5 results
      /*if(result.length == 5)
      {
        break;
      }*/
    }
  }

  if( pokemon_found  == false)
  {
    //Reset the dynamic list element if pokemon is not found
    dyn_search_list.replaceChildren();
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
    //alert( alert_message );
  }

  //Clear the text-box input after the process is done
  clearInput('name');
}

//Function to Search by name
function searchByName()
{
  //Reset the list element before the Search
  dyn_search_list.replaceChildren();

  //Get the input value from the user
  let name = document.getElementById("pokename").value;

  //Validate the input number for incorrect range
  let ret_val = validate_getpokename(name);
  if (ret_val == false)
  {
    clearInput('all');
    return;
  }

  let ip_name = name.toLowerCase();
  let pokemon_found = false;
  let result = []; //This holds the resultant strings to display in alert box

  //Loop through the pokemon data to match the input name
  for (let i = 0; i < pokemon_data.length; i++)
  {
    let stored_name = pokemon_data[i][0].toString().toLowerCase();

    //If the number matches, add to the result array
    if ( stored_name.includes(ip_name) )
    {
      let pokemon_parent = (pokemon_data[i][2].toString()==="") ? "NA" : pokemon_data[i][2].toString();
      let pokemon_desc   = (pokemon_data[i][3].toString()==="") ? "NA" : pokemon_data[i][3].toString();
      
      /*result.push( (result.length + 1) +". Name: " + pokemon_data[i][0].toString() + "; Number: " + ((pokemon_data[i][1]).toString()) + "; Pokemon-type: " + pokemon_data[i][4][0].toString()
                    + " " + pokemon_data[i][4][1].toString() + "\n\tPokemon Parent: " + pokemon_parent + "; Pokemon Descendant: " + pokemon_desc + "\n");
      */

      //Get the new dynamic list element & append to the dynamic list
      let li = getImageElement(i);
      dyn_search_list.appendChild(li);

      pokemon_found = true;

      //Stop processing if there are 5 results
      /*if(result.length == 5)
      {
        break;
      }*/
    }
  }
  
  //Reset the list element if pokemon is not found
  if( pokemon_found  == false)
  {
    //Reset the dynamic list element
    dyn_search_list.replaceChildren();
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
    //alert( alert_message );
  }

  //Clear the text-box input after the process is done
  clearInput('number');
}