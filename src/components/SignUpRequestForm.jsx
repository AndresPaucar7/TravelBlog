import React, { useState } from "react";

function SignUpRequestForm() {
  const [email, setEmail] = useState('');

  const handleSubmit = async (event) => {

    const requestBody = { email: email };

    try {
      const response = await fetch('http://localhost:8000/api/v1/requestsignup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(requestBody),
      });

      if (response.ok) {
        const responseData = await response.text();
        alert(`Sign-up link sent to ${email}: ${responseData}`);
      } else {
        const errorText = await response.text();
        console.error('Error:', errorText);
        alert('Unable to send sign-up link');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your email:</label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder="email"
      />
      <button type="submit">Request</button>
    </form>
);
}

export default SignUpRequestForm;