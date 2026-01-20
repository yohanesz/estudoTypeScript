export async function getAllUsers() {
    const response = await fetch("http://localhost:3333/users");
    const data = await response.json();
    return data;
}

export async function getUsers(name) {
    const response = await getAllUsers();
    const users = await response.filter(u => {
        return u.name.includes(name);
    });
    return users.json();
}


