import React, {useState, useEffect, Component} from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag';
import { getTagsList } from '../../db';
import Separator from '../Separator/Separator';
import PostsByTag from '../PostsByTag';

const TagsList = () => {
  const [tagList, setTagList] = useState([]);
  useEffect(() => {
    if(!tagList.length) {
    getTagsList().then(res => {console.log('all tags',res.data);
   
     setTagList(res.data);
    });}
  });

   return (
  <div className="tags-wrapper">
    <div>
    <h3>Tags Page</h3>
      <div className="tags-list">
        {tagList &&
          tagList.map((item) => {
            return <div className="tag-wrapper" key={item}>
              <Tag key={item} title={item} />
              <Separator />
              <Link to={`tags/${item}`} params={{ tagTitle: `${item}`}}
              >Get Post by Tag</Link>
            </div>
          })
        }
      </div>
    </div>
    </div>
  )
  
   
};

export default TagsList;