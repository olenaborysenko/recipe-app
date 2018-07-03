// Global app controller
import axios from 'axios';

async function getResults(query) {
    const proxy = 'https://cors-anywhere.herokuapp.com/'
    const key = 'b604c0a01e6dce4f36198561a14cd25a';
    try {
        const res = await axios(`${proxy}http://food2fork.com/api/search?key=${key}&q=${query}`);
        const recipes = res.data.recipes;
        console.log(recipes);
    } catch (error) {
        alert(error);
    }
}
getResults('pizza');