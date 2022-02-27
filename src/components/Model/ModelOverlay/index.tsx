import React, { useCallback, useLayoutEffect, useState } from "react";

import { CarModel } from "../ModelsContext";
import useWrapperScroll from "../useWrapperScroll";

import { Container } from "./styles";

interface Props {
  model: CarModel;
}

type SectionDimensions = Pick<HTMLDivElement, "offsetTop" | "offsetHeight">;

const ModelOverlay: React.FC<Props> = ({ model, children }) => {
  const { scrollY } = useWrapperScroll();

  const getSectionDimensions = useCallback(() => {
    return {
      offsetTop: model.sectionRef.current?.offsetTop,
      offsetHeight: model.sectionRef.current?.offsetHeight,
    } as SectionDimensions;
  }, [model.sectionRef]);

  const [dimensions, setDimensions] = useState<SectionDimensions>(
    getSectionDimensions()
  );

  // useLayoutEffect(() => {
  //   function onResize() {}

  //   window.addEventListener();
  // }, []);

  return <Container>{children}</Container>;
};

export default ModelOverlay;
