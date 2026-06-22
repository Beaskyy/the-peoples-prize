import { NextResponse } from "next/server";

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

    // TODO: Actually send an email using Resend, Nodemailer, etc.
    // Example with Resend:
    /*
    import { Resend } from 'resend';
    const resend = new Resend(process.env.RESEND_API_KEY);
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'thepeoplesprize@gmail.com',
      subject: `New Nomination from ${schoolName}`,
      html: `<p><strong>School:</strong> ${schoolName}</p>
             <p><strong>Contact:</strong> ${contactNo}</p>
             <p><strong>Nominees:</strong><br/>${nominees.replace(/\n/g, '<br/>')}</p>`
    });
    */

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error processing nomination:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
