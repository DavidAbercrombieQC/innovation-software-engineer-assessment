import React from 'react'
import IssuesContainer from './containers/IssuesContainer';

function App() {

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Issue Tracker</h1>
        
        {/* TODO: Implement your issue tracking application here */}
        <div className="bg-white rounded-lg shadow-md p-6">
          <IssuesContainer />
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
