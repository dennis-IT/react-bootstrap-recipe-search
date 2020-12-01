import React from 'react';
import { v4 as uuidv4 } from 'uuid';

const RecipeDetails = (props) => {
    return props.ingredients.map(ingredient => {
        return (
            <div key={uuidv4()} className="mb-3 px-3">{ingredient.text}<br />Weight: {Math.round(ingredient.weight)}g</div>
        )
    })
}

export default RecipeDetails
