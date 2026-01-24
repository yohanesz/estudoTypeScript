export async function getAllUsers() {
    const response = await fetch("http://localhost:3333/users");
    const data = await response.json();
    return data;
}

export async function getUsers(name) {
    const users = await getAllUsers();

    return users.filter(user =>
        user.name.toLowerCase().includes(name.toLowerCase())
    );
}



