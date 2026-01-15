import express from "express";

const router = express.Router();

router.get("/", (req, res) => {
    res.send("main page");
});

router.get("/teste", (req,res) => res.send("teste"));

export default router;