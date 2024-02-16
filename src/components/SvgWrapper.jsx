function SvgWrapper({ name, size, children }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      className={`inline-block w-${size} h-${size} stroke-current`}
    >
      {name.map((path, index) => (
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="2"
          key={index}
          d={path}
        ></path>
      ))}
      {children}
    </svg>
  );
}

export default SvgWrapper;
