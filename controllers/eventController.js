const addEvent = (req, res) => {
    // Logic to add an event
    res.status(201).json({ message: "Event added successfully!" });
};

const getLeaderboard = (req, res) => {
    // Logic to get leaderboard
    res.status(200).json({ message: "Leaderboard retrieved successfully!" });
};

module.exports = {
    addEvent,
    getLeaderboard
};
