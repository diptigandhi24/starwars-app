import useFetchEverypage from "../api/useFetchRequest";

export default function DisplayCharacterList() {
  let { data, isloading } = useFetchEverypage();

  if (isloading) {
    return <p>Loading data</p>;
  } else {
    return (
      <>
        <p>test</p>
        {data.map((item, index) => (
          <p key={`${item.name}${index}`}>{item.name}</p>
        ))}
      </>
    );
  }
}
