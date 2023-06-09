import { useState } from 'react';
import { AddCategory, GifGrid } from './components';

export const GifExpertApp = () => {

    const [categories, setCategories] = useState(['One Punch']);
    const onAddCategory = (newCategory) => {
        // console.log(newCategory);
        // categories.push(newCategory);

        setCategories([newCategory, ...categories]);
        // const onAddCategory = () => setCategories(cat => [...cat, "Valorant"]);
    }
    // console.log(categories);

    return (
        <>
            <h1>GifExpertApp</h1>

            <AddCategory
                onNewCategory={event => onAddCategory(event)}
            />
            {
                categories.map(category => (
                    <GifGrid
                        key={category}
                        category={category}
                    />
                ))
            }
        </>
    )
}
