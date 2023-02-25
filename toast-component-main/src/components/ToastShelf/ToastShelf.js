import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";
function ToastShelf() {
  const { toasts, filterToasts, clearToastMessage } =
    React.useContext(ToastContext);

  React.useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        clearToastMessage();
      }

      window.addEventListener("keydown", handleKeyDown);
    };

    return () => window.addEventListener("keydown", handleKeyDown);
  }, [clearToastMessage]);

  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variantSelected, message, id }, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast
            variant={variantSelected}
            filterToasts={() => filterToasts(id)}
            id={id}
            // hideToast={hideToast}
            // toasstStatus={toasstStatus}
          >
            {message}
          </Toast>
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
