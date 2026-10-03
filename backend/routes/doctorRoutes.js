const express = require("express");

const router = express.Router();

const {
    getDoctors,
    getDoctorById,
    createDoctor
} = require("../controllers/doctorController");


// GET all doctors

router.get("/", getDoctors);


// GET one doctor

router.get("/:id", getDoctorById);


// POST doctor

router.post("/", createDoctor);


module.exports = router;

