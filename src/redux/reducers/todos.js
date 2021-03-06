import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from "../actionTypes";

const initialState = {
  allIds: [],
  byIds: {},
  count: 0
};

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO: {
      const { id, content } = action.payload;
      return {
        ...state,
        allIds: [...state.allIds, id],
        count: state.count + 1,
        byIds: {
          ...state.byIds,
          [id]: {
            content,
            completed: false
          }
        }
      };
    }
    case TOGGLE_TODO: {
      const { id } = action.payload;
      return {
        ...state,
        byIds: {
          ...state.byIds,
          [id]: {
            ...state.byIds[id],
            completed: !state.byIds[id].completed
          }
        }
      };
    }
    case REMOVE_TODO: {
      const { id } = action.payload;
      const {...newByIds} = state.byIds;

      delete newByIds[id];

      return {
        ...state,
        allIds: state.allIds.filter(i => i !== id),
        count: state.count - 1,
        byIds: {
          ...newByIds
        }
      };
    }
    default:
      return state;
  }
}
