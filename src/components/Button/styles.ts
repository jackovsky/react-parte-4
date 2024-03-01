import styled from "styled-components";


export const ButtonContainer = styled.button`
    
    width: 100%;
    height: 42px;
    background-color: #81259D;
    color: #FFF;

    border: 1px solid #81259D;
    border-radius: 21px;

    &:disabled {
        display: ${(props) => (props.disabled === true ? "disabled" : "inset")};
        opacity: ${(props) => (props.disabled === true ? "0.4" : "1")};
      }
      &:hover {
        opacity: ${(props) => (props.disabled === true ? "0.4" : "0.6")};
        cursor: ${(props) => (props.disabled === true ? "none" : "pointer")};
      }
    `;



