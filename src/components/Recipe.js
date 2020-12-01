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
            <Card.Title className="position-absolute title">{label}</Card.Title>
            <Card.Body className="d-flex flex-column">
                <Card.Text>
                    <a href={url} target="_blank" rel="noopener noreferrer">Go to instructions</a>
                </Card.Text>
                <Button variant="secondary" onClick={() => setShow(!show)}>Ingredients</Button>
            </Card.Body>
            {show && <RecipeDetails ingredients={ingredients} />}
        </Card>
    )
};

export default Recipe;
