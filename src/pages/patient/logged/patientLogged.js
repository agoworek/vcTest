import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import styles from "./patientLogged.module.css";
import TimeSlotsList from "./timeSlotsList/timeSlotsList";
import Certificates from "./certificates/certificates";
import Navbar from "../../../components/Navbar";
import { sidebarData } from "../../../components/patient/SidebarData";
import IncomingApointments from "./incomingAppointments/incomingAppointmentsList";
import FormerApointments from "./formerAppointments/formerAppointments";

export default class PatientLogged extends Component {
  render() {
    return (
      <div className={styles.divset}>
        <Navbar sidebarData={sidebarData} />
        <Routes>
          <Route path="/formerAppointments" element={<FormerApointments />} />
          <Route
            path="/incomingAppointments"
            element={<IncomingApointments />}
          />
          <Route path="/timeSlots" element={<TimeSlotsList />} />
          <Route path="/certificates" element={<Certificates />} />
        </Routes>
      </div>
    );
  }
}
