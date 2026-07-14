import { NextResponse } from "next/server";
import { supabaseServer } from "@/lib/supabase-server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
export async function POST(request: Request) {
  try {
    const body = await request.json();

      ///console.log("================================");
      ///console.log("Received body:", body);
     /// console.log("================================");    

    const {
      fullName,
      email,
      phone,
      company,
      location,
      startDate,
    } = body;

      ///console.log("Checking email:", email);

    const { data: existingBooking, error: checkError } = await supabaseServer
      .from("bookings")
      .select("id")
      .eq("email", email);

    ///console.log("Existing booking:", existingBooking);
    console.log("Check error:", checkError);

    if (existingBooking && existingBooking.length > 0) {
      return NextResponse.json({
        success: false,
        message:
          "A booking request already exists with this email. Our team will contact you soon.",
      });
    }
    const { error } = await supabaseServer
      .from("bookings")
      .insert([
        {
          full_name: fullName,
          email,
          phone,
          company,
          location,
          start_date: startDate,
          status: "Pending",
        },
      ]);

    if (error) {
      return NextResponse.json(
        {
          success: false,
          message: error.message,
        },
        { status: 500 }
      );
    }
    const { data, error: emailError } = await resend.emails.send({
  from: "MealMithra <onboarding@resend.dev>",
  to: "tejamudapalli@gmail.com",
  subject: "🎉 New MealMithra Booking",
  html: `
    <h2>New Booking Received</h2>

    <p><strong>Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Company:</strong> ${company}</p>
    <p><strong>Location:</strong> ${location}</p>
    <p><strong>Start Date:</strong> ${startDate}</p>
  `,
});

///console.log("Email Response:", data);
///console.log("Email Error:", emailError);

    return NextResponse.json({
      success: true,
      message: "Booking saved successfully.",
    });
  } catch (err) {
    return NextResponse.json(
      {
        success: false,
        message: "Internal Server Error",
      },
      { status: 500 }
    );
  }
}