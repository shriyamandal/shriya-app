import { Box, Image } from "@chakra-ui/react";

type Props = {
  src: string;
};

const DynamicShadowImage = ({ src }: Props) => {
  return (
    <Box position="relative">
      <Image
        src={src}
        w={400}
        h={400}
        rounded="lg"
        objectFit="cover"
        position="absolute"
        inset={0}
        filter="blur(20px)"
        zIndex={0}
        transform="scale(1.05, 1.05)"
      />
      <Image
        zIndex={100}
        position="relative"
        src={src}
        w={400}
        h={400}
        rounded="lg"
        objectFit="cover"
      />
    </Box>
  );
};

export default DynamicShadowImage;
