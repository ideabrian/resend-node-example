import { Resend } from 'resend';
const resend = new Resend('re_123456789');

// from: name / email - can be anything
//   to: should be the email on your account - for testing.

(async function() {
  try {
    const data = await resend.emails.send({
      from: 'Acme <onboarding@resend.dev>',
      to: ['delivered@resend.dev'],
      subject: 'Hello World',
      html: '<strong>It works!</strong>'
    });

    console.log(data);
  } catch (error) {
    console.error(error);
  }
})();
