import { FC } from 'react';
import ReactImageMagnify from 'react-image-magnify';

type PropTypes = { productImage: string };

const ProductZoomer: FC<PropTypes> = ({ productImage }) => {
  const imageProps = {
    smallImage: {
      alt: 'product',
      isFluidWidth: true,
      src: productImage,

      sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px',
    },
    largeImage: {
      src: productImage,
      width: 1200,
      height: 1800,
    },
    enlargedImageContainerDimensions: {
      width: '230%',
      height: '120%',
      backgroundColor: '#000',
    },
    lensStyle: {
      width: '20px',
      height: '30px',
    },
    isHintEnabled: true,
    shouldUsePositiveSpaceLens: true,
  };
  return <ReactImageMagnify style={{ zIndex: 13 }} {...imageProps} />;
};

export default ProductZoomer;
