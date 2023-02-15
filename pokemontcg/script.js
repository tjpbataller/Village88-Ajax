$(document).ready(function()
{   
    let link = "https://api.pokemontcg.io/v2/cards/";
    let images = "";
    for(let index = 1; index <= 100; index++)
    {
        images += `<img class="img img-fluid h-25 w-25" id="ex11-${index}" data-bs-toggle="modal" data-bs-target="#exampleModal" src="https://images.pokemontcg.io/ex11/${index}.png" alt=""></img>`;
    }   
    $("#images").html(images);
    $(".img").on("click",function(){
        $("#modal-body").html("");
        let type = "";
        let pokemonid = $(this).attr("id");
        $.get(link+pokemonid, function(res){
            console.log(res);
            if(res.data.supertype !== "Trainer"){
                for(let index = 0; index < res.data.types.length; index++){ type += `[${res.data.types[index]}]`; }
            }
            let data = `<table><tbody><tr><th>Images</th><td>Small: ${res.data.images.small}</td></tr></tr><td></td><td>Large: ${res.data.images.large}</td></tr><tr><th>Name: </th><td>${res.data.name}</td></tr><tr><th>Types:</th><td>${type}</td></tr><tr><th>HP</th><td>${res.data.hp}</td></tr><tr><th class="pe-5">Evolves From</th><td>${res.data.evolvesFrom}</td></tr></tbody></table>`;
            $("#modal-body").html(data);
        },"json");
    });
});