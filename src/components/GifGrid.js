import React, { Fragment} from 'react'
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGridItem } from './GifGridItem';

export const GifGrid = ({ category }) => {

    const { data: images, loading } = useFetchGifs(category);
         
    return (
        <Fragment>
            <h1 className="category-title animate__animated animate__backInRight">{category}</h1>
            <div className="card-grid">
                    {loading && 'Loading...'} 
                    {
                        
                        images.map((img) => (
                            <GifGridItem
                                key={img.id}
                                {...img}
                            />
                        ))
                    }
            </div>
        </Fragment>
    )
}
