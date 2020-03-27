import React, { ReactEventHandler } from "react";
import { useMutation } from "../../graphql/hooks/useMutation";
import { createCompany } from "../../graphql/mutations";
import { Field, Formik, Form, FieldArray } from "formik";
import Input from "../Form/Input";

const defaultValues = {
  name: "",
  description: "",
  references: [{ heading: "", url: "" }]
};

const CompanyForm = () => {
  const [{ data, loading, error }, addCompany] = useMutation(createCompany, {});

  function handleSubmit() {}

  return (
    <Formik initialValues={defaultValues} onSubmit={handleSubmit}>
      {({ values }) => (
        <Form className='flex flex-col justify-between h-64 lg:px-10'>
          <>
            <Input name="name" />
            <Input name="description" type='textarea' />
            <FieldArray name="references">
              {arrayHelpers =>
                values.references.map((reference, index) => (
                  <>
                    <Input name={`references[${index}].name`} />
                    <Input name={`references[${index}].url`} />
                    <button onClick={() => arrayHelpers.insert(index, "")}>
                      Add
                    </button>
                  </>
                ))
              }
            </FieldArray>
          </>
        </Form>
      )}
    </Formik>
  );
};

export default CompanyForm;
