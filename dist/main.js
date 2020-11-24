//initilaize all the MVC elements to Seprate Concerns and to be a GOOD PROGRAMMER 
const controller = new Controller()


$('button').on('click', function () {
    const ingredient = $('input').val()
    if(!ingredient){
        alert("the search TEXT is Empty ")
        return 
    }

    controller.getRecipes(ingredient)  
})

$(`#recipeContainer`).on(`click`,`img`,function(){

    alert($(this).siblings('.ingrediantContainer').find('ul').find('li').html())
})