const TextArea = ({
  label,
  name,
  containerStyle,
  labelStyle,
  textAreaStyle,
  error,
  ...rest
}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>

      <div className="flex flex-col flex-2">
        <textarea className={textAreaStyle} id={name} name={name} {...rest} />
        <span className="text-red-500">{error}</span>
      </div>
    </div>
  );
};

export default TextArea;
