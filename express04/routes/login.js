const express = require("express");
const router = express.Router();
const db = require("../db");

router.get("/", (req, res) => {
    res.render("login", { error: null });
});

router.post("/", (req, res) => {
    const { username, password } = req.body;
    const sql = "SELECT * FROM users WHERE username = ? AND password = ?";

    db.query(sql, [username, password], (err, results) => {
        if (err) throw err;
        if (results.length > 0) {
            req.session.user = results[0];
            res.redirect("/");
        } else {
            res.render("login", { error: "Username atau Password salah!" });
        }
    });
});

router.get("/logout", (req, res) => {
    req.session.destroy();
    res.redirect("/");
});

module.exports = router;
