const Event = require("../models/Event");
const User = require("../models/User");

// Create Event
exports.createEvent = async (req, res) => {
  try {
    const event = new Event(req.body);

    const savedEvent = await event.save();

    res.status(201).json({
      message: "Event created successfully",
      event: savedEvent,
    });
  } catch (error) {
    console.error("Create Event Error:", error);

    res.status(500).json({
      message: "Failed to create event",
      error: error.message,
    });
  }
};

// Get All Events
exports.getEvents = async (req, res) => {
  try {
    const events = await Event.find();

    res.status(200).json(events);
  } catch (error) {
    console.error("Get Events Error:", error);

    res.status(500).json({
      message: "Failed to fetch events",
      error: error.message,
    });
  }
};

// Update Event
exports.updateEvent = async (req, res) => {
  try {
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event updated successfully",
      event: updatedEvent,
    });
  } catch (error) {
    console.error("Update Event Error:", error);

    res.status(500).json({
      message: "Failed to update event",
      error: error.message,
    });
  }
};

// Delete Event
exports.deleteEvent = async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);

    if (!deletedEvent) {
      return res.status(404).json({
        message: "Event not found",
      });
    }

    res.status(200).json({
      message: "Event deleted successfully",
    });
  } catch (error) {
    console.error("Delete Event Error:", error);

    res.status(500).json({
      message: "Failed to delete event",
      error: error.message,
    });
  }
};

// Save Event
exports.saveEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    if (user.savedEvents.includes(eventId)) {
      return res.status(400).json({
        message: "Event already saved",
      });
    }

    user.savedEvents.push(eventId);
    await user.save();

    res.status(200).json({
      message: "Event saved successfully",
    });
  } catch (error) {
    console.error("Save Event Error:", error);

    res.status(500).json({
      message: "Failed to save event",
      error: error.message,
    });
  }
};

// Get Saved Events
exports.getSavedEvents = async (req, res) => {
  try {
    const user = await User.findById(req.params.userId).populate("savedEvents");

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    res.status(200).json(user.savedEvents);
  } catch (error) {
    console.error("Get Saved Events Error:", error);

    res.status(500).json({
      message: "Failed to fetch saved events",
      error: error.message,
    });
  }
};

// Remove Saved Event
exports.removeSavedEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    await User.findByIdAndUpdate(userId, {
      $pull: {
        savedEvents: eventId,
      },
    });

    res.status(200).json({
      message: "Event removed successfully",
    });
  } catch (error) {
    console.error("Remove Saved Event Error:", error);

    res.status(500).json({
      message: "Failed to remove saved event",
      error: error.message,
    });
  }
};