import { weddingPaymentConfig } from "../config/payment.config"
import type { RsvpFormData } from "../schemas/rsvp.schema"

const GOOGLE_SCRIPT_URL =
  "https://script.google.com/macros/s/AKfycbxBCMsoY_5__S_7_FSQxZawjHJfMFjxnJeBBsNhf4taCZqFQOjuYY36vYR0oH6q4wQvKw/exec"

export const sendRsvp = async (data: RsvpFormData) => {
  const total = data.guests * weddingPaymentConfig.cardPrice

  await fetch(GOOGLE_SCRIPT_URL, {
    method: "POST",
    body: JSON.stringify({
      name: data.name,
      lastName: data.lastName,
      guests: data.guests,
      price: weddingPaymentConfig.cardPrice,
      total,
      status: "pendiente",
    }),
  })

  return total
}