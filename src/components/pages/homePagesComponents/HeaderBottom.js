import React from 'react';

const HeaderBottom = () => {
  return (
    <section className="header-content">
    <div className="row">
      <div className="col-xl-5">
        <div className="sidebar-content">
          <h2 className="text-capitalize fwb">Your new smile <br/> starts here</h2>
          <p className="py-2">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quasi veniam optio
            consenter quod beatae, atque quae ipsam, alias est reprehenderit debitis explicabo itaque pariatur
            nisi!</p>
          <button type="button" className="btn mybtn">GET APPOINTMENT</button>
        </div>
      </div>
      <div className="col-xl-7">
        <div className="sidebar-image mr-2">
        </div>
      </div>
    </div>
  </section>
  );
};

export default HeaderBottom;