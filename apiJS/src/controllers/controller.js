import { getAllUsers, getUsers } from "../model/model.js";

export async function listUsers(req, res) {
    try {
        const data = await getAllUsers();
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: 'Erro ao buscar usuários'});
    }
}

export async function getUsersByName(req, res) {
  try {
    const name = req.query.name;
    const data = await getUsers(name);
    res.json(data);
  } catch (error) {
    res.status(500).json({ message: 'Erro ao buscar usuário específico' });
  }
}



