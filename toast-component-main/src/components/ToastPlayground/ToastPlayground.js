import React from "react";

import Button from "../Button";
import Toast from "../Toast/Toast";

import styles from "./ToastPlayground.module.css";

const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [variantSelected, setVariantSelected] = React.useState(
    VARIANT_OPTIONS[0]
  );

  const onMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const onVariantChange = (event) => {
    setVariantSelected(event.target.value);
  };

  const [toasstStatus, setToastStatus] = React.useState(false);

  const showToast = () => {
    setToastStatus(true);
  };
  const hideToast = () => {
    setToastStatus(false);
  };

  console.log({ message, variantSelected });
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>
      {toasstStatus && (
        <Toast
          variant={variantSelected}
          hideToast={hideToast}
          toasstStatus={toasstStatus}
        >
          {message}
        </Toast>
      )}
      <div className={styles.controlsWrapper}>
        <div className={styles.row}>
          <label
            htmlFor="message"
            className={styles.label}
            style={{ alignSelf: "baseline" }}
          >
            Message
          </label>
          <div className={styles.inputWrapper}>
            <textarea
              value={message}
              onChange={onMessageChange}
              id="message"
              className={styles.messageInput}
            />
          </div>
        </div>

        <VariantOptions
          variantSelected={variantSelected}
          onVariantChange={onVariantChange}
        />
        <div className={styles.row}>
          <div className={styles.label} />
          <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
            <Button onClick={showToast}>Pop Toast!</Button>
          </div>
        </div>
      </div>
    </div>
  );
}

function VariantOptions({ onVariantChange, variantSelected }) {
  return (
    <div className={styles.row}>
      <div className={styles.label}>Variant</div>
      <div className={`${styles.inputWrapper} ${styles.radioWrapper}`}>
        {VARIANT_OPTIONS.map((option, index) => (
          <label key={index} htmlFor={`variant-${option}`}>
            <input
              id={`variant-${option}`}
              type="radio"
              name="variant"
              checked={option === variantSelected}
              value={option}
              onChange={onVariantChange}
            />
            {option}
          </label>
        ))}
        ;
      </div>
    </div>
  );
}
export default ToastPlayground;
