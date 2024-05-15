import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 40px;
    height: 100%;
    min-height: 100vh;
    background-color: #000;
`


export const Imagem = styled.img`
    margin-top: 40px;
`


export const Card = styled.div`
  background: rgba(254, 254, 254, 0.6);
  border-radius: 15px; 
  padding: 30px 36px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`


export const Title = styled.h1`
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 34px;
  line-height: 40px;
  text-align: center;
  margin-bottom: 20px;
`


export const Form = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 20px;
  width: 100%;
`


export const FormLabel = styled.label`
  margin-left:  9px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 22px;
  margin-bottom: 8px;
`


export const FormInput = styled.input`
  width: 342px;
  height: 58px;
  background: rgba(255, 255, 255, 0.25);
  border-radius: 14px;
  border: none;
  outline: none;
  padding-left:  9px;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 300;
  font-size: 18px;
  line-height: 21px;
`


export const ButtonOrder = styled.button`
  width: 342px;
  height: 68px;
  background: #D93856;
  border: none;
  outline: none;
  font-family: 'Roboto';
  font-style: normal;
  font-weight: 900;
  font-size: 17px;
  line-height: 2px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.7);
  }
`