import React from "react";
import { BsBank } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiMoneyWithdraw, BiHelpCircle } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsHandThumbsUp, BsReceiptCutoff } from "react-icons/bs";

const serviceSlider = [
  {
    id: 1,
    title: "Meus Cartões",
    text: "Gerencie suas opções de pagamento desfrutando de uma experiência personalizada para você. ",
    icon: <BsBank />,
  },
  {
    id: 2,
    title: "Fatura Digital",
    text: "Com a Fatura Digital, você pode dizer adeus ao papel e receber suas faturas de forma prática. Adentre a essa facilidade.",
    icon: <HiOutlineDocumentReport />,
  },
  {
    id: 3,
    title: "Atendimento",
    text: "Estamos prontos para ajudar com suas dúvidas e necessidades financeiras. Explore nossas opções de suporte e contato com nossa equipe.",
    icon: <BiHelpCircle />,
  },
  {
    id: 4,
    title: "Emprestimos",
    text: "Soluções financeiras personalizadas para você, provendo recursos adicionais a seus projetos de maneira rapida e transparente. ",
    icon: <BiMoneyWithdraw />,
  },
  {
    id: 5,
    title: "Desbloqueio de Cartão",
    text: "Soluções rapidas e seguras para ativar seus novos cartões. Toda conveniencia e controle sobre suas transações financeiras.",
    icon: <AiOutlineCreditCard />,
  },
  {
    id: 6,
    title: "Aplicativos",
    text: "Desfrute de uma variedade de ferramentas financeiras diretamente de seu dispositivo. Praticidade e agilidade na palma da sua mão.",
    icon: <BsHandThumbsUp />,
  },
  {
    id: 7,
    title: "Comprovantes",
    text: "Acesse e baixe os comprovantes de suas transações passadas, incluindo extratos, recibos e demais documentos necessários.",
    icon: <BsReceiptCutoff />,
  },
];

export default serviceSlider;
