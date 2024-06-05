import { ErrorMessage } from "../ErrorMessage/ErrorMessage";
import styles from "./Input.module.css";
export const Input = ({
  label,
  type = "text",
  name,
  id,
  onChange,
  errors = {},
}) => {
  return (
    <>
      <label htmlFor={name}>{label}: </label>
      <input
        autoComplete="off"
        className={styles.input}
        type={type}
        name={name}
        id={id}
        onChange={onChange}
      />

      {errors[name] && <ErrorMessage>{errors[name]}</ErrorMessage>}
    </>
  );
};
