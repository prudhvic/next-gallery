import { useContext } from "react";
import { GalleryContext } from "../context";

let Form = () => {
  let ctx = useContext(GalleryContext);
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        ctx.submit();
      }}
    >
      <input
        type="text"
        placeholder="search images"
        value={ctx.query}
        onChange={(e) => ctx.setQuery(e.target.value)}
      />
      <button className="btn-search">search</button>
    </form>
  );
};
export default Form;
