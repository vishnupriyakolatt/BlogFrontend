import React from "react";
import Blog from "../components/Blog/Blog";

function Home() {
  return (
    <>
      <main>
        <div className="cover-photo">
          <img
            src="https://marketplace.canva.com/EAFVMyc6M1Y/2/0/1600w/canva-white-collage-travel-blog-facebook-post-BsGxDTqBABE.jpg"
            alt="Cover"
          />
        </div>
        <Blog />
      </main>
    </>
  );
}

export default Home;
