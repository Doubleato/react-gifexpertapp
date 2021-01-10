import React, { useState } from "react";
import PropTypes from "prop-types";
function AddCategory({ setCategories }) {
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if(inputValue.trim().length > 2){
            //usamos la funcion de callback para poder acceder
            //al ultimo estado de las categories y de esta manera
            //poder meter los nuevos datos en este scope
            setCategories(lastState => [inputValue, ...lastState]);
            setInputValue("");
        }
        
    };

    return (
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
            />
        </form>
    );
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired
}

export default AddCategory;
