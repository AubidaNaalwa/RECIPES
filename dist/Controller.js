class Controller{
    constructor(){
        this.model = new Model()
        this.view = new View()
    }

    getRecipes(ingredient){
        this.model.getRecipe(ingredient).then(data => this.view.render(data))
    }
}