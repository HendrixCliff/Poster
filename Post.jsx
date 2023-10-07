import { useState } from "react";

export default function Post({ post, onDelete }) {
  const [isEditing, setIsEditing] = useState(false);
  const [editTitle, setEditTitle] = useState(post.title);
  const [editBody, setEditBody] = useState(post.body);
  function handleEdit() {
    setIsEditing(true);
  }
  function handleCancel() {
    setIsEditing(false);
  }
  function handleSave() {
    post.title = editTitle;
    post.body = editBody;
    setIsEditing(false);
  }
  return (
    <div>
      {isEditing
        ? (<div>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </div>)(
            <div>
              <button onClick={handleEdit}>Edit</button>
              <button onClick={() => onDelete}>Delete</button>
            </div>
          )
        : (<div>
            <input
              type="text"
              value={editTitle}
              onChange={(event) => setEditTitle(event.target)}
            />
            <input
              type="text"
              value={editBody}
              onChange={(event) => setEditBody(event.target)}
            />
          </div>)(
            <div>
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          )}
    </div>
  );
}
