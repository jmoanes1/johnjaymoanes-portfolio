function Logo({ className = 'h-9 w-9' }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 32 32"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#142D4E" />
      <text
        x="16"
        y="19"
        textAnchor="middle"
        fontFamily="Arial, Helvetica, sans-serif"
        fontSize="13"
        fontWeight="700"
        letterSpacing="-0.5"
        fill="#FFFFFF"
      >
        JM
      </text>
      <rect x="10" y="22.5" width="12" height="2.5" rx="1.25" fill="#3B82F6" />
    </svg>
  );
}

export default Logo;
