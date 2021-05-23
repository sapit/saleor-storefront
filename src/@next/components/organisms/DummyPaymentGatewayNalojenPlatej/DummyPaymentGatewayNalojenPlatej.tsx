import { Formik } from "formik";
import React from "react";

import { Radio } from "@components/atoms";

import * as S from "./styles";
import { IProps } from "./types";

export const statuses_np = [
  { token: "charged", label: "Charged" },
  // { token: "fully-refunded", label: "Fully refunded" },
  // { token: "not-charged", label: "Not charged" },
];

/**
 * Dummy payment gateway.
 */
const DummyPaymentGatewayNalojenPlatej: React.FC<IProps> = ({
  processPayment,
  formRef,
  formId,
  initialStatus,
}: IProps) => {
  return (
    <Formik
      initialValues={{ status: initialStatus || statuses_np[0].token }}
      onSubmit={(values, { setSubmitting }) => {
        processPayment(values.status);
        setSubmitting(false);
      }}
    >
      {({
        handleChange,
        handleSubmit,
        handleBlur,
        values,
        isSubmitting,
        isValid,
      }) => (
        <S.Form
          id={formId}
          ref={formRef}
          onSubmit={handleSubmit}
          data-test="DummyPaymentGatewayNalojenPlatejForm"
        >
          {statuses_np.map(({ token, label }) => {
            return (
              <S.Status key={token}>
                <Radio
                  key={token}
                  type="radio"
                  name="status"
                  value={token}
                  checked={values.status === token}
                  onChange={handleChange}
                >
                  <span>{label}</span>
                </Radio>
              </S.Status>
            );
          })}
        </S.Form>
      )}
    </Formik>
  );
};

export { DummyPaymentGatewayNalojenPlatej };
