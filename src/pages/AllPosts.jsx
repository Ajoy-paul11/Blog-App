import React, { useState } from "react";
import { Container, PostCard } from "../components";
import appwriteService from "../appwrite/config";

function AllPosts() {
  const [posts, setPosts] = useState([]);

  React.useEffect(() => {
    appwriteService.getPosts([]).then((posts) => {
      if (posts) setPosts(posts.documents);
    });
  }, []);

  if (posts.length === 0) {
    return (
      <Container>
        <div className=" m-12 text-2xl">
          No post created to show. Create One!
        </div>
      </Container>
    );
  }

  return (
    <div className=" w-full py-8">
      <Container>
        <div className=" flex flex-wrap">
          {posts.map((post) => (
            <div key={post.$id} className=" p-2 w-1/4">
              <PostCard {...post} />
            </div>
          ))}
        </div>
      </Container>
    </div>
  );
}

export default AllPosts;
