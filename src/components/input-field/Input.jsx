const Input = ({
  label,
  name,
  containerStyle,
  labelStyle,
  inputStyle,
  onChange,
  ...rest
}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input
        className={inputStyle}
        onChange={onChange}
        id={name}
        name={name}
        {...rest}
      />
    </div>
  );
};

export default Input;
