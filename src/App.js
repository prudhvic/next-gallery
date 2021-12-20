import { useContext, useEffect } from "react";
import { GalleryContext } from "./context";
import GalleryImage from "./components/Image";
import Form from "./components/Form";
export default function App() {
  let ctx = useContext(GalleryContext);
  useEffect(() => {
    fetchImages();
  }, [ctx.search]);
  let fetchImages = async () => {
    let res = await fetch(
      `https://pixabay.com/api/?key=${process.env.API_KEY}&q=${ctx.search}&image_type=photo&pretty=true`
    );
    let json = await res.json();
    ctx.setImagesToContext(json.hits);
  };
  return (
    <div className="App">
      <Form />
      <main>
        {ctx.images.map((image) => (
          <GalleryImage key={image.id} image={image} />
        ))}
      </main>
    </div>
  );
}
