import { useState } from "react";
import type { FranchiseFormData } from "../types/form.types";

export const useFranchiseForm = () => {
  const [formData, setFormData] = useState<FranchiseFormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    state: "",
    city: "",
    areaInterest: "",
    birthDate: "",
    address: "",
    investment: "" as FranchiseFormData["investment"],
    timeline: "" as FranchiseFormData["timeline"],
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(formData);
  };

  return {
    formData,
    handleChange,
    handleSubmit,
  };
};