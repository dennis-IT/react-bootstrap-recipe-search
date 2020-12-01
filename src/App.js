import React, { useState } from 'react';
import Axios from 'axios';
import { v4 as uuidv4 } from 'uuid';

import { Row, Col, Form, Button } from 'react-bootstrap';
import './App.css';
import Recipe from './components/Recipe';
import Alert from './components/Alert';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [alert, setAlert] = useState("");

  const APP_ID = "17f50aee";
  const APP_KEY = "5f899def8c50016e51eb8f126d95a998";
  const URL = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

  const getData = async () => {
    if (query !== "") {
      const result = await Axios.get(URL);
      if (!result.data.more) {
        return setAlert("No recipe with such name");
      }
      console.log(result);
      setRecipes(result.data.hits);
      setAlert("");
      setQuery("");
    } else {
      setAlert("Please fill the box");
    }
  };

  const onChange = (event) => {
    setQuery(event.target.value);
  };


  const onSubmit = (event) => {
    event.preventDefault();
    getData();
  };

  return (
    <div className="container">
      <h1 className="header text-center">Recipe Searching App By React & Bootstrap</h1>
      <div>
        <Row>
          <Col lg={3}>
            <Form className="mb-4" onSubmit={onSubmit}>
              <Form.Group controlId="formBasicSearch">
                {alert !== "" && <Alert alert={alert} />}
                <Form.Label>Keyword:</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Example: steak"
                  autoComplete="off"
                  onChange={onChange}
                  value={query}
                />
                <Form.Text className="text-muted">
                  Please enter your lookup recipe in the box
                </Form.Text>
              </Form.Group>
              <Button
                variant="secondary"
                type="submit">Search</Button>
            </Form>
          </Col>
          <Col lg={9}>
            <Row>
              {recipes !== [] && recipes.map(recipe => {
                return (
                  <Col sm={4} className="d-flex" key={uuidv4()}>
                    <Recipe
                      recipe={recipe}
                    />
                  </Col>
                )
              })}
            </Row>
          </Col>
        </Row>
      </div>
    </div>
  )
};

export default App;
