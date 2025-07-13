const TagWrapper = ({ children }) => {
  return (
    <div className="flex justify-start">
      <p className="border-2 border-solid border-gray-500 text-black rounded-md px-5 py-2">
        {children}
      </p>
    </div>
  );
};

export default TagWrapper;
