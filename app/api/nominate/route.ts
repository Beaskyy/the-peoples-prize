import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { schoolName, contactNo, nominees } = body;

    // Validate inputs
    if (!schoolName || !contactNo || !nominees) {
      return NextResponse.json(
        { error: "Missing required fields." },
        { status: 400 }
      );
    }

    // --- EMAIL SIMULATION ---
    console.log("=========================================");
    console.log("🔔 NEW STUDENT NOMINATION RECEIVED");
    console.log("=========================================");
    console.log(`School: ${schoolName}`);
    console.log(`Contact No: ${contactNo}`);
    console.log(`Nominees:\n${nominees}`);
    console.log("=========================================");
    console.log("To send an actual email, integrate with Resend/Nodemailer here.");

    // Send email using Nodemailer
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: 'akintobiafeez374@gmail.com',
      subject: `New Nomination from ${schoolName}`,
      html: `<p><strong>School:</strong> ${schoolName}</p>
             <p><strong>Contact:</strong> ${contactNo}</p>
             <p><strong>Nominees:</strong><br/>${nominees.replace(/\n/g, '<br/>')}</p>`
    });
    
    console.log("Email sent successfully via Nodemailer!");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing nomination:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
