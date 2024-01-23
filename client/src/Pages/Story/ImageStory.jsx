import { useState, useEffect } from 'react';
import axios from 'axios';
import './ImageStory.css';
import EnlargedImageView from './EnlargedImageView'; // Import the new component
import Spinner from '../../utils/Spinner';



const ImageStory = () => {
  const [images, setImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      if (window.innerWidth < 600) {
        setLoading(false);
      }
    
      try {
        const response = await axios.get(
          'https://shadi-dating-app.onrender.com/avatars'
        );
        setImages(response.data);
         setLoading(false);
          

        // Assuming your API returns an array of image URLs
      } catch (error) {
        
        console.error('Error fetching images:', error);
      }
    };

    fetchImages();
  }, []);

  const handleClick = (image) => {
    setSelectedImage(image);
  };

  return (
    <div className="image-story">
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          alt={`Story ${index + 1}`}
          className="story-image"
          onClick={() => handleClick(image)}
        />
      ))}
      {selectedImage && (
        <EnlargedImageView
          image={selectedImage}
          onClose={() => setSelectedImage(null)}
        />
      )}
      <Spinner loading={loading} />
    </div>
  );
};

export default ImageStory;

// // ImageStory.jsx
// import { useState } from 'react';
// import './ImageStory.css';
// import EnlargedImageView from './EnlargedImageView'; // Import the new component

// const ImageStory = () => {
//   const images = [
//     'https://miro.medium.com/v2/resize:fit:1400/1*74RIPXNI2kQdO1ahw-Vs0Q.png',
//     'https://miro.medium.com/v2/resize:fit:1400/1*74RIPXNI2kQdO1ahw-Vs0Q.png',
//     'https://miro.medium.com/v2/resize:fit:1400/1*74RIPXNI2kQdO1ahw-Vs0Q.png',
//     // Add more image paths as needed
//   ];

//   const [selectedImage, setSelectedImage] = useState(null);

//   const handleClick = (image) => {
//     setSelectedImage(image);
//   };

//   return (
//     <div className="image-story">
//       {images.map((image, index) => (
//         <img
//           key={index}
//           src={image}
//           alt={`Story ${index + 1}`}
//           className="story-image"
//           onClick={() => handleClick(image)}
//         />
//       ))}
//       {selectedImage && (
//         <EnlargedImageView
//           image={selectedImage}
//           onClose={() => setSelectedImage(null)}
//         />
//       )}
//     </div>
//   );
// };

// export default ImageStory;
