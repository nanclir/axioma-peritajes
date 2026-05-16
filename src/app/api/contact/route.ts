import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { empresa, contacto, email, asunto, mensaje } = await request.json();

    // Configurar el transportador SMTP
    // Se recomienda usar variables de entorno para esto en producción (.env.local)
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com', // Por defecto Google Workspace
      port: 465,
      secure: true,
      auth: {
        user: process.env.SMTP_USER, // Ej: contacto@acumeningenieria.com
        pass: process.env.SMTP_PASS, // Contraseña de aplicación
      },
    });

    const mailOptions = {
      from: process.env.SMTP_USER,
      to: 'contacto@acumeningenieria.com', // El correo que recibirá los mensajes (puede ser direccion@)
      subject: `Nuevo requerimiento web: ${asunto} - ${empresa}`,
      html: `
        <h2>Nuevo contacto desde la web de ACUMEN</h2>
        <p><strong>Empresa:</strong> ${empresa}</p>
        <p><strong>Contacto:</strong> ${contacto}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Asunto:</strong> ${asunto}</p>
        <br/>
        <h3>Detalles del requerimiento:</h3>
        <p>${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Mensaje enviado exitosamente' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error enviando correo:', error);
    return NextResponse.json(
      { message: 'Error al enviar el mensaje' },
      { status: 500 }
    );
  }
}
