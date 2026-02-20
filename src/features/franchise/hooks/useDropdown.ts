import { useState } from "react";
import { dropdownData } from "../data/dropdown.data";

export const useDropdown = () => {
  const [expanded, setExpanded] = useState(false);

  const content = dropdownData[0];

  const visibleItems = expanded
    ? content.items
    : content.items.slice(0, 2);

  const toggleExpanded = () => {
    setExpanded((prev) => !prev);
  };

  return {
    content,
    visibleItems,
    expanded,
    toggleExpanded,
  };
};