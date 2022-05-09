const router = require("express").Router();
const db = require("../db/db")

// registrar a usuario
router.post("/register", async (req, res) => {
	try {
		// a) destructurar el request

		const { nombres, apellidos, rut, email, contrasena, trabaja_desde_fecha} = req.body;

		// b) revisar si ya existe

		const user = await db.query("SELECT * FROM Logins WHERE email = $1", [
			email
		]);

		if(user.rows.length != 0) {
			return res.status(401).send("Usuario ya se encuentra registrado")
		}

		// c) bcrypt la contraseña

		// d) ingresar al nuevo usario a la BD

		// e) generar el token JWT
	} catch (err) {
		console.error(err.message);
		res.status(500).send("Server Error");
	}
} )

module.exports = router;