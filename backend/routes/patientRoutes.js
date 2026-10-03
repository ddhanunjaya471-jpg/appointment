const express = require("express");

const router = express.Router();

const {
    getPatients,
    getPatientById,
    createPatient
} = require("../controllers/patientController");


router.get("/", getPatients);

router.get("/:id", getPatientById);

router.post("/", createPatient);


module.exports = router;