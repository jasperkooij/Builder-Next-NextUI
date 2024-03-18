// components/BuilderImage.tsx
import { Image } from "@nextui-org/image";
import { ImageProps } from "@nextui-org/image";

interface BuilderImageProps extends ImageProps {
  // Add any additional custom props if needed
  image: string;
  backgroundSize: string;
  backgroundPosition: string;
  lazy: boolean;
  fitContent: boolean;
  aspectRatio: number;
  lockAspectRatio: boolean;
  height: number;
  width: number;
  srcset: string;
  sizes: string;
  altText: string;
}

const BuilderImage: React.FC<BuilderImageProps> = ({
  image,
  lazy,
  height,
  width,
  srcset,
  sizes,
  altText,
}) => {
  return (
    <Image
      src={image}
      srcSet={srcset}
      sizes={sizes}
      alt={altText}
      width={width}
      height={height}
      loading={lazy ? "lazy" : "eager"}
    />
  );
};

export default BuilderImage;
