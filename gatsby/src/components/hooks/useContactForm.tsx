import { useState } from "react";
import { useContact } from "../context";

function useContactForm() {
  const { values, updateValue } = useContact();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
  };

  return {
    values,
    updateValue,
    error,
    loading,
    message,
    submitEmail
  };
}

export default useContactForm;
