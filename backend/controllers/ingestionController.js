 const ingestionProcesses = []; // Simulates database for ingestion status tracking

// Trigger Ingestion Process
exports.triggerIngestion = (req, res) => {
  const { source } = req.body;

  if (!source) {
    return res.status(400).json({ message: 'Source is required to trigger ingestion.' });
  }

  const processId = Date.now(); // Unique ID for ingestion
  ingestionProcesses.push({ id: processId, source, status: 'In Progress' });

  // Simulate asynchronous ingestion processing
  setTimeout(() => {
    const process = ingestionProcesses.find((p) => p.id === processId);
    if (process) process.status = 'Completed';
  }, 5000);

  res.status(202).json({ message: 'Ingestion triggered successfully.', processId });
};

// Get Ingestion Status
exports.getIngestionStatus = (req, res) => {
  const { id } = req.params;
  const process = ingestionProcesses.find((p) => p.id == id);

  if (!process) {
    return res.status(404).json({ message: 'Ingestion process not found.' });
  }

  res.status(200).json({ process });
};

exports.listIngestionProcesses = (req, res) => {
    console.log("ingestionProcesses",ingestionProcesses)
  res.status(200).json({ processes: ingestionProcesses });
};

