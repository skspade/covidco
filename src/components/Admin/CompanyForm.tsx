import React from "react";
import { useMutation } from "../../graphql/hooks/useMutation";
import { createCompany } from "../../graphql/mutations";
import { FieldArray, Form, Formik, FormikValues } from "formik";
import Input from "../Form/Input";
import Button from "../Form/Button";

const defaultValues = {
  name: "",
  description: "",
  references: [{ heading: "", url: "" }]
};

const CompanyForm = () => {
  const [{ data, loading, error }, addCompany] = useMutation(createCompany, {});

  async function handleSubmit(values: FormikValues) {
    try {
      await addCompany({ input: { ...values, rating: 0, logoUrl:'t' } });
    } catch (e) {
      console.error(e);
    }
  }

  return (
    <Formik initialValues={defaultValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <div className="flex justify-center">
          {loading && <div>Applying changes</div>}
          <Form className="flex flex-col justify-between items-center max-w-xs">
            <>
              <Input name="name" />
              <Input name="description" type="textarea" />
              <FieldArray name="references">
                {arrayHelpers =>
                  values.references.map((reference, index) => (
                    <>
                      <Input name={`references[${index}].heading`} />
                      <Input name={`references[${index}].url`} />
                      <Button
                        color="green"
                        onClick={() => arrayHelpers.insert(index, "")}
                        className="mt-5"
                      >
                        Add
                      </Button>
                    </>
                  ))
                }
              </FieldArray>
            </>
            <Button color={"green"} type="submit" className="mt-5">
              Create
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
};

export default CompanyForm;
