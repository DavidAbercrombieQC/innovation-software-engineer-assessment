import React, {useEffect, useState} from 'react'
import IssuesContainer from './containers/IssuesContainer';

function App() {

  const [issues, setIssues] = useState<any[]>([]);

  useEffect(() => {
    fetchIssues();
  }, []);

  const fetchIssues = () => {
    fetch('http://localhost:3001/api/issues')
      .then(response => response.json())
      .then(issues => setIssues(Array.isArray(issues) ? issues : []))
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Issue Tracker</h1>
        
        {/* TODO: Implement your issue tracking application here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <IssuesContainer />
          {issues.map(issue => (
            <div key={issue.id} className="mb-4 p-4 border rounded">
              <h2 className="text-xl font-semibold">{issue.title}</h2>
              <p className="text-gray-700">{issue.description}</p>
              <p className="text-sm text-gray-500">Priority: {issue.priority} | Status: {issue.status}</p>
            </div>
          ))}
          <p className="text-gray-600">
            Welcome to the Issue Tracker! Please implement the following features:
          </p>
          <ul className="mt-4 space-y-2 text-sm text-gray-700">
            <li>• Submit new issues (title, description, priority, status)</li>
            <li>• View list of all issues</li>
            <li>• Filter issues by status and priority</li>
            <li>• Update issue status</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default App
