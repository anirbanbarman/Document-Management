const ingestionProcesses = require('./ingestionController').ingestionProcesses;

// Get All Ingestion Processes
exports.listIngestionProcesses2 = (req, res) => {
    console.log("ingestionProcesses",ingestionProcesses)
  res.status(200).json({ processes: ingestionProcesses });
};
