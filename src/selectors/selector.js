import orderBy from 'lodash/orderBy';


export function commentsSelector(state) {
  const notDeleted = Object.values(state.byId).filter((comment) => !comment.deleted);
  return orderBy(notDeleted, state.sortBy.key, state.sortBy.order);
}

export function editingCommentSelector(state) {
  return state.byId[state.editingCommentId]
}

export function postsSelector(state) {
  const notDeleted = Object.values(state.byId).filter((post) => !post.deleted);
  return orderBy(notDeleted, state.sortBy.key, state.sortBy.order);
}

export function postSelector(state, postId) {
  return state.byId[postId];
}

export function editingPostSelector(state) {
  return state.byId[state.editingPostId]
}
