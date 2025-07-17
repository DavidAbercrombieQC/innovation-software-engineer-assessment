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

    const resetForm = () => {
        setTitle("");
        setDescription("");
        setPriority("");
    };

    const handleFormSubmit = (evt) => {
        evt.preventDefault();
        const payload = {
            title,
            description,
            priority,
            status: 'Open'
        };

        onIssueSubmit(payload);

        resetForm();
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