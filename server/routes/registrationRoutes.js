const express = require("express");
const router = express.Router();

const registrationController = require("../controllers/registrationController");

// =========================
// Register Event
// =========================
router.post("/", registrationController.registerEvent);

// =========================
// Admin Financial Report
// =========================
router.get("/financial", registrationController.getFinancialReport);

// =========================
// Admin - Get All Registrations
// =========================
router.get("/", registrationController.getAllRegistrations);

// =========================
// User - Get My Registrations
// =========================
router.get("/:userId", registrationController.getUserRegistrations);

// =========================
// Delete Registration
// =========================
router.delete("/:id", registrationController.deleteRegistration);

module.exports = router;