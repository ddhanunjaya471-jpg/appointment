const db = require("../config/db");


// GET all patients

const getPatients = (req, res) => {

    const sql = "SELECT * FROM patients";

    db.query(sql, (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database error"
            });

        }

        res.json(result);

    });

};


// GET patient by ID

const getPatientById = (req, res) => {

    const id = Number(req.params.id);

    const sql = "SELECT * FROM patients WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database error"
            });

        }


        if (result.length === 0) {

            return res.status(404).json({
                message: "Patient not found"
            });

        }


        res.json(result[0]);

    });

};


// POST patient

const createPatient = (req, res) => {

    const {
        name,
        age,
        gender,
        phone,
        email
    } = req.body;


    const sql = `
        INSERT INTO patients
        (name, age, gender, phone, email)
        VALUES (?, ?, ?, ?, ?)
    `;


    db.query(
        sql,
        [
            name,
            age,
            gender,
            phone,
            email
        ],
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Failed to create patient"
                });

            }


            res.status(201).json({

                message: "Patient created successfully",

                patientId: result.insertId

            });

        }
    );

};


module.exports = {
    getPatients,
    getPatientById,
    createPatient
};