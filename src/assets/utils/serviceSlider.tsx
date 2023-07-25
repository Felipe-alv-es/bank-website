import React from "react";
import { BsBank, BsShieldExclamation } from "react-icons/bs";
import { HiOutlineDocumentReport } from "react-icons/hi";
import { BiMoneyWithdraw } from "react-icons/bi";

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
    text: "Com a Fatura Digital, você pode \n dizer adeus ao papel e receber suas \n faturas de forma prática. Adentre a \n essa facilidade.",
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
    text: "Soluções financeiras personalizadas \n para você, provendo recursos \n adicionais a seus projetos de \n maneira rapida e transparente. ",
    icon: <BiMoneyWithdraw />,
  },
];

export default serviceSlider;
