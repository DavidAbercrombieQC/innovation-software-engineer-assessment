import React from 'react';
import Issue from './Issue';

const IssuesList = ({issues}) => {

    const issueNodes = issues.map(issue => {
        return (
            <Issue key={issue.id} title={issue.title}>
                {issue.description} - Priority: {issue.priority} | Status: {issue.status}
            </Issue>
        );
    });

    return (
        <>
            {issueNodes}
        </>
    );
}

export default IssuesList;