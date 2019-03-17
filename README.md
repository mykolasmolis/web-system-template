# WEB system
- [ ] Recipes with Yummly API

## Description
- [ ] Provides recipes for casual user.

## Recipe
    ID: Recipe ID, mandatory (number, 0 < ID < 100)
    Name: Recipe name, mandatory (String < 100 characters)
    Description: Recipe description, mandatory (String < 255 characters)
    Recipe: The recipe itself, (String < 1000 characters)
    Products: Products, (Array, size = 100)
    Time: Cook time, (String < 5 chars)
    Portion: For how many people it is, (String < 5 chars)
    Cuisine: What cuisine the recipe is for, mandatory (String < 10 chars)


## API
    Get a recipe by its ID. Method GET, /v1/recipe/{id}
    Get recipe list by their cuisine. Method GET, /v1/recipes
    Create a new recipe. Method POST, v1/recipe
    Edit a recipe, Method PUT, /v1/recipe{id}
    Delete a recipte. Method DELETE, /v1/recipe{id}


## UI definition
    Two windows:
    - Second:
        A single recipe view,
        New: create new recipe,
        Delete: delete a recipe
    - First:
        A recept list view,
        Search: get a recipe
        Create: opens second window, with empty fields, except for ID
        Delete: delete a recipe
        Edit: edits a recipe, opens second windows with filled field which you can edit.

        Link to wireframe :https://bit.ly/2XZO8Bk
