export default function Singer({singer1}) {
  console.log(singer1);
  return (
    <div >
      <div className="card">
            <p>Id: {singer1.id} </p>
            <h3>Name: {singer1.name} </h3>
            <p>Age: {singer1.age} </p>
      </div>
    </div>
  );
}
