import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const RecipesWrapper = styled.div`
  background: #fff;
  padding-bottom: 2rem;
  border-radius: 5px;
  box-shadow: -1px 2px 34px -13px rgba(0, 0, 0, 0.75);
  text-align: left;
  overflow: hidden;
`;

const RecipesButton = styled.button`
  border: solid 2px #e74c3c;
  background: transparent;
  padding: 0.4rem 0.6rem;
  margin: 0 0.2rem;
  border-radius: 1px;
  font-size: 0.8rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 0.7rem;
`;

const RecipesText = styled.div`
  margin-left: 15px;
`;

const RecipesTitle = styled.h5`
  color: #e74c3c;
  text-transform: uppercase;
  font-size: 1.1rem;
  padding: 1.8rem 0 0.2rem 0;
`;

const RecipesSubtitle = styled.p`
  text-transform: uppercase;
  font-weight: 600;
  font-size: 0.8rem;
  letter-spacing: 2px;

  > span {
    text-transform: none;
    font-weight: 400;
    font-size: 0.8rem;
    letter-spacing: 1px;
  }
`;

const Recipes = props => {
  const { recipes } = props;
  return (
    <div className='container'>
      <div className='row'>
        {recipes.map(recipe => (
          <div
            key={recipe.title}
            className='col-md-4'
            style={{ marginBottom: '2rem' }}
          >
            <RecipesWrapper>
              <img src={recipe.image_url} alt={recipe.title} />
              <RecipesText>
                <RecipesTitle>
                  {recipe.title.length < 20
                    ? `${recipe.title}`
                    : `${recipe.title.substring(0, 25)}...`}
                </RecipesTitle>
                <RecipesSubtitle>
                  Publisher: <span>{recipe.publisher}</span>
                </RecipesSubtitle>
              </RecipesText>
              <RecipesButton>
                <Link
                  to={{
                    pathname: `/recipe/${recipe.recipe_id}`,
                    state: { recipe: recipe.title },
                  }}
                >
                  View Recipe
                </Link>
              </RecipesButton>
            </RecipesWrapper>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
