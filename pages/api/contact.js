// pages/api/contact.js
import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    console.log("ENV EMAIL_USER:", process.env.NEXT_PUBLIC_EMAIL_USER);
    console.log("ENV EMAIL_PASS exists?", !!process.env.NEXT_PUBLIC_EMAIL_PASS);

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.NEXT_PUBLIC_EMAIL_USER,
        pass: process.env.NEXT_PUBLIC_EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.NEXT_PUBLIC_EMAIL_USER,
      subject: `New Contact Message from ${name}`,
      text: message,
      html: `
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong><br/>${message}</p>
      `,
    };

    const info = await transporter.sendMail(mailOptions);
    console.log("Email sent successfully:", info.response);

    return res.status(200).json({ message: "Message sent successfully!" });
  } catch (err) {
    console.error("Nodemailer Error:", err);  // 🔥 This line is key
    return res.status(500).json({ message: "Internal server error" });
  }
}
