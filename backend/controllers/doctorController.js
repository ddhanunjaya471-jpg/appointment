const db = require("../config/db");


// GET all doctors

const getDoctors = (req, res) => {

    const sql = "SELECT * FROM doctors";

    db.query(sql, (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database error"
            });

        }

        res.json(result);

    });

};


// GET doctor by ID

const getDoctorById = (req, res) => {

    const id = Number(req.params.id);

    const sql = "SELECT * FROM doctors WHERE id = ?";

    db.query(sql, [id], (err, result) => {

        if (err) {

            return res.status(500).json({
                message: "Database error"
            });

        }


        if (result.length === 0) {

            return res.status(404).json({
                message: "Doctor not found"
            });

        }


        res.json(result[0]);

    });

};


// POST doctor

const createDoctor = (req, res) => {

    const {
        name,
        specialization,
        experience,
        phone,
        email
    } = req.body;


    const sql = `
        INSERT INTO doctors
        (name, specialization, experience, phone, email)
        VALUES (?, ?, ?, ?, ?)
    `;


    db.query(
        sql,
        [
            name,
            specialization,
            experience,
            phone,
            email
        ],
        (err, result) => {

            if (err) {

                return res.status(500).json({
                    message: "Failed to create doctor"
                });

            }


            res.status(201).json({

                message: "Doctor created successfully",

                doctorId: result.insertId

            });

        }
    );

};


module.exports = {
    getDoctors,
    getDoctorById,
    createDoctor
};