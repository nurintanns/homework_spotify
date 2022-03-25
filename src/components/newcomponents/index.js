const AlbumImage = ({ src, children }) => (
    <div>
      <img src={src} width="300" height="300" className="rotate" />
      {children}
    </div>
  );
  
  const AlbumDesc = (props) => <h2>Album:{props.name}</h2>;
  
  const AlbumName = ({name, artist, children}) => (
    <div className="AlbumName">
      <p>{name}</p>
      <p>{artist}</p>
      {children}
    </div>
  );
  
  const ButtonUrl = (url) => <button><a href={'https://open.spotify.com/artist/1dfeR4HaWDbWqFHLkxsg1d'}>select</a></button>;
  
  export {AlbumImage, AlbumDesc, AlbumName, ButtonUrl};