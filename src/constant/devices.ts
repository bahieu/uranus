const size = {
  mobile: '740px',
  tablet: '1023px',
  pc: '1024px',
};

export const breakpoint = {
  mobile: `(max-width:${size.mobile})`,
  tablet: `(min-width: 740px) and (max-width: ${size.tablet})`,
  pc: `(min-width:${size.pc})`,
};
