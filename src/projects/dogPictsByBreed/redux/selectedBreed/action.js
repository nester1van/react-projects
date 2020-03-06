// action type
export const SELECT_BREED = "SELECT_BREED";

// action creator 
export const selectBreed = (selectedBreed) => ({
    type: SELECT_BREED,
    selectedBreed
});