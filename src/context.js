import { createContext, useState } from "react";
export let GalleryContext = createContext({
  images: [],
  setImagesToContext: () => {},
  query: "",
  setQuery: () => {},
  search: "",
  setSearch: () => {},
});
export default function Context({ children }) {
  let [images, setImages] = useState([]);
  let [query, setQuery] = useState("");
  let [search, setSearch] = useState("");
  let setImagesToContext = (fetchImages) => {
    setImages(fetchImages);
  };
  let submit = () => {
    setSearch(query);
  };
  return (
    <GalleryContext.Provider
      value={{
        images: images,
        setImagesToContext: setImagesToContext,
        query,
        setQuery,
        search,
        setSearch,
        submit,
      }}
    >
      {children}
    </GalleryContext.Provider>
  );
}
