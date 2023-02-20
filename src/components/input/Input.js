import "./Input.css";

export const Input = ({
  addClass = "",
  addClass2 = "",
  labelText = "",
  fieldName = "",
  fieldType = "",
  fieldId = "",
  value = "",
  hasError = false,
  errorMessage = "",
  onChange = () => {},
}) => {
  return (
    <div className={addClass}>
      {labelText && <label className="">{labelText}</label>}
      <input
        name={fieldName}
        id={fieldId}
        type={fieldType}
        value={value}
        className={addClass2}
        onChange={onChange}
      />
      {hasError && <span className="error-message">{errorMessage}</span>}
    </div>
  );
};
