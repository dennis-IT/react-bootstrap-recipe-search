import React, { useState } from 'react';
import { Card, Button } from 'react-bootstrap';

import RecipeDetails from './RecipeDetails';

const Recipe = (props) => {
    const [show, setShow] = useState(false);
    const { label, image, url, ingredients } = props.recipe.recipe;

    return (
        <Card className="mb-4 shadow-sm" style={{ width: '18rem' }}>
            <Card.Img
                variant="top"
                src={image} />
            <Card.Body className="d-flex flex-column">
                <Card.Title >{label}</Card.Title>
                <div className="mt-auto">
                    <Card.Text>
                        <a href={url} target="_blank" rel="noopener noreferrer">Go to instructions</a>
                    </Card.Text>
                    <Button variant="secondary">Ingredients</Button>
                </div>
            </Card.Body>
        </Card>
    )
};

export default Recipe;
