const Input = ({
  label,
  name,
  containerStyle,
  labelStyle,
  inputStyle,
  onChange,
  error,
  ...rest
}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>

      <div className="flex flex-col flex-2">
        <input
          className={inputStyle}
          onChange={onChange}
          id={name}
          name={name}
          {...rest}
        />
        <span className="text-red-500">{error}</span>
      </div>
    </div>
  );
};

export default Input;
