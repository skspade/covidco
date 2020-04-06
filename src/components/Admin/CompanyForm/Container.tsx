import React from "react";
import { useMutation } from "../../../graphql/hooks/useMutation";
import { createCompany } from "../../../graphql/mutations";
import { FormikValues } from "formik";
import { v4 as uuid } from "uuid";
import { Storage } from "aws-amplify";
import awsmobile from "../../../aws-exports";
import Form from "./Form";
import {withAuthenticator} from "aws-amplify-react";

const {
  aws_user_files_s3_bucket_region: region,
  aws_user_files_s3_bucket: bucket
} = awsmobile;

const defaultValues = {
  name: "",
  description: "",
  references: [{ heading: "", url: "" }],
  file: null
};

const Container = () => {
  const [{ data, loading, error }, addCompany] = useMutation(createCompany);

  async function handleSubmit(values: FormikValues) {
    const { file, ...rest } = values;
    if (file) {
      const extension = file.name.split(".")[1];
      const { type: mimeType } = file;
      const key = `images/${uuid()}.${extension}`;
      const url = `https://${bucket}.s3.${region}.amazonaws.com/public/${key}`;
      try {
        await Storage.put(key, file, {
          contentType: mimeType
        });
        await addCompany({ input: { ...rest, rating: 0, logoUrl: url } });
      } catch (e) {
        console.error(e);
      }
    }
  }

  return (
    <>
      {error && <div>{error}</div>}
    <Form
      defaultValues={defaultValues}
      handleSubmit={handleSubmit}
      loading={loading}
    />
    </>
  );
};

export default withAuthenticator(Container);
