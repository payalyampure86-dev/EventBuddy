const Registration = require("../models/Registration");
const Event = require("../models/Event");

// Register Event
exports.registerEvent = async (req, res) => {
  try {
    const { userId, eventId } = req.body;

    const exists = await Registration.findOne({
      user: userId,
      event: eventId,
    });

    if (exists) {
      return res.status(400).json({
        message: "Already registered for this event",
      });
    }

    const registration = await Registration.create({
      user: userId,
      event: eventId,
    });

    res.status(201).json({
      message: "Registration successful",
      registration,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Financial Report
exports.getFinancialReport = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate("user", "name email")
      .populate("event", "title fee");

    let totalRevenue = 0;

    const payments = registrations.map((reg) => {
      const amount = Number(reg.event?.fee || 0);
      totalRevenue += amount;

      return {
        _id: reg._id,
        user: reg.user?.name,
        email: reg.user?.email,
        event: reg.event?.title,
        amount,
      };
    });

    res.json({
      totalRevenue,
      totalBookings: registrations.length,
      payments,
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get All Registrations
exports.getAllRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find()
      .populate("user", "name email")
      .populate("event", "title date fee");

    res.json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Get User Registrations
exports.getUserRegistrations = async (req, res) => {
  try {
    const registrations = await Registration.find({
      user: req.params.userId,
    }).populate("event");

    res.json(registrations);
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};

// Delete Registration
exports.deleteRegistration = async (req, res) => {
  try {
    await Registration.findByIdAndDelete(req.params.id);

    res.json({
      message: "Registration deleted successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).json({
      message: "Server Error",
    });
  }
};