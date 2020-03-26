import React from "react";
import style from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
  return (
    <div>
      My Posts
      <div>
        <textarea cols="30" rows="10"></textarea>
        <button>Add Post</button>
      </div>
      <div className={style.posts}>
        <Post message="Hi, How are you?" like="15" />
        <Post message="It's my first post" like="20" />
      </div>
    </div>
  );
};
export default MyPosts;
