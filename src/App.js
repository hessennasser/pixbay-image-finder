import { useState } from 'react';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Search from './components/search/Search';
import ImageResults from './components/image-result/ImageResults';
import ImageLightbox from './components/image-result/ImageLightbox';

function App() {
  const [images, setImages] = useState();
  const [imageLightbox, setImageLightbox] = useState();
  return (
    <main >
      <Navbar />
      <Search setImages={setImages} />
      {images ?
        <ImageResults images={images} setImageLightbox={setImageLightbox} />
        :
        <h2 className='error'>Enter your search keyword</h2>
      }
      {
        imageLightbox && <ImageLightbox img={imageLightbox} setImageLightbox={setImageLightbox} />
      }
    </main>
  );
}

export default App;
