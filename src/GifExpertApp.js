import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import GifGrid from "./components/GifGrid";
const initialState = ["Dogs"];
const GifExpertApp = () => {
    const [categories, setCategories] = useState(initialState);
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories = {setCategories}></AddCategory>
            <hr></hr>
            <ol>
                {
                    //Se necesita una expresión que retorne algo
                    categories.map((category) => (
                        <GifGrid
                        key={category} 
                        category={category}></GifGrid>
                    ))
                }
            </ol>
        </>
    );
};

export default GifExpertApp;
