import React from 'react';

const FeatureItem = ({icon,title,subTitle, extraClass }) => {
  return (
    <div className="col-md-4 mb-3 ">
    <div className={`d-flex  py-4  rounded ${extraClass} align-items-center`}>
      <h6 className="w-50 text-center "><span className="material-icons main-home-icon">
          {icon}
        </span></h6>
      <div className="home-icons-container">
        <h6>{title}</h6>
        <p>{subTitle}</p>
      </div>
    </div>
  </div>
  );
};

export default FeatureItem;