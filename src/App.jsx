import React from "react";
import Post from "./Components/Post";

function App() {
  const postData = {
    createdBy: "Akber & Company Ltd.",
    avatar:
      "https://img.freepik.com/premium-vector/man-spiderman-suit-stands-front-city-skyline_1024980-111976.jpg",
    description:
      "With the Experience of 20 Years in IT Industry Providing Best IT Services in Pakistan.",

    description1: "For Further Details....",

    desc2: "Contact us on 0333-1234567",

    images: [
      "https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1625838144804-300f3907c110?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8SVR8ZW58MHx8MHx8fDA%3D",
      "https://images.unsplash.com/photo-1573495628363-04667cedc587?q=80&w=688&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      "https://images.unsplash.com/photo-1771521828921-abee33c48f9a",
      "https://plus.unsplash.com/premium_photo-1770914038394-d9249c6ed4e3",
      "https://images.unsplash.com/photo-1761839258657-457dda39b5cc",
      "https://images.unsplash.com/photo-1771959361812-53c38a045dc3",
      "https://plus.unsplash.com/premium_photo-1661758351472-52ed02e99496?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    ],
    createdAt: Date.now() - 3600000,
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10">
      <Post post={postData} />
    </div>
  );
}

export default App;
