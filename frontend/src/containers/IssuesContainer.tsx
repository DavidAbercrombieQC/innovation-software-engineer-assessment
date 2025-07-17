import React, {useState} from "react";
import IssuesList from "../components/IssuesList";
import IssueForm from "../components/IssueForm";

const IssuesContainer: React.FC = () => {

    const [issues, setIssues] = useState<any[]>(
        [
            {
                id: 2,
                title: 'Example Issue 2',
                description: 'This is another issue description.',
                priority: 'Medium',
                status: 'Open'
            },
            {
                id: 3,
                title: 'Example Issue 3',
                description: 'This is a third issue description.',
                priority: 'Low',
                status: 'Closed'
            },
        ]
    );

    const addIssue = (submittedIssue) => {
        submittedIssue.id = Math.floor(Math.random() * 10000);
        const updatedIssues = [...issues, submittedIssue];
        setIssues(updatedIssues);
    }

    return (
        <>
            <h1>This is the issues container.</h1>
            <IssuesList issues = {issues} />
            <h2>Create a new issue:</h2>
            <IssueForm onIssueSubmit={(issue) => addIssue(issue)}/>
        </>
    );
}

export default IssuesContainer;