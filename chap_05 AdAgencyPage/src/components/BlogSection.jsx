/* eslint-disable no-unused-vars */
import { useState, useEffect } from "react";
import { motion } from "motion/react";

export default function BlogSection({ blogCategories, blogPosts }) {
  const [selectedCategory, setSelectedCategory] = useState("Strategy");
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);

  useEffect(() => {
    if (selectedCategory === "Strategy") {
      setFilteredPosts(blogPosts);
    } else {
      setFilteredPosts(blogPosts.filter((post) => post.category === selectedCategory));
    }
  }, [selectedCategory, blogPosts]);

  return (
    <section className="bg-white py-20" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.h2 className="text-3xl lg:text-4xl font-bold text-center text-gray-900 mb-12" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, ease: "easeOut" }} viewport={{ once: true }}>
          Read the blog
        </motion.h2>

        {/* Category Buttons */}
        <motion.div className="flex flex-wrap justify-center gap-3 mb-12" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.1 }} viewport={{ once: true }}>
          {blogCategories.map((category, index) => (
            <motion.button
              key={`${category}-${index}`}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${selectedCategory === category ? "bg-black text-white" : "bg-gray-100 text-gray-600 hover:bg-brand-orange hover:text-white"}`}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {category}
            </motion.button>
          ))}
        </motion.div>

        {/* Blog Posts */}
        <motion.div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto" initial="hidden" whileInView="visible" transition={{ staggerChildren: 0.15 }} viewport={{ once: true }}>
          {filteredPosts.map((post, index) => (
            <motion.article
              key={post.title}
              className="bg-gray-50 rounded-lg overflow-hidden shadow-sm cursor-pointer"
              variants={{
                hidden: { opacity: 0, y: 40 },
                visible: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.05, boxShadow: "0px 8px 24px rgba(0,0,0,0.15)" }}
              transition={{ duration: 0.3 }}
            >
              <img src={post.image} alt={post.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <span className="bg-orange-100 text-brand-orange px-3 py-1 rounded-full text-sm font-medium">{post.category}</span>
                <h3 className="text-lg font-semibold text-gray-900 mt-3">{post.title}</h3>
                <p className="text-gray-600 text-sm mt-2">{post.date}</p>
              </div>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
