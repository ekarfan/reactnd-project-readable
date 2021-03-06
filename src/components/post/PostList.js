import React from 'react';
import PropTypes from 'prop-types';
import { Item, Segment } from "semantic-ui-react";

import PostsPreviewContainer from "./PostsPreviewPage";
import CommentsListContainer from "../comment/CommentsListPage";

const PostPage = (props) => {
  return (
    <div>
      <Segment.Group>
        <Segment color="orange">
          <h2>Post</h2>
        </Segment>

        <Segment as={Item.Group}>
          <PostsPreviewContainer posts={[props.post]} showBody={true} />
        </Segment>
      </Segment.Group>

      <Segment color="red">
        <CommentsListContainer postId={props.post.id} />
      </Segment>
    </div>
  );
};

PostPage.propTypes = {
  post: PropTypes.object.isRequired
};

export default PostPage;
