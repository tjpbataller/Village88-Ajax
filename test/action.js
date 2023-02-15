$(document).ready(function()
{
    $.get('https://pokeapi.co/api/v2/pokemon/1/',function(data)
    {
        let norm = JSON.stringify(data);
        var view = "<h4>Types</h4><ul>";
        for(let index = 0; index < data.abilities.length; index++)
        {
            view += "<li>" + data.abilities[index].ability.name + "</li>";
        }
        view += "</ul>";
        $("#pokemon").html(view);
    },"json");
});