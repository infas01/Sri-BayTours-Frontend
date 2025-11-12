import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request) {
  try {
    const body = await request.json()
    const { name, email, phone, country, message } = body

    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: 'Sri\'BayTours <onboarding@resend.dev>', // Use your verified domain
      to: [process.env.NEXT_PUBLIC_CONTACT_EMAIL],
      subject: `New Contact Form Submission from ${name}`,
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
                width: 120px;
              }
              .message-box {
                background-color: #f5f5f5;
                padding: 20px;
                border-radius: 8px;
                margin-top: 20px;
                border-left: 4px solid #d4a574;
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
                <h1>📧 New Contact Form Message</h1>
              </div>
              <div class="content">
                <h2 style="color: #1e3a5f; margin-bottom: 20px;">Contact Information</h2>
                
                <div class="info-row">
                  <span class="label">Name:</span>
                  <span>${name}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Email:</span>
                  <span>${email}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Phone:</span>
                  <span>${phone}</span>
                </div>
                
                <div class="info-row">
                  <span class="label">Country:</span>
                  <span>${country}</span>
                </div>
                
                <div class="message-box">
                  <h3 style="color: #1e3a5f; margin-top: 0;">Message:</h3>
                  <p style="margin: 0; white-space: pre-wrap;">${message}</p>
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
    })

    if (error) {
      console.error('Resend error:', error)
      return NextResponse.json({ error: 'Failed to send email' }, { status: 500 })
    }

    return NextResponse.json({ success: true, data }, { status: 200 })
  } catch (error) {
    console.error('API error:', error)
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}