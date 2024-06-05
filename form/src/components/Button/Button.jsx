import styles from "./Button.module.css";
function Button({ type, children }) {
  return (
    <button className={styles.button} type={type}>
      {children}
    </button>
  );
}

export default Button;
