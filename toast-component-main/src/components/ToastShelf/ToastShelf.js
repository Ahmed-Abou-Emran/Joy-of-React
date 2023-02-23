import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

function ToastShelf({ toasts, setToasts }) {
  const filterToasts = (toastID) => {
    setToasts(toasts.filter((toast) => toast.id !== toastID));
  };
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variantSelected, message, id }, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast
            variant={variantSelected}
            filterToasts={filterToasts}
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
