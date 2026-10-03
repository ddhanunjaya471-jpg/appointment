const db = require("../config/db");


// GET all appointments

const getAppointments = (req, res) => {

    const sql = `
        SELECT
            appointments.id,
            patients.name AS patient_name,
            doctors.name AS doctor_name,
            doctors.specialization,
            appointments.appointment_date,
            appointments.appointment_time,
            appointments.status

        FROM appointments

        JOIN patients
        ON appointments.patient_id = patients.id

        JOIN doctors
        ON appointments.doctor_id = doctors.id
    `;


    db.query(sql, (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database error"
            });

        }

        res.json(result);

    });

};


// GET appointment by ID

const getAppointmentById = (req, res) => {

    const id = Number(req.params.id);


    const sql = `
        SELECT
            appointments.id,
            patients.name AS patient_name,
            doctors.name AS doctor_name,
            doctors.specialization,
            appointments.appointment_date,
            appointments.appointment_time,
            appointments.status

        FROM appointments

        JOIN patients
        ON appointments.patient_id = patients.id

        JOIN doctors
        ON appointments.doctor_id = doctors.id

        WHERE appointments.id = ?
    `;


    db.query(sql, [id], (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database error"
            });

        }


        if (result.length === 0) {

            return res.status(404).json({
                message: "Appointment not found"
            });

        }


        res.json(result[0]);

    });

};


// POST appointment

const createAppointment = (req, res) => {

    const {
        patient_id,
        doctor_id,
        appointment_date,
        appointment_time
    } = req.body;


    const sql = `
        INSERT INTO appointments
        (
            patient_id,
            doctor_id,
            appointment_date,
            appointment_time,
            status
        )

        VALUES (?, ?, ?, ?, ?)
    `;


    db.query(
        sql,
        [
            patient_id,
            doctor_id,
            appointment_date,
            appointment_time,
            "Pending"
        ],
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Failed to book appointment"
                });

            }


            res.status(201).json({

                message: "Appointment booked successfully",

                appointmentId: result.insertId

            });

        }
    );

};


module.exports = {
    getAppointments,
    getAppointmentById,
    createAppointment
};