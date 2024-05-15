import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState, useRef } from 'react';
import Burguer from "../../assets/img/burger.svg";
import { Container, Imagem, Card, Title, Form, FormLabel, FormInput, ButtonOrder } from "./components/order";

export default function App() {
  const navigate = useNavigate();
  const nameRef = useRef(null);
  const orderRef = useRef(null);
  const [users, setUsers] = useState([]);

  async function addNewOrder() {
    const name = nameRef.current.value;
    const order = orderRef.current.value;

    if (name && order) {
      const newUser = {
        name: name,
        order: order
      };

      try {
        // Enviar os dados para o servidor
        const response = await axios.post("http://localhost:3000/usersOrder", newUser);
        const createdUser = response.data; // Obter os dados do usuário criado no servidor
        setUsers([...users, createdUser]); // Adicionar o usuário criado à lista de usuários no estado do componente
        console.log("Dados do usuário cadastrado:", createdUser);

        // Limpar os campos após adicionar o usuário
        nameRef.current.value = '';
        orderRef.current.value = '';
      } catch (error) {
        console.error("Erro ao cadastrar usuário:", error);
      }
    }
    navigate("/pedidosFeitos")
  }

  return (
    <Container>
      <Imagem src={Burguer} alt="Logo" />
      <Card>
        <Title>Faça seu pedido!</Title>

        <Form>
          <FormLabel>Pedido</FormLabel>
          <FormInput ref={orderRef} type="text" placeholder="1 Coca-Cola, 1-X Salada" />
        </Form>

        <Form>
          <FormLabel>Nome do Cliente</FormLabel>
          <FormInput ref={nameRef} type="text" placeholder="Steve" />
        </Form>

        <ButtonOrder onClick={addNewOrder}>Novo Pedido</ButtonOrder>
      </Card>
    </Container>
  );
}
