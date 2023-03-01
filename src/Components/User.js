import React from "react";
import Userimg from "../assets/Userimg.png";
import note from "../assets/note.png";
import note2 from "../assets/note2.png";
import UserInfo from "./UserInfo";

const User = () => {
  return (
    <article className="user-section">
      <section className="main-user">
        <div className="user-data">
          <img src={Userimg} alt="" />
          <h1>Diane Cooper</h1>
          <p className="email">diane.cooper@example.com</p>
          <div>
            <p className="borderP">
              15 <span>Past</span>
            </p>
            <p>
              02 <span>Upcoming</span>
            </p>
          </div>
          <button type="button">Send Message</button>
        </div>
        <div className="user-results">
          <h3>Files / Documents</h3>
          <ul>
            <li className="user-result">
              <img src={note} alt="note" />
              <span> Check Up Results.pdf</span>
            </li>
            <li className="user-result">
              <img src={note} alt="note" />
              <span> Check Up Results.pdf</span>
            </li>
            <li className="user-result">
              <img src={note} alt="note" />
              <span> Medical Prescription.pdf</span>
            </li>
            <li className="user-result">
              <img src={note} alt="note" />
              <span> Dental X-Ray Result.pdf</span>
            </li>
          </ul>
        </div>
      </section>
      <section className="user-info">
        <div className="user-details">
          <UserInfo title={'Gender'} detail={'Female'} />
          <UserInfo title={'Birthday'} detail={'Feb 24th, 1997'} />
          <UserInfo title={'Phone Number'} detail={'(239) 555 -0108'} />
          <UserInfo title={'Registered Date'} detail={'Feb 24th, 1997'} />
          <UserInfo title={'Street Address'} detail={'JL. Diponegoro No. 21'} />
          <UserInfo title={'City'} detail={'Cilacap'} />
          <UserInfo title={'Zip Code'} detail={'655849'} />
          <UserInfo title={'Member Status'} detail={'Active Member'} />
        </div>
        <div className="user-appointments">
          <div class="btn-group" role="group">
            <button type="button" class="btn btn-secondary">
              Upcoming Appointments
            </button>
            <button type="button" class="btn">
              Past Appointments
            </button>
            <button type="button" class="btn">
              Medical Records
            </button>
          </div>
          <div className="user-appointment-section">
            <div className="user-appointment-header">
              <p>Root Canal Treatment</p>
              <button type="button">Show Previous Treatments</button>
            </div>
            <div className="user-appointment-details">
              <div className="user-appointment">
                <div>
                  <h2>26 Nov '19</h2>
                  <p>09.00 - 10.00</p>
                </div>
                <div>
                  <p>Treatment</p>
                  <span>Open Access</span>
                </div>
                <div>
                  <p>Dentist</p>
                  <span>Drg. Adam H.</span>
                </div>
                <div>
                  <p>Nurse</p>
                  <span>Jessicamila</span>
                </div>
                <span className="note">
                  <img src={note2} alt="note" />
                  Note
                </span>
              </div>
              <div className="user-appointment">
                <div>
                  <h2>12 Nov '19</h2>
                  <p>09.00 - 10.00</p>
                </div>
                <div>
                  <p>Treatment</p>
                  <span>Root Canal</span>
                </div>
                <div>
                  <p>Dentist</p>
                  <span>Drg. Adam H.</span>
                </div>
                <div>
                  <p>Nurse</p>
                  <span>Jessicamila</span>
                </div>
                <span className="note">
                  <img src={note2} alt="note" />
                  Note
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </article>
  );
};

export default User;
