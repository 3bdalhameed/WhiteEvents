import { useEffect, useState } from "react";
import { client } from "../lib/sanity";

export default function Blog() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const query = `*[_type == "post"] | order(publishedAt desc){
        _id,
        title,
        "image": mainImage.asset->url,
        body
      }`;
      const data = await client.fetch(query);
      setPosts(data);
    };

    fetchPosts();
  }, []);

  return (
    <section className="p-6">
      <h1 className="text-3xl font-bold mb-4">White Events Blog</h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {posts.map((post) => (
          <article
            key={post._id}
            className="bg-white shadow rounded-lg p-4 hover:shadow-lg transition"
          >
            <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
            {post.image && (
              <img
                src={post.image}
                alt={post.title}
                className="rounded-md mb-3"
              />
            )}
          </article>
        ))}
      </div>
    </section>
  );
}
