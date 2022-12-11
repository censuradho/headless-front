import { cardFlags } from "constants/creditCard";
import { publicIcons } from "constants/public-icons";
import { format } from "date-fns";

export const cardFlagIcons = {
  [cardFlags.mastercard]: publicIcons.cardMastercard,
  [cardFlags.amex]: publicIcons.cardAmex,
  [cardFlags.elo]: publicIcons.cardElo,
  [cardFlags.visa]: publicIcons.cardVisa,
  [cardFlags.diners]: publicIcons.cardDiners,
  [cardFlags.hipercard]: publicIcons.cardHipercard,
};

export const optionsExMonth = Array(12)
  .fill(1)
  .map((value, index) => index)
  .map((value) => String(value + 1).padStart(2, "0"))
  .map((value) => ({
    value,
    label: value,
  }));

export const optionsExYears = Array(50)
  .fill(1)
  .map((value, index) => index)
  .map((value) => value + Number(format(new Date(), "yy")))
  .map((value) => ({
    value: String(value),
    label: String(value),
  }));
