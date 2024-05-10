function DessertsList(props) {
  // Implement the component here.
  const filter = props.data.filter((cal) => cal.calories < 500);
  const sort = filter.sort((a, b) => a.calories - b.calories);

  const list = sort.map((data) => (
    <li>
      `{data.name} - {data.calories}`
    </li>
  ));

  return <ul>{list}</ul>;
}

export default DessertsList;
