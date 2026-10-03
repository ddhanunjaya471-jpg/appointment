-- =========================================
-- MediConnect Database
-- =========================================


-- Create Database

CREATE DATABASE IF NOT EXISTS mediconnect;

USE mediconnect;


-- =========================================
-- Doctors Table
-- =========================================

CREATE TABLE IF NOT EXISTS doctors (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    specialization VARCHAR(100) NOT NULL,

    experience INT,

    phone VARCHAR(20),

    email VARCHAR(100)

);


-- =========================================
-- Patients Table
-- =========================================

CREATE TABLE IF NOT EXISTS patients (

    id INT AUTO_INCREMENT PRIMARY KEY,

    name VARCHAR(100) NOT NULL,

    age INT,

    gender VARCHAR(20),

    phone VARCHAR(20),

    email VARCHAR(100)

);


-- =========================================
-- Appointments Table
-- =========================================

CREATE TABLE IF NOT EXISTS appointments (

    id INT AUTO_INCREMENT PRIMARY KEY,

    patient_id INT NOT NULL,

    doctor_id INT NOT NULL,

    appointment_date DATE NOT NULL,

    appointment_time TIME NOT NULL,

    status VARCHAR(30) DEFAULT 'Pending',

    FOREIGN KEY (patient_id)
        REFERENCES patients(id),

    FOREIGN KEY (doctor_id)
        REFERENCES doctors(id)

);


-- =========================================
-- Sample Doctors
-- =========================================

INSERT INTO doctors
(name, specialization, experience, phone, email)
VALUES
(
    'Dr. Ravi Kumar',
    'Cardiologist',
    10,
    '9876543210',
    'ravi@gmail.com'
),
(
    'Dr. Priya Sharma',
    'Dermatologist',
    7,
    '9876543211',
    'priya@gmail.com'
),
(
    'Dr. Arjun Rao',
    'General Physician',
    5,
    '9876543212',
    'arjun@gmail.com'
);


-- =========================================
-- Sample Patients
-- =========================================

INSERT INTO patients
(name, age, gender, phone, email)
VALUES
(
    'Dhanu',
    20,
    'Male',
    '9000000001',
    'dhanu@gmail.com'
),
(
    'Rahul',
    22,
    'Male',
    '9000000002',
    'rahul@gmail.com'
);