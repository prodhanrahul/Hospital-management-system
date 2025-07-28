import React from 'react'
import "./Home.css"
import cardio from "../images/cardiolgy.jpg";
import ent from "../images/ENT.jpg";
import immuno from "../images/immunology.jpg";
import nuro from "../images/nurology.jpg";
import ortho from "../images/orthopredics.jpg";
import radio from "../images/radiology.jpg";
import pedia from "../images/pedriatic.jpg";

function Depeartment() {
  return (
    <div>
        <h1 className="section-title">Our's Departments</h1>
        <div className="card-container">
          <div className="card">
            <div className="card-icon">
              <img src={cardio} alt="cardiolgy"/>
            </div>
            <h3>Cardiology</h3>
            <p>Advanced care for heart-related conditions and cardiac surgeries.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={nuro} alt="nurology" />
            </div>
            <h3>Neurology</h3>
            <p>Expert treatment for brain, spine, and nervous system disorders.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={radio} alt="radiology" />
            </div>
            <h3>Radiology</h3>
            <p>Modern diagnostic imaging including X-rays, MRI, and CT scans.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={pedia} alt="Pediatrics" />
            </div>
            <h3>Pediatrics</h3>
            <p>Comprehensive care for infants, children, and adolescents.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={immuno} alt="immunology" />
            </div>
            <h3>Immunology</h3>
            <p>Specialized vaccines and treatments for immune system disorders.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={ortho} alt="Orthopedics" srcSet="" />
            </div>
            <h3>Orthopedics</h3>
            <p>Expert care for bones, joints, and musculoskeletal conditions.</p>
          </div>
          <div className="card">
            <div className="card-icon">
              <img src={ent} alt="ENT" />
            </div>
            <h3>ENT</h3>
            <p>
              Expert care for ear, nose, and throat-related disorders and surgeries.
            </p>
          </div>
        </div>
    </div>
  )
}

export default Depeartment
