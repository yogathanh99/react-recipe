import React from 'react';
import styled from 'styled-components';

const FormInput = styled.input`
  background: transparent;
  border: 0;
  border-bottom: solid 2px #2c3e50;
  margin-right: 10px;
  letter-spacing: 2px;
  width: 10%;
  padding: 0.4rem;

  &[type='text'] {
    outline: none;
  }

  &:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 30px #f3f3f3 inset;
    -webkit-text-fill-color: #2c3e50 !important;
  }
`;

const FormButton = styled.button`
  border: solid 2px #e74c3c;
  background: transparent;
  padding: 0.2rem 0.9rem;
  margin: 0 0.2rem;
  border-radius: 1px;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;
  margin-left: 0.7rem;
`;

const Form = props => {
  const { getRecipe, value, handleChange } = props;
  return (
    <form onSubmit={getRecipe}>
      <FormInput
        type='text'
        placeholder='Input here'
        value={value}
        onChange={handleChange}
      />
      <FormButton>Search</FormButton>
    </form>
  );
};

export default Form;
