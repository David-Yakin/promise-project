import getDataAsPromise from "./getArrayAsPromise.js";
import posts from "../data/posts.js";

export default function getPosts() {
  return getDataAsPromise(posts, "No posts found...");
}