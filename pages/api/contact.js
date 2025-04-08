// // pages/api/contact.ts
// import { NextApiRequest, NextApiResponse } from 'next';
// import nodemailer from 'nodemailer';

// export default async function handler(req: NextApiRequest, res: NextApiResponse) {
//   if (req.method !== 'POST') {
//     return res.status(405).json({ message: 'Method not allowed' });
//   }

//   const { name, email, message } = req.body;

//   if (!name || !email || !message) {
//     return res.status(400).json({ message: 'Missing required fields' });
//   }

//   try {
//     const transporter = nodemailer.createTransport({
//       service: 'gmail',
//       auth: {
//         user: process.env.NEXT_PUBLIC_EMAIL_USER, // your Gmail
//         pass: process.env.NEXT_PUBLIC_EMAIL_PASS, // app-specific password
//       },
//     });

//     await transporter.sendMail({
//       from: email,
//       to: process.env.EMAIL_USER,
//       subject: `New Collab Request from ${name}`,
//       html: `
//         <p><strong>Name:</strong> ${name}</p>
//         <p><strong>Email:</strong> ${email}</p>
//         <p><strong>Message:</strong><br>${message}</p>
//       `,
//     });

//     return res.status(200).json({ message: 'Email sent successfully' });
//   } catch (error) {
//     console.error(error);
//     return res.status(500).json({ message: 'Error sending email' });
//   }
// }
