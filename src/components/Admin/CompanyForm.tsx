import React from "react";
import {useMutation} from "../../graphql/hooks/useMutation";
import {createCompany} from "../../graphql/mutations";
import {FieldArray, Form, Formik, FormikValues} from "formik";
import Input from "../Form/Input";
import Button from "../Form/Button";
import awsmobile from "../../aws-exports";
import {Storage} from "aws-amplify";
import {v4 as uuid} from "uuid";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMinus, faPlus} from "@fortawesome/free-solid-svg-icons";

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

const CompanyForm = () => {
  const [{ data, loading, error }, addCompany] = useMutation(createCompany, {});

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
    <Formik initialValues={defaultValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <div className="flex justify-center">
          {loading && <div>Applying changes</div>}
          <Form className="flex flex-col justify-between items-center max-w-xs">
            <>
              <Input name="name" />
              <Input name="description" as="textarea" />
              <div className="my-1">
                <h2 className='font-medium text-gray-800 text-center'>References</h2>
                <FieldArray name="references">
                  {arrayHelpers =>
                    values.references.map((reference, index) => (
                      <>
                        <Input
                          key={index}
                          name={`references[${index}].heading`}
                        />
                        <Input key={index} name={`references[${index}].url`} />
                        <div className="flex justify-between">
                          <Button
                            color="red"
                            onClick={() => arrayHelpers.remove(index)}
                            className="mt-5"
                          >
                            <FontAwesomeIcon icon={faMinus} />
                          </Button>
                          <Button
                            color="green"
                            onClick={() => arrayHelpers.insert(index, "")}
                            className="mt-5"
                          >
                            <FontAwesomeIcon icon={faPlus} />
                          </Button>
                        </div>
                      </>
                    ))
                  }
                </FieldArray>
              </div>
              <input
                name="file"
                type="file"
                onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
                  event.persist();
                  setFieldValue("file", event.currentTarget.files?.[0]);
                }}
              />
            </>
            <Button color="blue" type="submit" className="mt-5">
              Create
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CompanyForm;
