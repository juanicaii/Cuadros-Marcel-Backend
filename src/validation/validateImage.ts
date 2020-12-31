import imageType from '../utils/imageType';

export const validateImage = (image: string) => {
  if (
    image.substr(image.length - 4) !== imageType.jepg ||
    image.substr(image.length - 3) !== imageType.jpg ||
    image.substr(image.length - 3) !== imageType.png
  ) {
    return false;
  }

  return true;
};
