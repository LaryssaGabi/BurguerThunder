import React, { useState, useEffect } from "react";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import BurgerPedido from "../../assets/img/burgerEntrega.svg";
import { Container, Imagem, ContainerItens, Title, ButtonBack } from "./components/orderPedido";
import CadastrarUsers from "./components/pedidosListado";

export default function Pedidos() {

    const [users, setUsers] = useState([]);
    const navigate = useNavigate()

    useEffect(() => {
        async function fetchUsers() {
            try {
                const response = await axios.get("http://localhost:3000/usersOrder");
                setUsers(response.data);
            } catch (error) {
                console.error("Erro ao buscar usuários:", error);
            }
        }

        fetchUsers();
    }, []);  // Executa apenas uma vez quando o componente é montado

    function goBackPage() {
        navigate('/')
    }


    return (
        <Container>
            <Imagem src={BurgerPedido} alt="Burger Pedido" />
            <ContainerItens>
                <Title>Pedidos Feitos</Title>
                {users.length > 0 && <CadastrarUsers users={users} setUsers={setUsers} />}
                <ButtonBack onClick={goBackPage}> Voltar </ButtonBack>
            </ContainerItens>
        </Container>
    );
}