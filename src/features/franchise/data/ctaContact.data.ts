
import type { CtaContactContent } from "../types/ctaContact.types";

export const ctaContactData: CtaContactContent = {
  title: "Ready to Start Your Qargo ownership?",
  description: "Join the Qargo Coffee family and build a business supported by a proven franchise platform. Our franchise development team is ready to guide you through the first steps toward ownership.",
  buttons: [
    {
      id: "contact-us-now",
      text: "Contact Us Now",
      size: "sm",
      variant: "primary",
      path: "/about",
    },
    {
      id: "schedule-a-call",
      text: "Schedule a Call",
      size: "sm",
      variant: "secondary",
      path: "/about",
    },
  ],
};