import React from "react";

export const Jumbotron = () => {
  return (
    <div className="container">
      <div className="row pt-4">
        <div className="col-md-4 d-flex align-items-center">
          <div>
            <h2 className="  heading ">El Rey de la Bachata</h2>
            <p> El Chico de las Poesías El King</p>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card border-0 ">
            <img
              src="https://studiosol-a.akamaihd.net/uploadfile/letras/fotos/e/4/8/b/e48bebceaaa25050cc2b7996be92759c.jpg"
              className="card-img-top"
              alt="..."
            />
          </div>
        </div>
      </div>
    </div>
  );
};
