var Admin = require("../models/adminModel");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

module.exports.getAllUsers = (req, res, next) => {
  Admin.find((err, admins) => {
    if (err) throw err;
    res.send(admins);
  });
};

module.exports.getUserById = function (req, res, next) {
  Admin.findById(req.params.id, (err, admin) => {
    if (err) throw err;
    res.send(admin);
  });
};

module.exports.saveUser = async (req, res) => {
  try {
    // Get user input
    const {
      fullName,
      email,
      password,
      confirmPassword,
      address,
      card,
      created_at,
    } = req.body;

    // Validate user input
    if (!(email && password && fullName && confirmPassword)) {
      res.status(400).send("All input is required");
    }
    // check if user already exist
    // Validate if user exist in our database
    const oldAdmin = await Admin.findOne({ email });

    if (oldAdmin) {
      return res.status(409).send("Admin Already Exist. Please Login");
    }

    //Encrypt user password
    encryptedPassword = await bcrypt.hash(password, 10);

    // Create user in our database
    const admin = await Admin.create({
      fullName,
      email: email.toLowerCase(), // sanitize: convert email to lowercase
      password: encryptedPassword,
      confirmPassword: encryptedPassword,
      address,
      card,
      created_at,
    });

    // Create token
    const token = jwt.sign(
      { admin_id: admin._id, email },
      process.env.TOKEN_KEY,
      {
        expiresIn: "2h",
      }
    );
    // save user token
    admin.token = token;

    // return new user
    console.log(admin);
    res.status(201).json(admin);
  } catch (err) {
    console.log(err);
  }
};

module.exports.updateAddressAndCard = (req, res) => {
  var id = req.params.id;
  Admin.findById(id, (err, admin) => {
    if (err) throw err;
    if (!admin) return res.status(404).send("User doesnt exist with this Id.");

    Admin.findByIdAndUpdate(req.params.id, req.body, (err) => {
      if (err) throw err;
      res.send(admin);
    });
  });
};

module.exports.editUser = (req, res) => {
  Admin.findById(req.params.id, (err, admin) => {
    if (err) throw err;
    if (!admin) return res.status(404).send("Admin doesnt exist with this Id.");

    let updateduser = {
      fullName: req.body.fullName,
      email: req.body.email,
      password: req.body.password,
      confirmPassword: req.body.confirmPassword,
      address: req.body.address,
      card: req.body.card,
    };

    Admin.findByIdAndUpdate(req.params.id, updateduser, (err) => {
      if (err) throw err;
      res.send(updateduser);
    });
  });
};
module.exports.loginAdmin = async (req, res, next) => {
  // Our login logic starts here
  try {
    // Get user input
    const email = req.body.email;
    const password = req.body.password;

    // Validate user input
    if (!(email && password)) {
      res.status(400).send("All input is required");
    }
    // Validate if user exist in our database
    const admin = await Admin.findOne({ email: email });

    if (admin && (await bcrypt.compare(password, admin.password))) {
      console.log("Hello");
      // Create token
      const token = jwt.sign(
        { admin_id: admin._id, email },
        process.env.TOKEN_KEY,
        {
          expiresIn: "2h",
        }
      );

      // save user token
      admin.token = token;

      // user
      console.log(admin);
      res.send(admin);
    }
  } catch (err) {
    console.log(err);
  }
};
module.exports.deleteAdmin = (req, res) => {
  Admin.findById(req.params.id, (err, admin) => {
    if (err) throw err;
    if (!admin) return res.status(404).send("User doesnt exist with this Id.");
    Admin.findByIdAndRemove(req.params.id, (err) => {
      if (err) throw err;
      res.send(admin);
    });
  });
};

module.exports.getAllRequest = (req, res)=> {

}
