import React from "react";
import { Button } from "./Button";
import Styles from "./ContactUs-module.scss";
import { Input } from "./Input";
import { Section } from "./Section";

export function ContactUs() {
  return (
    <div className="contact" style={Styles}>
      <Section className="container" title="Contato">
        <form>
          <h3>Fale conosco</h3>
          <Input type="text" placeholder="Seu nome" />
          <Input type="text" placeholder="Seu e-mail" />
          <Input type="text" placeholder="Seu telefone" />
          <Input type="textarea" placeholder="Digite a sua mensagem ..." />
          <Button>Enviar</Button>
        </form>
      </Section>
    </div>
  );
}
