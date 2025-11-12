import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      contactNumber,
      subject,
      pickupLocation,
      dropoffLocation,
      pickupDate,
      pickupTime,
    } = body;

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "Sri'BayTours <onboarding@resend.dev>", // Use your verified domain
      to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL],
      subject: `New Ride Booking: ${subject}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <style>
              body {
                font-family: Arial, sans-serif;
                line-height: 1.6;
                color: #333;
              }
              .container {
                max-width: 600px;
                margin: 0 auto;
                padding: 20px;
                background-color: #f9f9f9;
              }
              .header {
                background: linear-gradient(135deg, #1e3a5f 0%, #4a90e2 100%);
                color: white;
                padding: 30px;
                text-align: center;
                border-radius: 10px 10px 0 0;
              }
              .content {
                background: white;
                padding: 30px;
                border-radius: 0 0 10px 10px;
                box-shadow: 0 2px 10px rgba(0,0,0,0.1);
              }
              .info-row {
                margin-bottom: 15px;
                padding: 10px;
                background-color: #f5f5f5;
                border-left: 4px solid #4a90e2;
              }
              .label {
                font-weight: bold;
                color: #1e3a5f;
                display: inline-block;
                width: 150px;
              }
              .footer {
                text-align: center;
                margin-top: 20px;
                padding-top: 20px;
                border-top: 1px solid #ddd;
                color: #666;
              }
            </style>
          </head>
          <body>
            <div class="container">
              <div class="header">
                <h1>🚗 New Ride Booking Request</h1>
              </div>
              <div class="content">
                <h2 style="color: #1e3a5f; margin-bottom: 20px;">Booking Details</h2>
                
                <div class="info-row">
                  <span class="label">Full Name:</span>
                  <span>${fullName}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span>${email}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Contact Number:</span>
                  <span>${contactNumber}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Subject:</span>
                  <span>${subject}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Pickup Location:</span>
                  <span>${pickupLocation}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Dropoff Location:</span>
                  <span>${dropoffLocation}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Pickup Date:</span>
                  <span>${pickupDate}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Pickup Time:</span>
                  <span>${pickupTime}</span>
                </div>
                
                <div class="footer">
                  <p><strong>Sri'BayTours</strong></p>
                  <p>Explore the Pearl of the Indian Ocean</p>
                  <p>📍 Pottuvil, Sri Lanka | 📞 +94 76 272 6459</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send email' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data }, { status: 200 });
  } catch (error) {
    console.error('API error:', error);
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    );
  }
}
