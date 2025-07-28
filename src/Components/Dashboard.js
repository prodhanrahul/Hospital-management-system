import React, { useEffect, useState } from "react";
import "./Dashboard.css";

const Dashboard = () => {
  const [section, setSection] = useState("dashboard");

  const [patients, setPatients] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [appointments, setAppointments] = useState([]);

  const [showPatientForm, setShowPatientForm] = useState(false);
  const [showDoctorForm, setShowDoctorForm] = useState(false);
  const [showAppointmentForm, setShowAppointmentForm] = useState(false);

  useEffect(() => {
    fetchPatients();
    fetchDoctors();
    fetchAppointments();
  }, []);

  const fetchPatients = async () => {
    const res = await fetch("/api/patients");
    const data = await res.json();
    setPatients(data);
  };

  const fetchDoctors = async () => {
    const res = await fetch("/api/doctors");
    const data = await res.json();
    setDoctors(data);
  };

  const fetchAppointments = async () => {
    const res = await fetch("/api/appointments");
    const data = await res.json();
    setAppointments(data);
  };

  const handleAddPatient = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      age: form.age.value,
      gender: form.gender.value,
      condition: form.condition.value,
    };
    const res = await fetch("/api/patients", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      fetchPatients();
      form.reset();
      setShowPatientForm(false);
    }
  };

  const handleAddDoctor = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      specialty: form.specialty.value,
      availability: form.availability.value,
    };
    const res = await fetch("/api/doctors", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      fetchDoctors();
      form.reset();
      setShowDoctorForm(false);
    }
  };

  const handleAddAppointment = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      patient: form.patient.value,
      doctor: form.doctor.value,
      date: form.date.value,
      time: form.time.value,
    };
    const res = await fetch("/api/appointments", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    if (res.ok) {
      fetchAppointments();
      form.reset();
      setShowAppointmentForm(false);
    }
  };

  const renderTable = (items, columns, type) => (
    <>
      <table>
        <thead>
          <tr>{columns.map((col) => <th key={col}>{col}</th>)}</tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              {Object.values(item).map((val, idx) => (
                <td key={idx}>{val}</td>
              ))}
              <td><button onClick={() => alert("Implement delete logic")}>Remove</button></td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );

  return (
    <div className="dashboard-container">
      <aside className="sidebar">
        <h2>Hospital Admin</h2>
        <ul>
          {["dashboard", "patients", "appointments", "doctors", "settings", "logout"].map((sec) => (
            <li key={sec} onClick={() => setSection(sec)}>
              {sec.charAt(0).toUpperCase() + sec.slice(1)}
            </li>
          ))}
        </ul>
      </aside>

      <main className="main-content">
        <header>
          <h1>{section.charAt(0).toUpperCase() + section.slice(1)}</h1>
        </header>

        {section === "dashboard" && <p>Welcome to the Hospital Admin Dashboard.</p>}

        {section === "patients" && (
          <>
            {renderTable(patients, ["ID", "Name", "Age", "Gender", "Condition", "Action"], "patients")}
            <button className="add-btn" onClick={() => setShowPatientForm(!showPatientForm)}>+ Add Patient</button>
            {showPatientForm && (
              <form onSubmit={handleAddPatient} className="form-section">
                <input name="name" placeholder="Name" required />
                <input name="age" type="number" placeholder="Age" required />
                <select name="gender" required>
                  <option value="">Gender</option>
                  <option>Male</option>
                  <option>Female</option>
                </select>
                <input name="condition" placeholder="Condition" required />
                <button type="submit">Submit</button>
              </form>
            )}
          </>
        )}

        {section === "doctors" && (
          <>
            {renderTable(doctors, ["ID", "Name", "Specialty", "Availability", "Action"], "doctors")}
            <button className="add-btn" onClick={() => setShowDoctorForm(!showDoctorForm)}>+ Add Doctor</button>
            {showDoctorForm && (
              <form onSubmit={handleAddDoctor} className="form-section">
                <input name="name" placeholder="Name" required />
                <input name="specialty" placeholder="Specialty" required />
                <input name="availability" placeholder="Availability" required />
                <button type="submit">Submit</button>
              </form>
            )}
          </>
        )}

        {section === "appointments" && (
          <>
            {renderTable(appointments, ["ID", "Patient", "Doctor", "Date", "Time", "Action"], "appointments")}
            <button className="add-btn" onClick={() => setShowAppointmentForm(!showAppointmentForm)}>+ Add Appointment</button>
            {showAppointmentForm && (
              <form onSubmit={handleAddAppointment} className="form-section">
                <input name="patient" placeholder="Patient" required />
                <input name="doctor" placeholder="Doctor" required />
                <input name="date" type="date" required />
                <input name="time" type="time" required />
                <button type="submit">Submit</button>
              </form>
            )}
          </>
        )}

        {section === "settings" && <p>System settings go here.</p>}
        {section === "logout" && <p>You have been logged out.</p>}
      </main>
    </div>
  );
};

export default Dashboard;
