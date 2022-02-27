import styled from "styled-components";
import Button from "../components/Button.jsx";
import Title from "../components/Title.jsx";
import Description from "../components/Description.jsx";
import Container from "../components/Container";
import office from "../images/office.svg";
import phone from "../images/phone.svg";
import email from "../images/email.svg";

const Wrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 0 10rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0 1rem;
`;
const ContactContainer = styled.div`
  display: flex;
  gap: 2rem;
`;
const Form = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 2rem;
`;
const Fieldset = styled.form`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const Label = styled.label`
  font-size: 0.75rem;
  font-weight: 200;
  color: var(--light-color);
`;
const Input = styled.input`
  padding: 1rem 1.5rem;
  border: none;
  border-radius: 5px;
  background-color: var(--dark-color);
  outline: var(--btn-color) solid 2px;
  color: var(--light-color);
`;
const TextArea = styled.textarea`
  min-height: 20rem;
  min-width: 18rem;
  padding: 1rem 1.5rem;
  background-color: var(--dark-color);
  color: var(--light-color);
  outline: var(--btn-color) solid 2px;
  resize: none;
  border: none;
  border-radius: 5px;
`;
const AddressContainer = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: flex-start;
  justify-content: center;
`;
const AddressItem = styled.div`
  display: flex;
  align-items: center;
`;
const Icon = styled.img`
  width: 3rem;
  margin-right: 1rem;
  border-radius: 5px;
  transition: all ease 0.3s;
  cursor: pointer;
  &:hover {
    opacity: 0.9;
    transform: scale(0.95);
  }
`;
const Text = styled.a`
  font-size: 1rem;
  color: white;
  font-weight: 200;
  cursor: pointer;
  transition: all ease 0.3s;
  &:hover {
    color: var(--btn-color);
  }
`;
const Contact = () => {
  return (
    <Container>
      <Wrapper id="contact">
        <Description
          style={{ marginBottom: "0" }}
          desc={"Any questions?"}
          color={"white"}
        />
        <Title title={"Let's get in touch"} color={"white"} />
        <ContactContainer>
          <Form>
            <Fieldset>
              <Label>your name</Label>
              <Input />
              <Label>your email</Label>
              <Input />
              <Label>subject</Label>
              <Input />
              <Button
                name={"send"}
                color={"white"}
                backgroundColor={"var(--btn-color)"}
              />
            </Fieldset>
            <TextArea placeholder="Your message" />
          </Form>
          <AddressContainer>
            <AddressItem>
              <Icon src={office} />
              <Text>Harrogate, UK</Text>
            </AddressItem>
            <AddressItem>
              <Icon src={phone} />
              <Text>07830886841</Text>
            </AddressItem>
            <AddressItem>
              <Icon src={email} />
              <Text>greghajdukphotography@gmail.com</Text>
            </AddressItem>
          </AddressContainer>
        </ContactContainer>
      </Wrapper>
    </Container>
  );
};

export default Contact;
