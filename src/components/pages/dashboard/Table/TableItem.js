import React from 'react';

const TableItem = ({item, indx}) => {
console.log(item);

  return (
    <tr className="border-0">
      <td>{indx}</td>
      <td>{item.date}</td>
      <td>{item.time.split('-')[0]}</td>
      <td className="text-left">{item.name}</td>
      <td>{item.phone}</td>
      <td><button className="btn tableBtn">View</button></td>
      <td>
        <div className="d-flex align-items-center">
          <button className="btn tableBtn">{item.isSuccess ? 'Approve' :' Pending '}</button>
          <span className="material-icons total-patients p-1 text-white m-1 rounded">
            create
          </span>
        </div>
      </td>
    </tr>
  );
};

export default TableItem;


