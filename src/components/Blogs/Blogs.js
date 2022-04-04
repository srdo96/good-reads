import React from "react";

const Blogs = () => {
  return (
    <div className="text-center mt-10 mx-36">
      <h1 className="text-3xl mb-5">What is Context API ?</h1>
      <p className="text-left text-xl">
        To share data from one component to another component we use props. But
        if data is passed top to down we have to pass data every level. That is
        props drilling. And Context API avoid this drilling and pass data
        through the component tree having to pass props down manually at every
        level. For context api middle component cant access data.
      </p>
      <h1 className="text-3xl mt-8 mb-5">What is Semantic Tag ?</h1>
      <p className="text-xl text-left">
        Semantic Tag means elements with a meaning. A semantic tag clearly
        describes its meaning to both the browser and the developer. Search
        Engine can also understand which tag contains which type of content. In
        non-semantic element we use &lt;div&gt; and &lt;span&gt; by this it is
        hard to understand which type of content in this tag. But if we use
        semantic tag like &lt;article&gt; or &lt;header&gt; it is more
        understandable and also readable. It is introduced in HTML 5.
      </p>
    </div>
  );
};

export default Blogs;
