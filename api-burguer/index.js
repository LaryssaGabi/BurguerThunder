const express = require('express')
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');

const server = express()
const port = 3000
server.use(express.json())
server.use(cors());

const prisma = new PrismaClient();

// Middleware para verificar se o ID do usuário existe
const checkUserId = async (req, res, next) => {
    const { id } = req.params;

    const user = await prisma.userOrder.findUnique({
        where: { id }
    });

    if (!user) {
        return res.status(404).json({ message: "User not found" });
    }
    req.user = user;

    next();
};

// Rotas
server.get('/usersOrder', async (req, res) => {
    const usersOrder = await prisma.userOrder.findMany();
    return res.json(usersOrder);
});

server.post('/usersOrder', async (req, res) => {
    const { name, order } = req.body;
    const newUserOrder = await prisma.userOrder.create({
        data: { name, order }
    });
    return res.status(201).json(newUserOrder);
});

server.put('/usersOrder/:id', checkUserId, async (req, res) => {
    const { name, order } = req.body;
    const { id } = req.params;
    const updatedOrder = await prisma.userOrder.update({
        where: { id },
        data: { name, order }
    });
    return res.json(updatedOrder);
});

server.delete('/usersOrder/:id', checkUserId, async (req, res) => {
    const { id } = req.params;
    await prisma.userOrder.delete({
        where: { id }
    });
    return res.status(200).json({ message: "Sucesso Delete" });
});

server.listen(port, () => console.log(`Server is running on port ${port}!`))
