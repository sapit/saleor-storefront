import { action } from "@storybook/addon-actions";
import { storiesOf } from "@storybook/react";
import React from "react";

import { DummyPaymentGatewayNalojenPlatej } from ".";

const processPayment = action("processPayment");

storiesOf("@components/organisms/DummyPaymentGatewayNalojenPlatej", module)
  .addParameters({ component: DummyPaymentGatewayNalojenPlatej })
  .add("default", () => (
    <DummyPaymentGatewayNalojenPlatej processPayment={processPayment} />
  ));
