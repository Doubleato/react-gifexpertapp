import React from "react";
import GifGridItem from "./GifGridItem";
import {useFetchGifs} from "../hooks/useFetchGifs";
const GifGrid = ({ category }) => {
    
    //Hook personalizado
    const {data:images, loading} = useFetchGifs(category);
    return (
        <>
            <div className="card-grid">
                <h3 className="animate__animated animate__tada">{category}</h3>
                {loading && <p>Loading</p>}
                    {images.map((img) => (
                        <GifGridItem 
                            key={img.id}
                            //De esta manera enviamos
                            //todas las propiedades individualmente
                            {...img}
                        >

                        </GifGridItem>
                    ))}
            </div>
        </>
    );
};

export default GifGrid;
