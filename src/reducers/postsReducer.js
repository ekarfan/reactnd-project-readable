import orderBy from 'lodash/orderBy';
import omit from 'lodash/omit';
import merge from 'lodash/merge';

import * as types from '../actions/ActionType';

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

const INITIAL_STATE = {
  byId: {},
  sortBy: { key: 'voteScore', order: 'desc' },
  selected: null,
  isModalOpen: false,
  editingPostId: null
};

export default function postsReducer(state = INITIAL_STATE, action) {
  let updatedInfo;

  switch (action.type) {
    case types.RETRIEVE_FROM_CATEGORY: {
      const postsById = action.posts
        .reduce((posts, post) => (Object.assign(posts, {[post.id]: post})), {});

      return Object.assign({}, state, {byId: postsById});
    }
    case types.RETRIEVE:
      return {
        ...state,
        byId: {
          ...state.byId,
          [action.post.id]: action.post
        },
        selected: action.postId
      };

    case types.RETRIEVE_COMMENTS_COUNT:
      updatedInfo = { [action.postId]: { commentsCount: action.commentsCount } };
      return merge({}, state, { byId: updatedInfo });
    case types.SORT_BY:
      return Object.assign({}, state, { sortBy: { key: action.key, order: action.order } });
    case types.VOTE:
      updatedInfo = { [action.post.id]: { voteScore: action.post.voteScore } };
      return merge({}, state, { byId: updatedInfo });
    case types.DELETE:
      return {
        ...state,
        byId: omit(state.byId, action.postId)
      };
    case types.ADD:
      updatedInfo = { [action.post.id]: action.post };
      return merge({}, state, { byId: updatedInfo });
    case types.START_EDITING:
      return Object.assign({}, state, { editingPostId: action.postId });
    case types.STOP_EDITING:
      return Object.assign({}, state, { editingPostId: null });
    case types.MODAL_VISIBILITY:
      return Object.assign({}, state, { isModalOpen: action.visibility });
    default:
      return state;
  }
}
