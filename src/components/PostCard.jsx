import React from "react";
import appwriteService from "../appwrite/config";
import { Link } from "react-router-dom";

function PostCard({ $id, title, featuredImage }) {
  return (
    <Link to={`/post/${$id}`}>
      <div className=" w-full bg-[#FAF9F6]/80 rounded-xl p-4 flex flex-col  max-h-[310px] overflow-hidden shadow-lg shadow-[#00ADB5]">
        <div className=" w-full flex justify-center mb-4">
          <img
            src={appwriteService.getFilePreview(featuredImage)}
            alt={title}
            className=" rounded-xl h-[220px] bg-contain object-cover"
          />
        </div>
        <h2 className=" text-xl font-bold grow">{title}</h2>
      </div>
    </Link>
  );
}

export default PostCard;
