import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

export const contactSchema = z.object({
  jmeno: z
    .string()
    .trim()
    .min(2, { message: "Uveďte prosím jméno (alespoň 2 znaky)." })
    .max(100, { message: "Jméno může mít nejvýše 100 znaků." }),
  email: z
    .string()
    .trim()
    .email({ message: "Zadejte prosím platnou e-mailovou adresu." })
    .max(255, { message: "E-mail může mít nejvýše 255 znaků." }),
  telefon: z.string().trim().max(40, { message: "Telefon může mít nejvýše 40 znaků." }).optional(),
  zprava: z
    .string()
    .trim()
    .min(10, { message: "Napište prosím alespoň pár vět (min. 10 znaků)." })
    .max(2000, { message: "Zpráva může mít nejvýše 2000 znaků." }),
  // honeypot – skryté pole, které lidé nevyplní
  web: z.string().max(0).optional().or(z.literal("")),
});

export type ContactInput = z.infer<typeof contactSchema>;

export const sendContact = createServerFn({ method: "POST" })
  .inputValidator((data: unknown) => contactSchema.parse(data))
  .handler(async ({ data }) => {
    if (data.web) {
      // Tichý úspěch pro roboty.
      return { ok: true as const };
    }

    console.log("[poptávka]", {
      jmeno: data.jmeno,
      email: data.email,
      telefon: data.telefon ?? "",
      delka: data.zprava.length,
      cas: new Date().toISOString(),
    });

    return { ok: true as const };
  });
