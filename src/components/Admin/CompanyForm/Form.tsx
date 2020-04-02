import React from "react";
import {FieldArray, Form as FormikForm, Formik, FormikValues} from "formik";
import Input from "../../Form/Input";
import Button from "../../Form/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMinus, faPlus } from "@fortawesome/free-solid-svg-icons";

interface Props {
  defaultValues: FormikValues;
  handleSubmit: (values: FormikValues) => void | Promise<any>;
  loading: boolean;
}

const Form = ({ defaultValues, handleSubmit, loading }: Props) => {
  return (
    <Formik initialValues={defaultValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <div className="flex justify-center">
          {loading && <div>Applying changes</div>}
          <FormikForm className="flex flex-col justify-between items-center max-w-xs">
            <>
              <Input name="name" />
              <Input name="description" as="textarea" />
              <div className="my-1">
                <h2 className="font-medium text-gray-800 text-center">
                  References
                </h2>
                <FieldArray name="references">
                  {arrayHelpers =>
                    values.references.map((reference: any, index: number) => (
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
          </FormikForm>
        </div>
      )}
    </Formik>
  );
};

export default Form;
