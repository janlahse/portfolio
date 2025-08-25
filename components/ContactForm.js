import styled from "styled-components";

export default function ContactForm({ contactRef }) {
  function handleSubmit(event) {
    event.preventDefault();
    alert("The form is currently work in progress. Thanks for your patience!");
  }
  return (
    <section ref={contactRef}>
      <h2>Contact</h2>
      <Form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input id="name" maxLength="50" required></input>
        <label htmlFor="email">Email</label>
        <input id="email" maxLength="50" type="email" required></input>
        <label htmlFor="message">Message</label>
        <textarea id="message" rows="4" maxLength="500" required></textarea>
        <SubmitButton type="submit">Send</SubmitButton>
      </Form>
    </section>
  );
}

const Form = styled.form`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 15px;
  & > input,
  textarea {
    border: 1.5px solid #222;
    border-radius: 3px;
    grid-column: 2/4;
    font-family: Helvetica;
  }
`;

const SubmitButton = styled.button`
  grid-column: 2/3;
  font-family: inherit;
  font-size: 1.1em;
  background-color: #fff;
  border: 2px solid #222;
  border-radius: 3px;
  padding: 5px 0;
  color: #111;
  transition: transform 0.2s ease, background-color 0.2s ease;
  &:active {
    transform: scale(0.92, 0.92);
    background-color: #eee;
  }
`;
