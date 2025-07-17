import express from 'express';
import cors from 'cors';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(cors());
app.use(express.json());

// TODO: Implement your API endpoints here
// Required endpoints:
// - GET /api/issues - Get all issues
// - POST /api/issues - Create a new issue
// - PUT /api/issues/:id - Update an issue's status

interface Issue {
  id: number;
  title: string;
  description: string;
  priority: string;
  status: string;
}

const issues: Issue[] = [
  {
    id: 1,
    title: 'Sample Issue',
    description: 'This is a sample issue description.',
    priority: 'High',
    status: 'Open'
  }
];

// Health check endpoint
app.get('/health', (req, res) => {
  res.status(200).json({ status: 'OK', timestamp: new Date().toISOString() });
});

// Placeholder endpoints with TODO comments
app.get('/api/issues', (req, res) => {
  // TODO: Implement getting all issues
  res.json(issues);
});

app.post('/api/issues', (req, res) => {
  // TODO: Implement creating a new issue
  issues.push(req.body);
  res.json(issues);
});

app.put('/api/issues/:id', (req, res) => {
  // TODO: Implement updating an issue's status
  const issueId = Number(req.params.id);
  issues[issueId] = req.body;
  res.json(issues);
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

export default app;
