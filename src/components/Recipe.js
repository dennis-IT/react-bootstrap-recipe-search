import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import RecipeDetails from './RecipeDetails';

const Recipe = (props) => {
    const [show, setShow] = useState(false);
    const { label, image, url, ingredients } = props.recipe.recipe;

    return (
        <Card className="mb-4">
            <Card.Img variant="top" src={image} />
            <Card.Body>
                <Card.Title>{label}</Card.Title>
                <Card.Text>
                    <a href={url} target="_blank" rel="noopener noreferrer">Instruction Details</a>
                </Card.Text>
                <Button variant="secondary">Ingredients</Button>
            </Card.Body>
        </Card>
    )
};

export default Recipe;
