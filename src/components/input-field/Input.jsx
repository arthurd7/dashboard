const Input = ({
  label,
  name,
  containerStyle,
  labelStyle,
  inputStyle,
  ...rest
}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
      <input className={inputStyle} id={name} name={name} {...rest} />
    </div>
  );
};

export default Input;
