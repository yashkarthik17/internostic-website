import type { Metadata } from "next";
import { ContactContent } from "./contact-content";

export const metadata: Metadata = {
  title: "Contact — Internostic",
  description:
    "Get in touch with the Internostic team. Reach out about investment opportunities, partnerships, press inquiries, or general questions.",
};

export default function ContactPage() {
  return <ContactContent />;
}
