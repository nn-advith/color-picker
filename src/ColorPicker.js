import React from "react";
import styled from "styled-components";

const Container = styled.span`
  display: inline-flex;
  align-items: center;
  width: 150px;
  padding: 10px 12px;
  border: ${({ borderColor }) => `1px solid ${borderColor}`};
  border-radius: 4px;
  box-shadow: 2px 5px 8px rgba(0, 0, 0, 0.2);
  margin-top: 60px;

  input[type="color"] {
    border: none;
    background: none;

    margin-right: 5px;

    &::-webkit-color-swatch-wrapper {
      height: 30px;
      width: 30px;
    }

    &::-webkit-color-swatch {
      border: ${({ borderColor }) => `1px solid ${borderColor}`};
      border-radius: 4px;
    }
  }

  input[type="text"] {
    padding: 5px;
    border-radius: 4px;
    border: none;
    width: 100%;
    font-size: 14px;

    &:focus {
      outline: none;
      border: none;
    }
  }
`;

const ColorPicker = ({ value, onChange, borderColor, ...rest }) => {
  return (
    <>
      <Container borderColor={borderColor}>
        <input type="color" value={value} onChange={onChange} {...rest} />
        <input
          type="text"
          value={value}
          maxLength={7}
          onChange={onChange}
          {...rest}
        />
      </Container>
    </>
  );
};

export default ColorPicker;
