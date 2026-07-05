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
      to: process.env.EMAIL_RECEIVER,
      subject: `Nomination of Students from ${schoolName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
          <title>New Nomination</title>
        </head>
        <body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f4f4f5; margin: 0; padding: 40px 20px;">
          <div style="max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
            <div style="background-color: #18181b; padding: 32px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 600; letter-spacing: -0.5px;">The People's Prize</h1>
              <p style="color: #a1a1aa; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; letter-spacing: 1px;">New Nomination Received</p>
            </div>
            <div style="padding: 40px;">
              <div style="margin-bottom: 32px; padding-bottom: 24px; border-bottom: 1px solid #e4e4e7;">
                <h2 style="font-size: 14px; color: #71717a; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 8px 0;">School Details</h2>
                <p style="margin: 0 0 12px 0; font-size: 18px; color: #18181b; font-weight: 500;">${schoolName}</p>
                <p style="margin: 0; font-size: 16px; color: #52525b;">
                  <span style="display: inline-block; padding: 4px 12px; background-color: #f4f4f5; border-radius: 9999px; font-size: 14px;">📞 ${contactNo}</span>
                </p>
              </div>
              
              <div>
                <h2 style="font-size: 14px; color: #71717a; text-transform: uppercase; letter-spacing: 1px; margin: 0 0 16px 0;">Nominees</h2>
                <div style="background-color: #fafafa; border: 1px solid #e4e4e7; border-radius: 8px; padding: 24px;">
                  <p style="margin: 0; font-size: 16px; color: #3f3f46; line-height: 1.6;">${nominees.replace(/\n/g, '<br/>')}</p>
                </div>
              </div>
            </div>
            <div style="background-color: #fafafa; padding: 20px; text-align: center; border-top: 1px solid #e4e4e7;">
            </div>
          </div>
        </body>
        </html>
      `
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
