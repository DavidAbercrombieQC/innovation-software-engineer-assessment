import React, {useEffect, useState} from "react";
import IssuesList from "../components/IssuesList";
import IssueForm from "../components/IssueForm";

const IssuesContainer: React.FC = () => {

    const [issues, setIssues] = useState<any[]>([]);

    useEffect(() => {
        fetchIssues();
    }, []);

    const fetchIssues = () => {
        fetch('http://localhost:3001/api/issues')
            .then(response => response.json())
            .then(issues => setIssues(issues))
            .catch(error => console.error('Error fetching issues:', error));
    }

    const handleIssueSubmit = (newIssue) => {
        fetch('http://localhost:3001/api/issues', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(newIssue),
        })
        .then(() => fetchIssues())
    }

    return (
        <>
            <h1>This is the issues container.</h1>
            <IssuesList issues = {issues} />
            <h2>Create a new issue:</h2>
            <IssueForm onIssueSubmit={handleIssueSubmit}/>
        </>
    );
}

export default IssuesContainer;