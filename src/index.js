const express = require('express');
const nodemailer = require('nodemailer');
const cors = require('cors')
require('dotenv').config();

const app = express();
const port = 3000;

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json()); 

// Configurar el transporter (proveedor de correo)
const transporter = nodemailer.createTransport({
  service: process.env.SERVICE,
  auth: {
    user: process.env.USER,
    pass: process.env.PASS,
  },
});

app.post('/enviar-correo', async (req, res) => {
    console.log(req.body);
    const mailOptions = {
      from: 'xeyek26129@wenkuu.com',
      to: req.body.email,
      subject: '¡Bienvenido!',
      html: `
        <div style="text-align: center;">
          <img src="https://i.imgur.com/e8BvpK2.png" alt="Imagen" style="display: block; margin: 0 auto; width: 300px;">
          <h2 style="color: #333;">Bienvenido ${req.body.email}</h2>
        </div>
      `,
    };

  // Envía el correo
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      res.status(500).send('Error al enviar el correo');
    } else {
      console.log('Correo enviado: ' + info.response);
      res.status(200).send('Correo enviado correctamente');
    }
  });
});

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor corriendo en http://localhost:${port}`);
});
