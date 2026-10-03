const express = require("express");

const router = express.Router();

const {
    getAppointments,
    getAppointmentById,
    createAppointment
} = require("../controllers/appointmentController");


router.get("/", getAppointments);

router.get("/:id", getAppointmentById);

router.post("/", createAppointment);


module.exports = router;