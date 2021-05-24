import { useState, useEffect, ReactNode } from "react";
import { createPortal } from "react-dom";
export default function UsePortal({
  id,
  children,
}: {
  id: string;
  children: ReactNode;
}) {
  const [hasMounted, setHasMounted] = useState(false);
  useEffect(() => {
    setHasMounted(true);
  }, []);
  if (!hasMounted) {
    return null;
  }
  return createPortal(children, document.querySelector(`#${id}`)!);
}
