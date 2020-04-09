import React from 'react';

const FilterItem = ({ indx, item }) => {
  return (
    <tr className="border-0">
      <td>{item.time.split('-')[0]}</td>
      <td className="text-left">{item.name}</td>
      <td>
        <button className="btn tableBtn">{item.isSuccess ? 'Approve' : ' Pending '}</button>
      </td>
    </tr>
  );
};

export default FilterItem;