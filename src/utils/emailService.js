import emailjs from '@emailjs/browser';

// EmailJS Configuration
const SERVICE_ID = 'service_n8ylyms';
const TEMPLATE_ID = 'template_u1ax831';
const PUBLIC_KEY = 'b96CywPUSDN7lyG46';
const TO_EMAIL = 'ayishamuneer4342@gmail.com';

/**
 * Sends an email using EmailJS
 * @param {Object} params - The parameters to send
 * @param {string} params.name - Sender's name
 * @param {string} params.email - Sender's email
 * @param {string} params.phone - Sender's phone number
 * @param {string} params.message - Main message content
 * @param {string} [params.subject] - Optional subject/context
 * @param {Object} [params.additionalData] - Any other data to include in the message
 * @returns {Promise} - Resolves with the EmailJS response
 */
export const sendEmail = async ({ name, email, phone, message, subject = 'New Enquiry', additionalData = {} }) => {
    // Format the message to include all details cleanly
    const formattedMessage = `
Subject: ${subject}
Name: ${name}
Email: ${email}
Phone: ${phone}

${Object.entries(additionalData).map(([key, value]) => `${key}: ${value}`).join('\n')}

Message:
${message}
    `.trim();

    const templateParams = {
        from_name: name,
        message: formattedMessage,
        requirement: subject, // Mapping subject to requirement as it seems to be a header field
        contact_number: phone,
        to_email: TO_EMAIL,
        reply_to: email
    };

    try {
        const response = await emailjs.send(SERVICE_ID, TEMPLATE_ID, templateParams, PUBLIC_KEY);
        return response;
    } catch (error) {
        console.error('EmailJS Error:', error);
        throw error;
    }
};
