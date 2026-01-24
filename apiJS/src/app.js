import express from "express";
import routes from "./routes/routes.js"

const app = express();

app.use("/", routes);

app.listen(3200, () => console.log("rodando na porta 3200"));

const getData = () => {
    return new Promise((resolv, reject) => {
        resolv('Dados aqui');
        reject('Erro aqui');
    })
}

getData()
    .then(value => console.log(value))
    .catch(error => console.log(error))


console.log(user)
console.log({ user })