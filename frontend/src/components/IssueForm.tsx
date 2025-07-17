import React, {useState} from "react";

const IssueForm = ({onIssueSubmit}) => {

    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    const [priority, setPriority] = useState("");

    const handleTitleChange = (evt) => {
        setTitle(evt.target.value);
    };

    const handleDescriptionChange = (evt) => {
        setDescription(evt.target.value);
    };

    const handlePriorityChange = (evt) => {
        setPriority(evt.target.value);
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const titleToSubmit = title.trim();
        const descriptionToSubmit = description.trim();
        const priorityToSubmit = priority.trim();
        if (!titleToSubmit || !descriptionToSubmit || !priorityToSubmit) {
            return;
        }

        onIssueSubmit({
            title: title,
            description: description,
            priority: priority,
            status: 'Open'
        });

        setTitle("");
        setDescription("");
        setPriority("");
    }

    return (
        <form className="issue-form" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Issue Title"
                value={title}
                onChange={handleTitleChange}
            />
            <input
                type="text"
                placeholder="Description"
                value={description}
                onChange={handleDescriptionChange}
            />
            <input
                type="text"
                placeholder="Priority"
                value={priority}
                onChange={handlePriorityChange}
            />
            <input
                type="submit"
                value="Post"
            />
        </form>
    )

}

export default IssueForm;