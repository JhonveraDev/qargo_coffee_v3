import franchiseHeaderImage from "../../../assets/images/franchise/franchise-header-responsive.png";

import type { HeaderFranchiseContent } from "../types/header.types";

export const headerFranchiseData: HeaderFranchiseContent = {
  title: "Create Something Bigger with Qargo Coffee",
  description:
    "Join the country’s fastest-growing coffee franchise and build a thriving business with Italy’s premium coffee, fine pastries, a unique proven system, and unmatched support.",
  image: {
    src: franchiseHeaderImage,
    alt: "Qargo Coffee franchise opportunity",
  },
  buttons: [
    {
      id: "start-conversation",
      text: "Start the Conversation",
      size: "md",
      variant: "primary",
    },
    {
      id: "download-info",
      text: "Download Our Franchise Info",
      size: "md",
      variant: "secondary",
    },
  ],
};
