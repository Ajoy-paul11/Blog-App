import React, { useState, useEffect } from "react";
import appwriteService from "../appwrite/config";
import { Container, PostCard } from "../components";
import { useSelector } from "react-redux";

function Home() {
  const [posts, setPosts] = useState([]);
  const authStatus = useSelector((state) => state.auth.status);

  useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  if (authStatus) {
    if (posts.length > 0) {
      return (
        <div className=" w-full py-8">
          <Container>
            <div className=" flex flex-wrap">
              {posts.map((post) => (
                <div key={post.$id} className=" p-2 w-full md:w-1/2 lg:w-1/4">
                  <PostCard {...post} />
                </div>
              ))}
            </div>
          </Container>
        </div>
      );
    } else {
      return (
        <div className=" m-12 text-2xl">
          No post created to show. Create One!
        </div>
      );
    }
  } else {
    return (
      <div className=" w-full py-8 text-center">
        <Container>
          <div className=" flex flex-wrap">
            <div className=" p-2 w-full">
              <h1 className=" text-2xl font-bold hover:bg-gray-500">
                Login to read Post!
              </h1>
            </div>
          </div>
        </Container>
      </div>
    );
  }
}

export default Home;
