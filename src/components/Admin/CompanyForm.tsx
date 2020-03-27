import React from "react";
import {useMutation} from "../../graphql/hooks/useMutation";
import {createCompany} from "../../graphql/mutations";
import {FieldArray, Form, Formik} from "formik";
import Input from "../Form/Input";
import Button from "../Form/Button";

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
                    <Button color='green' onClick={() => arrayHelpers.insert(index, "")}>
                      Add
                    </Button>
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
