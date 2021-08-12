import React from "react";
import LeadsIcon from "../Assets/Img/services-leads-icon.svg";
import SearchIcon from "../Assets/Img/services-search-icon.svg";
import CROIcon from "../Assets/Img/services-cro-icon.svg";
import { Section } from "./Section";
import { ServiceCard } from "./ServiceCard";

export function Services() {
  return (
    <Section title="nossos serviços">
      <ServiceCard
        icon={LeadsIcon}
        title="Segmentation"
        text="Segmentação de perfis com base em dados reais de público-alvo ou buyer persona"
      />
      <ServiceCard
        icon={SearchIcon}
        title="SEO"
        text="Apareça nos resultados principais do Google com estratégias de otimização"
      />
      <ServiceCard
        icon={CROIcon}
        title="CRO"
        text="Acompanhe e melhore suas taxas de conversão"
      />
    </Section>
  );
};
