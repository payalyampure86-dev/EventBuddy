const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");


// =======================
// REGISTER USER
// =======================

const registerUser = async (req, res) => {
  try {
console.log("LOGIN BODY:", req.body);
    const { name, email, password, role } = req.body;
    // =======================
// FIXED ADMIN LOGIN
// =======================

if (
  role === "admin" &&
  email === process.env.ADMIN_EMAIL &&
  password === process.env.ADMIN_PASSWORD
) {
  const token = jwt.sign(
    {
      id: "admin",
      role: "admin"
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d"
    }
  );

  return res.status(200).json({
    message: "Admin Login Successful ✅",

    token,

    user: {
      id: "admin",
      name: "Admin",
      email: process.env.ADMIN_EMAIL,
      role: "admin"
    }
  });
}


    // Check existing user
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        message: "Email already registered"
      });
    }


    // Password hash
    const hashedPassword = await bcrypt.hash(password, 10);


    // Create user
  const user = await User.create({
  name,
  email,
  password: hashedPassword,
  role: role || "user"
});


    res.status(201).json({

      message: "Registration Successful ✅",

      user: {

        id: user._id,

        name: user.name,

        email: user.email,

        role: user.role

      }

    });


  } catch (error) {

    console.log(error);

    res.status(500).json({

      message: "Registration Failed",

      error: error.message

    });

  }
};





// =======================
// LOGIN USER
// =======================
const loginUser = async (req, res) => {
  try {
    console.log("LOGIN BODY:", req.body);

    const { email, password, role } = req.body;

    // =======================
    // FIXED ADMIN LOGIN
    // =======================

    if (
      role === "admin" &&
      email === process.env.ADMIN_EMAIL &&
      password === process.env.ADMIN_PASSWORD
    ) {
      console.log("FIXED ADMIN LOGIN SUCCESS");

      const token = jwt.sign(
        {
          id: "admin",
          role: "admin",
        },
        process.env.JWT_SECRET,
        {
          expiresIn: "7d",
        }
      );

      return res.status(200).json({
        message: "Admin Login Successful ✅",

        token,

        user: {
          id: "admin",
          name: "Admin",
          email: process.env.ADMIN_EMAIL,
          role: "admin",
        },
      });
    }

    // =======================
    // NORMAL USER LOGIN
    // =======================

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({
        message: "User not found",
      });
    }

    const isMatch = await bcrypt.compare(
      password,
      user.password
    );

    if (!isMatch) {
      return res.status(401).json({
        message: "Invalid Password",
      });
    }

    if (role && user.role !== role) {
      return res.status(401).json({
        message: `You are not registered as ${role}`,
      });
    }

    const token = jwt.sign(
      {
        id: user._id,
        role: user.role,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "7d",
      }
    );

    return res.status(200).json({
      message: "Login Successful ✅",

      token,

      user: {
        id: user._id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });

  } catch (error) {
    console.log("LOGIN ERROR:", error);

    return res.status(500).json({
      message: "Login Failed",
      error: error.message,
    });
  }
};