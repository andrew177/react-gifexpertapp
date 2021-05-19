
import React, {useState} from 'react';
import { AddCategory } from './AddCategory';
import { GifGrid } from './GifGrid';


const GifExpertApp = () =>{

    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball'];
    const [categories , setCategories] = useState(['One Punch']);

    // const handleAdd = () =>{
     
        //mantenemos las categorías anteriores y agregamos una nueva
        // setCategories(['HunterxHunter',...categories ]);
        // setCategories(cats => [...cats, 'HunterxHunter'])
    // }

    return (
        <div>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={setCategories}/>
            <hr></hr>

            {/* <button onClick={handleAdd}>Agregar</button> */}

            <ol>
                {
                    categories.map(category =>
                        <GifGrid
                            key ={category}
                            category={category}
                         
                          />
                     )
                }

            </ol>
            
        </div>
    )

}

export default GifExpertApp;