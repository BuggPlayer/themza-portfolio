export const Input = ({
  addClass = "",
  addClass2 = "",
  labelText = "",
  fieldName = "",
  fieldType = "",
  fieldId = "",
  value = "",
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
    </div>
  );
};
