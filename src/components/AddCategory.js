import React, { useState } from 'react'
import PropTypes from 'prop-types'




//setCategories se recibe de las propiedades del componente en el archivo GifExpertApp
export const AddCategory = ({setCategories}) => {

    const [inputValue, setInputValue] = useState('')


    const handleInputChange = (e) =>{
        setInputValue(e.target.value)
    }

    const handleSubmit = (e) =>{
        //comportamiento por defecto del formulario
        e.preventDefault();
        if(inputValue.trim().length > 2){
             //agregamos una nueva categoria despues de las categorias anteriores ...c, con lo que haya en nuestra caja de texto
            setCategories( (c) => [inputValue, ...c]);
            setInputValue('');
        }
       
    }


    return (
           <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputValue}
                    onChange={handleInputChange}

                />
           </form>
    )
}


AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired
};
