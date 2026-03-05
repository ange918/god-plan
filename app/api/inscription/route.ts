import nodemailer from 'nodemailer';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { nom, email, telephone, formation, message } = body;

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: 'Grafickexpressservices20188@gmail.com',
      subject: `Nouvelle inscription : ${formation}`,
      text: `
        Nouvelle demande d'inscription reçue :
        
        Nom complet : ${nom}
        Email : ${email}
        Téléphone : ${telephone}
        Formation choisie : ${formation}
        Message complémentaire : ${message || 'Aucun'}
      `,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ message: 'Email envoyé avec succès' }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Erreur Nodemailer:', error);
    return new Response(JSON.stringify({ error: "Erreur lors de l'envoi de l'email" }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
