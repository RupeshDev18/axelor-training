import styles from "./ErrorMessage.module.css";

export function ErrorMessage({ children }) {
  return <p className={styles.error}>{children}</p>;
}
