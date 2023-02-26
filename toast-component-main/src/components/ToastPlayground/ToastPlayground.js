import React from "react";

import Button from "../Button";
import ToastShelf from "../ToastShelf";
import styles from "./ToastPlayground.module.css";

import { ToastContext } from "../ToastProvider";
const VARIANT_OPTIONS = ["notice", "warning", "success", "error"];

function ToastPlayground() {
  const [message, setMessage] = React.useState("");
  const [isDisabled, setIsDisabled] = React.useState(true);

  // disable button if message is empty
  React.useEffect(() => {
    if (message === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [message]);

  const [variantSelected, setVariantSelected] = React.useState(
    VARIANT_OPTIONS[0]
  );
  const { addToastHandler } = React.useContext(ToastContext);

  const onMessageChange = (event) => {
    if (message === "") {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
    setMessage(event.target.value);
  };

  const onVariantChange = (event) => {
    setVariantSelected(event.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    addToastHandler(message, variantSelected);
    setMessage("");
    setVariantSelected(VARIANT_OPTIONS[0]);
    setIsDisabled(true);
  };
  return (
    <div className={styles.wrapper}>
      <header>
        <img alt="Cute toast mascot" src="/toast.png" />
        <h1>Toast Playground</h1>
      </header>

      <ToastShelf />
      <form onSubmit={onSubmitHandler}>
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
              <Button disabled={isDisabled}>Pop Toast!</Button>
            </div>
          </div>
        </div>
      </form>
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
