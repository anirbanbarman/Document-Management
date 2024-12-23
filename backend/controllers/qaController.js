const mockData = {
    answer: 'This is a sample answer generated by the system.',
    documents: [
      { id: 1, title: 'Document 1', description: 'This is an demo from document 1.' },
      { id: 2, title: 'Document 2', description: 'This is an demo from document 2.' },
      { id: 3, title: 'Document 3', description: 'This is an demo from document 3.' },
    ],
  };
  
  // Controller to handle question submission
  const askQuestion = (req, res) => {
    const { question } = req.body;
  
    if (!question || question.trim() === '') {
      return res.status(400).send({ error: 'Question is required.' });
    }
  
    // Simulate processing the question
    console.log(`Received Question: ${question}`);
    
    // Respond with mock data (replace with actual logic in production)
    res.status(200).send({
      message: 'Question processed successfully!',
      answer: mockData.answer,
      documents: mockData.documents,
    });
  };
  
  // Controller to fetch Q&A status or results
  const getQAStatus = (req, res) => {
    // Respond with mock data
    res.status(200).send({
      answer: mockData.answer,
      documents: mockData.documents,
    });
  };
  
  module.exports = { askQuestion, getQAStatus };
  