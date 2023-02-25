import React from "react";
import useKeydown from "../../hooks/useKeydown";

export const ToastContext = React.createContext();

function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([]);

  const addToastHandler = (message, variantSelected) => {
    setToasts((prev) => [
      ...prev,
      { id: crypto.randomUUID(), message, variantSelected },
    ]);
  };

  const filterToasts = (toastID) => {
    setToasts(toasts.filter((toast) => toast.id !== toastID));
  };

  const clearToastMessages = React.useCallback(() => {
    setToasts([]);
  }, []);

  useKeydown("Escape", clearToastMessages);
  return (
    <ToastContext.Provider value={{ addToastHandler, filterToasts, toasts }}>
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
