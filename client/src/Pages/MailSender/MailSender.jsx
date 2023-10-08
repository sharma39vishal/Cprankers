import React from 'react';
import './mailsender.css';

const MailSender = () => {
  return (
    <div className="documentation-container mail-sender-container">
      <h1>Mail Sending API Documentation</h1>
      <p className="website-description">
        MailSender API Documentation is a comprehensive guide that provides developers with the necessary information to integrate the MailSender API into their applications. With this API, you can easily send emails programmatically, whether you want to use your own email account's credentials or an API key for authentication.
      </p>

      <div className="endpoint">
        <div className="endpoint-title">POST /mailsender</div>
        <div className="endpoint-description">
          This API is used to send an email using the sender's credentials.
        </div>
        <div className="endpoint-example">
          <p><strong>Request:</strong></p>
          <code>
            {`
            {
              "mail": "sender@example.com",
              "password": "app_password",
              "sendmail": "recipient@example.com",
              "subject": "Hello",
              "message": "This is a test email."
            }
            `}
          </code>
        </div>
      </div>

      <div className="endpoint">
        <div className="endpoint-title">POST https://cprankers.vercel.app/mailsender/{'{'}API_KEY{'}'}</div>
        <div className="endpoint-description">
          This API is used to send an email using an API key for authentication.
        </div>
        <div className="endpoint-example">
          <p><strong>Request:</strong></p>
          <code>
            {`
            {
              "sendmail": "recipient@example.com",
              "subject": "Hello",
              "message": "This is a test email."
            }
            `}
          </code>
        </div>
      </div>

      <div className="response">
        <div className="response-title">Response Example</div>
        <div className="response-example">
          <p><strong>Success:</strong></p>
          <code>
            {`
            {
              "status": "success",
              "message": "Email sent successfully."
            }
            `}
          </code>
          <p><strong>Error:</strong></p>
          <code>
            {`
            {
              "status": "error",
              "message": "Invalid API key."
            }
            `}
          </code>
        </div>
      </div>

      <div className="contact-button-container">
        <a
          className="contact-button"
          href="https://www.linkedin.com/in/sharma39vishal/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact the Developer for API Key
        </a>
      </div>
    </div>
  );
};

export default MailSender;
