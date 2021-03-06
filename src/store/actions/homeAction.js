import actionTypes from "./actionTypes";

export const addItem = (content) => {
  return {
    type: actionTypes.ADD_ITEM,
    content,
  };
};

export const removeItem = (id) => {
  return {
    type: actionTypes.REMOVE_ITEM,
    id,
  };
};
