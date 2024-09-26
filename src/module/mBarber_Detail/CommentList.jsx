import { useContext, useState } from "react";
import { CommentContext } from "./CommentContext";

const CommentList = ({reveiw}) => {
  // const { comments, updateLikes, updateDislikes, editComment, deleteComment } =
  //   useContext(CommentContext);
  // const [editMode, setEditMode] = useState(null);
  // const [editedComment, setEditedComment] = useState("");
  // const [likedComments, setLikedComments] = useState([]);
  // const [dislikedComments, setDislikedComments] = useState([]);

  // const handleEditChange = (e) => {
  //   setEditedComment(e.target.value);
  // };

  // const handleEditSubmit = (id) => {
  //   if (editedComment.trim() !== "") {
  //     editComment(id, editedComment);
  //     setEditMode(null);
  //     setEditedComment("");
  //   }
  // };

  // const handleCancelEdit = () => {
  //   setEditMode(null);
  //   setEditedComment("");
  // };

  // const handleLike = (id) => {
  //   if (!likedComments.includes(id)) {
  //     updateLikes(id);
  //     setLikedComments([...likedComments, id]);
  //     if (dislikedComments.includes(id)) {
  //       setDislikedComments(dislikedComments.filter((item) => item !== id));
  //     }
  //   }
  // };

  // const handleDislike = (id) => {
  //   if (!dislikedComments.includes(id)) {
  //     updateDislikes(id);
  //     setDislikedComments([...dislikedComments, id]);
  //     if (likedComments.includes(id)) {
  //       setLikedComments(likedComments.filter((item) => item !== id));
  //     }
  //   }
  // };

  const formatTime = (time) => {
    return new Date(time).toLocaleString();
  };

  return (
    <div className="space-y-5">
      {reveiw.map((comment) => (
        <div key={comment.id} className="p-6 border border-gray-500 drop-shadow-md rounded-md bg-white ">
          <p className="text-black mb-3 break-words whitespace-pre-wrap">
                {comment.comment}
              </p>
              <p className="text-gray-400 text-sm mt-1 ">
                {formatTime(comment.createdAt)}
              </p>
        </div>
      ))}
    </div>
  );
};

export default CommentList;
