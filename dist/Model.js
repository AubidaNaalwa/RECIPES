class Model {
    constructor() {



    }
    getRecipe(ingredient) {
        return $.get(`/recipes/${ingredient}`, function (recipes) {
            return recipes
        })
    }
}