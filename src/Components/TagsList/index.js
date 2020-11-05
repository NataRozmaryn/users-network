import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Tag from '../Tag';
import { getTagsList } from '../../db';

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
            return <div className="tag-wrapper">
              <Tag key={item} title={item} />
              <Link to={{
                        pathname: `tags/${item}`
                      }}  key={item}>Get Post by Tag</Link>
            </div>
          })
        }
      </div>
    </div>
    </div>
  )
  
   
};

export default TagsList;