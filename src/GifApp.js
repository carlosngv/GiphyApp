import React, { useState } from 'react';
import { AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';
const GifApp = ({ defaultCategory = [] }) => {

    const [categories, setCategories] = useState(defaultCategory);

    return (
        <>
            <h1 className="title is-1">Gif Search</h1>
            <AddCategory setCategories={setCategories} />
            <hr />
            {
                categories.map((category) => {
                    return (
                        <GifGrid
                            key={category}
                            category={category}
                        />
                    );
                })
            }
        </>
    );
}

export default GifApp;