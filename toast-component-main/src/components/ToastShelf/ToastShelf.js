import React from "react";
import {createPortal} from "react-dom";
import Toast from "../Toast";
import styles from "./ToastShelf.module.css";

import { ToastContext } from "../ToastProvider";
function ToastShelf() {
  const { toasts, filterToasts } = React.useContext(ToastContext);

  return createPortal (
    <ol
      className={styles.wrapper}
      role="region"
      aria-live="assertive"
      aria-label="Notification"
    >
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
    </ol>,
    document.getElementById("toast-root")
  );
}

export default ToastShelf;
