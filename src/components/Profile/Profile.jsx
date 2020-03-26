import React from "react";
import style from "./profile.module.css";
import MyPosts from "./MyPosts/MyPosts";
const Profile = () => {
  return (
    <div>
      <img className={style.img}
        src="https://previews.123rf.com/images/muchmaniavector/muchmaniavector1607/muchmaniavector160700044/64597409-construction-skyline-scene-blue-background-site-city-urban-facility.jpg"
        alt="bg"
      />
      <article>avatar + description</article>
      <MyPosts />
    </div>
  );
};

export default Profile;
