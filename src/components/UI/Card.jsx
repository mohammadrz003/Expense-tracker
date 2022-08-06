function Card(props) {
  const classes = `shadow rounded ${props.className}`;

  return <div className={classes}>{props.children}</div>;
}

export default Card;
