import { useState } from 'react';
import React from 'react'
import { AddCategory } from './components/AddCategory';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch', 'Dragon Ball']);
    const onAddCategory = (newCategory) => {
        console.log(newCategory);
        // categories.push(newCategory);

        setCategories([newCategory, ...categories]);
        // const onAddCategory = () => setCategories(cat => [...cat, "Valorant"]);
    }
    console.log(categories);

    return (
        <>
            {/* titulo */}
            <h1>GifExpertApp</h1>

            {/* input */}
            <AddCategory
                // setCategories={setCategories}
                onNewCategory={event => onAddCategory(event)}
            />
            {/* listado gif */}
            <ol>
                {categories.map(category => {
                    return <li key={category}>{category}</li>
                })}
                {/* <li>ABC</li> */}
            </ol>
            {/* Gif item */}
        </>
    )
}
