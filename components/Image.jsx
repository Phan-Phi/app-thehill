import NextImage, { ImageProps } from "next/image";
import { Box, styled, BoxProps } from "@mui/material";

const defaultBlurDataURL =
  "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=";

const WrapperImage = (props) => {
  const {
    WrapperProps = {},
    src,
    width,
    height,
    fill,
    placeholder = "blur",
    sizes = "100%",
    blurDataURL = defaultBlurDataURL,
    style,
    ...restProps
  } = props;

  if (fill === true || fill === undefined) {
    return (
      <Wrapper width={width} height={height} {...WrapperProps}>
        <NextImage
          {...{
            src,
            fill: true,
            placeholder,
            blurDataURL,
            sizes,
            style: {
              objectFit: "contain",
              ...style,
            },
            ...restProps,
          }}
        />
      </Wrapper>
    );
  } else if (fill === false) {
    return (
      <NextImage
        {...{
          src,
          placeholder,
          blurDataURL,
          width,
          height,
          sizes,
          style: {
            objectFit: "contain",
            ...style,
          },
          ...restProps,
        }}
      />
    );
  }

  return null;
};

export default WrapperImage;

const Wrapper = styled(Box)(() => {
  return {
    position: "relative",
  };
});
