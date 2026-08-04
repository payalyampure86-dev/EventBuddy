const express = require("express");
const router = express.Router();

const {
  createEvent,
  getEvents,
  updateEvent,
  deleteEvent,
  saveEvent,
  getSavedEvents,
  removeSavedEvent,
} = require("../controllers/eventController");

// Event CRUD
router.post("/", createEvent);
router.get("/", getEvents);
router.put("/:id", updateEvent);
router.delete("/:id", deleteEvent);

// Saved Events
router.post("/save", saveEvent);
router.get("/saved/:userId", getSavedEvents);
router.delete("/unsave", removeSavedEvent);

module.exports = router;