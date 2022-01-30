import React from 'react';
import { data } from "./data";
import Forumitem from "./Forumitem";

const Forum = () => {
  return (
    <article className="col-md-8">
      <section>{data.map((item) => {
        return <Forumitem key={item.id} {...item} />;
      })}
      </section>
    </article>
  );
};

export default Forum;
