
const App = () => {
  const relatives = ["Ramesh", "Suresh", "Priya", "Anita"];

  return (
    <div id="main">
      <ol key="relativeList">
        {
          relatives.map((element, index) => (
            <li key={`relativeListItem${index + 1}`}>
              {element}
            </li>
          ))
        }
      </ol>
    </div>
  );
};

export default App;