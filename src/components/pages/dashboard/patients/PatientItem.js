import React from 'react';

const PatientItem = ({item, indx}) => {
  console.log(item);
  
  return (
    <tr className="border-0">
      <td>{indx}</td>
      <td className="text-left">{item.name}</td>
      <td>{item.gender}</td>
      <td>{item.age}</td>
      <td>{item.weight}</td>
      <td>{item.phone}</td>
      <td>{item.address}</td>
      <td><button className="btn tableBtn">Prescription</button></td>
    </tr>
  );
};

export default PatientItem;
