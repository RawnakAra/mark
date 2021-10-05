const getIDs =async() =>
 new Promise((resolve, reject) => {
   setTimeout(async() => {
   resolve ([532, 543, 753, 1, 5]);}, 1500);
 });

 const getRecipe = async (recipeID) => {
    return new Promise((resolve, reject) => {
    setTimeout(
    (ID) => {
    const recipe = {
    title: "Fresh tomato pasta",
    publisher: "Pinchas Hodadad",
    };
    resolve(`${ID}: ${recipe.title}`); },1500, recipeID );
    });
   };
 async function print(){
       const IDs = await getIDs()
       const recipe = await getRecipe(IDs[2])
    console.log(IDs);
    console.log(recipe)
    
}  
catch(error){
    console.log(error)
}
print()
//    getIDs().then((IDs) => {
//    console.log(IDs);
//    return getRecipe(IDs[2]);
//    })
//    .then((recipe) => {
//    console.log(recipe);
//    })
//    .catch((error) => {
//    console.log("It is an error!");
//    });
