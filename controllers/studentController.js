const register = (req, res) => {
    // Registration logic here
    res.status(201).json({ message: "User registered successfully!" });
};

const login = (req, res) => {
    // Login logic here
    res.status(200).json({ message: "User logged in successfully!" });
};

module.exports = {
    register,
    login
};
