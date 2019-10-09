import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const API_KEY = process.env.REACT_APP_APIKEY;

const Wrapper = styled.div`
  margin: 0 auto;
  width: 60%;
`;

const Img = styled.img`
  height: 500px !important;
`;

const Title = styled.h3`
  text-transform: uppercase;
  letter-spacing: 2px;
  margin: 1rem 0;
`;

const Button = styled.button`
  border: solid 2px #e74c3c;
  background: transparent;
  padding: 0.2rem 0.9rem;
  margin: 0 0.2rem;
  border-radius: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
`;

const Publisher = styled.h4`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  > span {
    text-transform: none;
    font-weight: 300;
    letter-spacing: 2px;
    margin-left: 5px;
  }
`;

const Website = styled.p`
  text-transform: uppercase;
  font-size: 1.2rem;
  margin-bottom: 1rem;

  > span {
    text-transform: lowercase;
    font-weight: 300;
    letter-spacing: 2px;
    color: #e74c3c;
    margin-left: 10px;
  }
`;

const Recipe = props => {
  const [activeRecipe, setActiveRecipe] = useState([]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const fetchData = async () => {
    const title = props.location.state.recipe;
    const res = await axios.get(
      `https://cors-anywhere.herokuapp.com/http://food2fork.com/api/search?key=${API_KEY}&q=${title}`,
    );

    setActiveRecipe(res.data.recipes[0]);
  };

  useEffect(() => {
    fetchData();
  }, [fetchData]);
  return (
    <div className='container'>
      {activeRecipe.length !== 0 && (
        <Wrapper>
          <Img src={activeRecipe.image_url} alt={activeRecipe.title} />
          <Title>{activeRecipe.title}</Title>
          <Publisher>
            Publisher: <span>{activeRecipe.publisher}</span>
          </Publisher>
          <Website>
            Website:
            <span>
              <a href={activeRecipe.publisher_url}>
                {activeRecipe.publisher_url}
              </a>
            </span>
          </Website>
          <Button>
            <Link to='/'>Go Home</Link>
          </Button>
        </Wrapper>
      )}
    </div>
  );
};

export default Recipe;
