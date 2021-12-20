let GalleryImage = ({ image }) => {
  let tags = image.tags.split(",");
  return (
    <section>
      <div className="img">
        <img src={image.webformatURL} alt={image.user} />
      </div>
      <div className="content">
        <div>
          <h2>photo by {image.user}</h2>
        </div>
        <div>
          <h3>views {image.views}</h3>
        </div>
        <div className="tags">
          {tags.map((tag, index) => (
            <h4 key={index}>#{tag}</h4>
          ))}
        </div>
      </div>
    </section>
  );
};
export default GalleryImage;
