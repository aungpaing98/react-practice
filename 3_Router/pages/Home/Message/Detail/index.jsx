export default function Detail(props) {
  const detailId = props.match.params.id
  return (
    <ul>
      <li>ID : {detailId}</li>
      <li>Title : {detailId}</li>
    </ul>
  );
}
