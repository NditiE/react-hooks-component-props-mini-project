import React from "react";
import blogData from "../data/blog";

console.log(blogData);

function App() {
  return (
    <div className="App">
            <Header blogName={blogData.blogName} />
      <About
        image={blogData.image}
        aboutText={blogData.aboutText}
      />
      <ArticleList articles={blogData.articles} />
    </div>
  );
}

export default App;
