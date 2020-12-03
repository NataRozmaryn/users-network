import React, { useState, useEffect } from 'react';
// import { getPostCommentsList } from '../../db';
import CommentMessage from './CommentMessage';
import CommentOwner from './CommentOwner';
import Loader from '../Loader';
import Separator from '../Separator/Separator';
import { useCommentData } from '../../ContentDataContext/CommentContextData';



// const CommentsList = ({match, postid}) => {
//     const postId = postid || match && match.params;
//     const [commentsList, setCommentsList] = useState([]);
//     const [loading, setLoading] = useState(true);
//   useEffect(() => {
//     setLoading(true);
//     if (!commentsList.length) {
//       getPostCommentsList(postId).then(res => {
//         console.log('all comments', res.data);
//         setCommentsList(res.data);
//       }).finally(() => setLoading(false));
//     }
//   }, [postId]);

// return (
//   <div className="comments-wrapper">
//     <h3>Comment Page</h3>
//     {loading ? <Loader /> :
//       commentsList && commentsList.map((comment) => <div className="comment" key={comment.id}>
//         <CommentOwner owner={comment.owner}/>
//         <Separator />
//         <CommentMessage 
//           comment={comment.message} 
//           publishDate={comment.publishDate} />
//         </div>)
//     }
//   </div>
//   )

// };
const CommentsList = (props) => {
  console.log("useCommentData", useCommentData);
  const data = useCommentData();
  let loading = false;

  console.log("status", data);
  if (data.status === 'LOADING') {
    loading = true;
  } else if (data.status === 'ERROR') {
    return <div>Unable to load comments data</div>;
  }

  console.log("comments", data);
  return (
    <div className="comments-wrapper">
      <h3>Comment Page</h3>
      {loading ? <Loader /> :
        data.value && data.value.map((comment) => <div className="comment" key={comment.id}>
          <CommentOwner owner={comment.owner} />
          <Separator />
          <CommentMessage
            comment={comment.message}
            publishDate={comment.publishDate} />
        </div>)
      }
    </div>
  )
};

export default CommentsList;