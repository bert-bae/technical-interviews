const CheckList = ({ history, onItemClick }) => {
  let listItems = [];

  history.forEach((i) => {
    listItems.push(
      <li
        className="clickable"
        onClick={() => {
          onItemClick(i);
        }}
      >
        {i}
      </li>
    );
  });

  return <ul>{listItems}</ul>;
};

export default CheckList;
