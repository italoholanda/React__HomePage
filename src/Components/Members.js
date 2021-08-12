import React from "react";
import m00 from "../Assets/Img/member-m00.png";
import m01 from "../Assets/Img/member-m01.png";
import m02 from "../Assets/Img/member-m02.png";
import m03 from "../Assets/Img/member-m03.png";
import m04 from "../Assets/Img/member-m04.png";
import w00 from "../Assets/Img/member-w00.png";
import w01 from "../Assets/Img/member-w01.png";
import w02 from "../Assets/Img/member-w02.png";
import w03 from "../Assets/Img/member-w03.png";
import w04 from "../Assets/Img/member-w04.png";
import Style from "./Members-module.scss";
import { Section } from "./Section";
import { MemberCard } from "./MemberCard";

export function Members() {
  return (
    <div id="members">
      <Section title="nosso time" style={Style}>
        <MemberCard img={m00} title="Account Manager" name="Luiz Guanabara" />
        <MemberCard img={m01} title="SEO Analyst" name="Gustavo Souza" />
        <MemberCard img={m02} title="CRO Analyst" name="André Silveira" />
        <MemberCard img={m03} title="Media Expert" name="Marcos Figueira" />
        <MemberCard img={m04} title="Marketing Head" name="Antônio Hoffmann" />
        <MemberCard img={w00} title="SEO Analyst" name="Rebecca de Castro" />
        <MemberCard img={w01} title="Account Manager" name="Luiza Gomes" />
        <MemberCard img={w02} title="Head Hunter" name="Mariah França" />
        <MemberCard img={w03} title="Bussness Inteligence" name="Ana Maria" />
        <MemberCard img={w04} title="UX Designer" name="Alice Vanderberg" />
      </Section>
    </div>
  );
}
