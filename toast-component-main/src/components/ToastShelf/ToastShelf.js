import React from "react";

import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";
function ToastShelf() {
  const { toasts, filterToasts } = React.useContext(ToastContext);
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
