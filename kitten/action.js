$(document).ready(function()
{
    $.get("https://fakerapi.it/api/v1/images?_quantity=100&_type=kittens",function(res)
    {
        let view = "";
        for(let index = 0; index < res.data.length; index++)
        {
            view += `<div class="col"><div class="card h-75 w-50"><img src="${res.data[index].url}" class="card-img-top h-50 img-thumbnail" alt="photo of ${res.data[index].title}"><div class="card-body"><h5 class="card-title">${res.data[index].title}</h5><p class="card-text">${res.data[index].description}</p></div></div></div>`;
        }
        $("#kittens").html(view);
    },"json");
});