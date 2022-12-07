import { cardFlags } from "constants/creditCard";
import { publicIcons } from "constants/public-icons";

export const cardFlagIcons = {
  [cardFlags.mastercard]: publicIcons.cardMastercard,
  [cardFlags.amex]: publicIcons.cardAmex,
  [cardFlags.elo]: publicIcons.cardElo,
  [cardFlags.visa]: publicIcons.cardVisa,
  [cardFlags.diners]: publicIcons.cardDiners,
  [cardFlags.hipercard]: publicIcons.cardHipercard,
};
