function Winefn(props, like) {
  let { rating } = +props;
  rating = Number(rating);
  return (
    <div>
      <h3>{props.rating}</h3>
      <h3>{typeof rating}</h3>
      <h3>{like ? "liked" : "none!"}</h3>
    </div>
  );
}
export default Winefn;
