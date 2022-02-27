import React from "react";

import { ModelsWrapper, ModelSection } from "../Model";
import DefaultOverlayContent from "../DefaultOverlayContent";

import { Container } from "./styles";
import UniqueOverlay from "../UniqueOverlay";

const Page: React.FC = () => {
  return (
    <Container>
      <ModelsWrapper>
        <div>
          {[
            "Model 1",
            "Model2",
            "Model43",
            "Model4",
            "Model5",
            "Model6",
            "Model7",
          ].map((modelName) => (
            <ModelSection
              key={modelName}
              className="colored"
              modelName={modelName}
              overlayNode={
                <DefaultOverlayContent
                  label={modelName}
                  description="Order Online for Delivery"
                />
              }
            />
          ))}
        </div>

        <UniqueOverlay />
      </ModelsWrapper>
    </Container>
  );
};

export default Page;
