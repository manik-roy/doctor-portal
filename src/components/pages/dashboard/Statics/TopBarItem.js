import React from 'react';

const TopBarItem = ({total, title, subtitle, extraClass}) => {
  return (
    <div className="col-md-3 mb-3 ">
      <div className={` ${extraClass} d-flex py-4 rounded align-items-center`}>
        <h6 className="w-50 text-right pr-2 text-right pr-2">{total}</h6>
        <div>
          <p>{title} <br /> {subtitle} </p>
        </div>
      </div>
    </div>
  );
};

export default TopBarItem;