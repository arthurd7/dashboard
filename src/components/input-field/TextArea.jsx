const TextArea = ({
  label,
  name,
  containerStyle,
  labelStyle,
  textAreaStyle,
  ...rest
}) => {
  return (
    <div className={containerStyle}>
      <label className={labelStyle} htmlFor={name}>
        {label}
      </label>
      <textarea className={textAreaStyle} id={name} name={name} {...rest} />
    </div>
  );
};

export default TextArea;
