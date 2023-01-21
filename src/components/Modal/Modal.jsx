import { useEffect } from 'react';
import PropTypes from 'prop-types';
import css from './Modal.module.css';

export const Modal = ({ largeImgUrl, onImageClick }) => {
  useEffect(() => {
    const handleKeyDown = event => {
      if (event.code === 'Escape') {
        onImageClick('');
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onImageClick]);

  const handleBackdrop = event => {
    if (event.target === event.currentTarget) {
      onImageClick('');
    }
  };

  
    return (
      <div className={css.Overlay} onClick={handleBackdrop}>
        <div className={css.Modal}>
          <img src={largeImgUrl} alt="Large" />
        </div>
      </div>
    );
  }

  Modal.propTypes = {
    onImageClick: PropTypes.func.isRequired,
    largeImgUrl: PropTypes.shape({
      largeImgUrl: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
    }).isRequired,
  };
