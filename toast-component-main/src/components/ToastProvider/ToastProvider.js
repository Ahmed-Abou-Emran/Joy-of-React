import React from "react";

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

  const clearToastMessage = () => {
    setToasts([]);
  };
  return (
    <ToastContext.Provider
      value={{ addToastHandler, filterToasts, toasts, clearToastMessage }}
    >
      {children}
    </ToastContext.Provider>
  );
}

export default ToastProvider;
