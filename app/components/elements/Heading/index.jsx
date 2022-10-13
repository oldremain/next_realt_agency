const Heading = ({ level, children, ...rest }) => {
  const H_TAG = `h${level}`;

  return <H_TAG {...rest}>{children}</H_TAG>;
};

export default Heading;
