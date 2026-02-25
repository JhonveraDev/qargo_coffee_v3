import { useState } from "react";
import type { FranchiseFormData } from "../types/form.types";

const initialFormData: FranchiseFormData = {
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
};

export const useFranchiseForm = () => {
  const [formData, setFormData] = useState<FranchiseFormData>(initialFormData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name as keyof FranchiseFormData]: value,
    }));
  };

  const resetForm = () => {
    setFormData(initialFormData);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setError(null);

      // 🔥 Aquí iría tu petición real
      // await sendFranchiseApplication(formData);

      console.log("Formulario enviado:", formData);

      resetForm();

    } catch (err) {
      console.error(err);
      setError("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    formData,
    isSubmitting,
    error,
    handleChange,
    handleSubmit,
  };
};