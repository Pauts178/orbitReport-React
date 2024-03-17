import satData from "./satData";

const Table = ({ sat }) => {
  return (
    <table>
    <thead>
     <tr>
       <th>Name</th>
       <th>Type of Satellite</th>
       <th>Launch Date</th>
       <th>Status</th>
     </tr>
     </thead>
     {satData.map((data, id) => {
      return (
     <tbody>
        <tr key={id}>
          <td>{data.name}</td>
          <td>{data.type}</td>
          <td>{data.launchDate}</td>
          <td>{data.orbitType}</td>
        </tr>
      </tbody>
    );
  })}
     
   </table>
  );
};

export default Table;



