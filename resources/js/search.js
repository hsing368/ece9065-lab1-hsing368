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

function clearInput()
{
  // To-Do Clear based on event
  document.getElementById("pokeno").value = "";
  document.getElementById("pokename").value = "";
}

function searchByNumber()
{
  let ip_number = document.getElementById("pokeno").value;
  let ret_val = validate_getpokeno(ip_number);
  if (ret_val == false)
  {
    clearInput();
    return;
  }

  let pokemon_found = false;
  for (let i = 0; i < pokemon_data.length; i++)
  {
    let stored_number = pokemon_data[i][1];
    console.log(ip_number + " " + stored_number);
    if ( ip_number == stored_number )
    {
      alert("Pokemon match!! " + pokemon_data[i][0]);
      pokemon_found = true;
      // To-Do Display the description of pokemon
      console.log("returning!!");
      clearInput();
      break;
    }
  }

  if( pokemon_found  == false)
  {
    alert("Pokemon not found :( !!");
    clearInput();
    return;
  }
  
}

function searchByName()
{
  console.table(pokemon_data);
  let name = document.getElementById("pokename").value;
  let ret_val = validate_getpokename(name);
  if (ret_val == false)
  {
    clearInput();
    return;
  }

  let ip_name = name.toLowerCase();
  let pokemon_found = false;
  for (let i = 0; i < pokemon_data.length; i++)
  {
    let stored_name = pokemon_data[i][0].toString().toLowerCase();
    if ( ip_name.match(stored_name) )
    {
      alert("Pokemon match!!! " + pokemon_data[i][0]);
      pokemon_found = true;
      console.log("returning");
      clearInput();
      break;
    }
  }

  if( pokemon_found  == false)
  {
    alert("Pokemon not found :( !!");
    clearInput();
    return;
  }
}