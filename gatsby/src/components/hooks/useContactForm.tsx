import { useState } from "react";
import { useContact } from "../context";

function useContactForm() {
  const { values, updateValue, setInputs } = useContact();

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>("");
  const [message, setMessage] = useState<string | null>("");

  const submitEmail = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setMessage(null);
        // gather all the data
        const body = {
          name: values?.name,
          email: values?.email,
          message: values?.message,
          mapleSyrup: values?.mapleSyrup,
        };

        // 4. Send this data to a serverless function when they check out

        const res = await fetch(
          `${process.env.GATSBY_SERVERLESS_BASE}/sendEmail`,
          {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(body),
          }
        );

        const text = JSON.parse(await res.text());

        // check if everything worked
        if (res.status >= 400 && res.status < 600) {
          setLoading(false); // turn loading off
          setError(text.message);
        } else {
          setLoading(false);
          setMessage('Message was sent! Talk to you soon!');
          setInputs?.({name: "", email: "", mapleSyrup: "", message: ""})
        }
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
