import React from "react";

import posts from "../data/posts.js";
import Post from "./Post2";
import getPost from "../Api/postFetch";

const Feed = () => {
  // const [posts, setposts] = useState([])
  // useEffect(() => { getPost(setposts) }, [])

  return (
    <>
      {posts.length > 0 &&
        posts.map(({ user, postdetails }) => (
          <Post user={user} postdetails={postdetails} />
        ))}
    </>
  );
};

export default Feed;
