import styles from './index.module.css';

type ButtonProps = {
  text: string;
  type: 'submit' | 'button';
  disabled: boolean;
};

function Button({ text, type, disabled }: ButtonProps) {
  return (
    <button type={type} className={styles.button} disabled={disabled}>
      {text}
    </button>
  );
}

export default Button;
