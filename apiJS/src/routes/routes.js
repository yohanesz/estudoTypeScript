import express from "express";
import { listUsers, getUsersByName } from "../controllers/controller.js";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("main page");
});

router.get("/teste", (req,res) => res.send("teste"));

router.get("/getUsuarios", listUsers);
router.get("/getUsuario", getUsersByName); 

export default router;