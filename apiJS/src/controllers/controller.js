import users from '../../data.json';

export function getUsers(req, res) {
    res.json(users);
}