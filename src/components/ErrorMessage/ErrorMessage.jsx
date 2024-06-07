import css from './ErrorMessage.module.css';
function ErrorMessage() {
  return (
    <>
      <p className={css.error}> Oops something is wrong... Please try again!</p>
    </>
  );
}

export default ErrorMessage;
