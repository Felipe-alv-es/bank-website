import React from "react";
import { BsBank, BsShieldExclamation } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiMoneyWithdraw, BiHelpCircle } from "react-icons/bi";
import { AiOutlineCreditCard } from "react-icons/ai";
import { BsHandThumbsUp, BsReceiptCutoff } from "react-icons/bs";

const serviceSlider = [
  {
    id: 1,
    title: "Meus Cartões",
    text: "Gerencie suas opções \n de pagamento desfrutando de \n uma experiência \n personalizada para você ",
    icon: <BsBank />,
  },
  {
    id: 2,
    title: "Fatura Digital",
    text: "Com a Fatura Digital, você pode \n dizer adeus ao papel e receber suas \n faturas de forma prática. Adentre a \n essa facilidade",
    icon: <HiOutlineDocumentReport />,
  },
  {
    id: 3,
    title: "Atendimento",
    text: "Estamos sempre prontos para \n fornecer suporte especializado e \n responder às suas dúvidas. Conte \n conosco",
    icon: <BsShieldExclamation />,
  },
  {
    id: 4,
    title: "Emprestimos",
    text: "Soluções financeiras personalizadas \n para você, provendo recursos \n adicionais a seus projetos de \n maneira rapida e transparente ",
    icon: <BiMoneyWithdraw />,
  },
  {
    id: 5,
    title: "Desbloqueio de Cartão",
    text: "Soluções rapidas e seguras para ativar seus novos cartões. Toda conveniencia e controle sobre suas transações financeiras",
    icon: <AiOutlineCreditCard />,
  },
  {
    id: 6,
    title: "Aplicativos",
    text: "Desfrute de uma variedade de ferramentas financeiras diretamente de seu dispositivo. Praticidade e agilidade na palma da sua mão",
    icon: <BsHandThumbsUp />,
  },
  {
    id: 7,
    title: "Comprovantes",
    text: "Acesse e baixe os comprovantes de suas transações passadas, incluindo extratos, recibos e demais documentos necessários",
    icon: <BsReceiptCutoff />,
  },
  {
    id: 8,
    title: "Atendimento",
    text: "Estamos prontos para ajudar com suas duvidas e necessidades financeiras. Explore nossas opções de suporte e contato com nossa equipe",
    icon: <BiHelpCircle />,
  },
];

export default serviceSlider;
