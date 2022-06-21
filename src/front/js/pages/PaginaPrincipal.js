import React from "react";
import { Footer } from "../component/footer";
import { Navbar } from "../component/navbar";
import { Card } from "../component/card";
import { Jumbotron } from "../component/Jumbotron";
import { Modal } from "../component/modal";
import { Carusel } from "../component/carusel";

function PaginaPrincipal() {
  return (
    <>
      {/* <Navbar /> */}
      <Jumbotron />
      <div className="container p-5">
        <div className="row">
          <h1>Fórmula, vol. 1</h1>
          <div className="col-md-4">
            <Card
              title="Debate de 4 "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/1p0QyZIf93I"}
              modaltitle="Letra"
              modalbody="Cerebro cerebro"
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/5ku6b33rHAA"}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/Hz9lhqxl_gQ"}
            />
          </div>
          <h1>Fórmula, vol. 2</h1>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/RuDP5KZ0ZLQ"}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/DXiXPhvYuNU"}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/8iPcqtHoR3U"}
            />
          </div>
          <h1>Golden</h1>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/JNkTNAknE4I"}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/FAq4OIRDo68"}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/RSRzIrOqaN4"}
            />
          </div>
          <h1>Utopía</h1>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/XlmaJ-yU46U"}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/cOy4siyFp0U"}
            />
          </div>
          <div className="col-md-4">
            <Card
              title="Card title "
              description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
              buttonTittle="Find Out More"
              video={"https://www.youtube.com/embed/9xF5dvFmNcU"}
            />
          </div>
        </div>

        <Modal />
        <Carusel />
      </div>

      {/* <Footer /> */}
    </>
  );
}

export { PaginaPrincipal };
