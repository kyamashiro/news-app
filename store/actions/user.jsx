export const ADD_CLIP = "ADD_CLIP";
export const DELETE_CLIP = "DELETE_CLIP";
/**
 * 渡されるclipの中身はarticle object
 */
export const addClip = ({clip}) => {
  return {
    type: ADD_CLIP,
    clip,
  };
};

export const deleteClip = ({clip}) => {
  return {
    type: DELETE_CLIP,
    clip,
  };
};
