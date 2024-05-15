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


export const ContainerItens = styled.div`
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



export const ButtonBack = styled.button`
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
  margin-top: 40px;
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4);
  transition: box-shadow 0.3s ease;

  &:hover,
  &:focus {
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.7);
    background: rgb(0, 0, 0);
  }
`;



export const User = styled.li`
     display: flex;
    justify-content: space-around;
    align-items: center;
    width: 342px;
    height: 58px;
    background: rgba(255, 255, 255, 0.25);
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 14px;
    border: none;
    outline: none;
    margin-top: 20px;
  

 p{
    padding-left: 25px;
    font-style: normal;
    font-weight: normal;
    line-height: 28px;
    color: #000;
 }

 button{
    background: none;
    border: none;
    cursor: pointer;
 }
`

