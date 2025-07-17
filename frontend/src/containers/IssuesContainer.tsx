import React, {useState} from "react";
import IssuesList from "../components/IssuesList";

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

    return (
        <>
            <h1>This is the issues container.</h1>
            <IssuesList issues = {issues} />
        </>
    );
}

export default IssuesContainer;