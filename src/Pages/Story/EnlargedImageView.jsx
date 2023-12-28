import './EnlargedImageView.css';

const EnlargedImageView = ({ image, onClose }) => {
  return (
    <div className="enlarged-image-view" onClick={onClose}>
      <img src={image} alt="Enlarged" className="enlarged-image" />
    </div>
  );
};

export default EnlargedImageView;
