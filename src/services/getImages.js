export const getImages = (searchText, page) => {
  return fetch(
    `https://pixabay.com/api/?q=${searchText}&page=${page}&key=32888012-43d6bfcd82cdab993f3e07c85&image_type=photo&orientation=horizontal&per_page=12`
  );
};
