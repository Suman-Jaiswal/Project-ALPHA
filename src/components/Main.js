import React from 'react';
import './Main.css';

export default function Main() {
  return (
    <div>
      <section id="intro">
        <p>Welcome to <strong>ALPHA </strong>Dance Academy</p>
        <p id="small">Eat Sleep Dance Repeat</p>
      </section>
      <section id="mission">
        <h2>Our Missions</h2>
        <div className="card">
          <h3>Dance Perfection</h3>
          <div className="card-box">
            <div className="card-img"> <img src="/static/img1.jpg" alt="" /></div>
            <div className="card-content">
              <p>This is the best dance academy of the universe</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Dance the wat you like</h3>
          <div className="card-box">
            <div className="card-img"> <img src="/static/img2.jpg" alt="" /></div>
            <div className="card-content">
              <p>This is the best dance academy of the universe</p>
            </div>
          </div>
        </div>
        <div className="card">
          <h3>Expert Teaching </h3>
          <div className="card-box">
            <div className="card-img"> <img src="/static/img3.jpg" alt="" /></div>
            <div className="card-content">
              <p>This is the best dance academy of the universe</p>
            </div>
          </div>
        </div>
      </section>
      <section id="sponsor">
        <h2>Our Sponsors</h2>
        <div className="sponsors"> <img src="/static/logo1.png" alt="" /><img src="/static/logo2.png " alt="" /><img src="/static/logo3.png" alt="" /><img src="/static/logo4.png" alt="" /></div>
      </section>
    </div>
  )
}
