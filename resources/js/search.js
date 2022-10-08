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

      let stored_number = (pokemon_data[i][1]).toString();
      let class_name = "item"+stored_number;
      let pokemon_name = pokemon_data[i][0].toString().toLowerCase();
    
      let li = document.createElement('li');
      li.className = 'image-item';
      li.id = class_name;
    
      let img = document.createElement('img');
      img.src = "resources/images/pokemon/"+stored_number+".png";
      img.alt = pokemon_name;
          
      //console.log(li);
      //console.log(img);
      let p_info = document.createElement('div');
      p_info.className = 'pokemon-info';
    
      let p_id_num = document.createElement('p');
      p_id_num.appendChild(document.createTextNode("#00"+stored_number));
    
      let p_name = document.createElement('p');
      p_name.className = 'name';
      p_name.appendChild(document.createTextNode(pokemon_name));
    
      let p_parent_info = document.createElement('div');
      p_parent_info.appendChild(document.createTextNode('Parent: '+(pokemon_data[i][2]).toString()+'- '));
      p_parent_info.appendChild(document.createElement('br'));
      p_parent_info.appendChild(document.createTextNode(' Descendant: '+(pokemon_data[i][3]).toString()));
      
      let p_talent = document.createElement('div');
      p_talent.className = 'talent';
    
      let p_talent_1 = document.createElement('span');
      p_talent_1.appendChild(document.createTextNode((pokemon_data[i][4][0]).toString()));
      p_talent.appendChild(p_talent_1);
    
      let p_talent_2 = document.createElement('span');
      p_talent_2.appendChild(document.createTextNode((pokemon_data[i][4][1]).toString()));
      p_talent.appendChild(p_talent_2);
    
      li.appendChild(img);
      li.appendChild(p_info);
      p_info.appendChild(p_id_num);
      p_info.appendChild(p_name);
      p_info.appendChild(p_parent_info);
      p_info.appendChild(p_talent);

      dyn_search_list.appendChild(li);

      pokemon_found = true;
      
      //Stop processing if there are 5 results
      /*if(result.length == 5)
      {
        break;
      }*/
    }
  }

  //console.log(result);
  if( pokemon_found  == false)
  {
    //alert("Pokemon not found :( !!");
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
      
      /*result.push( (result.length + 1) +". Name: " + pokemon_data[i][0].toString() + "; Number: " + ((pokemon_data[i][1]).toString()) + "; Pokemon-type: " + pokemon_data[i][4][0].toString()
                    + " " + pokemon_data[i][4][1].toString() + "\n\tPokemon Parent: " + pokemon_parent + "; Pokemon Descendant: " + pokemon_desc + "\n");
      */

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
    //alert("Pokemon not found :( !!");
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
  clearInput();
}