//calss View for now it have just one function rendering data and
//the time will come that this class is will be more important than rendring data 

class View{
    constructor(){
        this.recipeSource = $('#recipeTemplate').html();
        this.recipeTmplate = Handlebars.compile(this.recipeSource);
    }
    render(recipes){
        const newHTML = this.recipeTmplate({ recipes });
        $('#recipeContainer').empty().append(newHTML);
    }
} 