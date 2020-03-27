import React from "react";
import {Field, FieldAttributes} from "formik";

interface Props extends FieldAttributes<any>{
  name: string;
  className?: string;
  type?:string;
}

const Input = ({ name, className,...rest }: Props) => {
  return (
    <div className='mt-8 relative rounded-md shadow-sm'>
      <label
        htmlFor={name}
        className="block leading-5 font-medium text-gray-700"
      >
        {name}
      </label>
      <Field
        name={name}
        {...rest}
        className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      />
    </div>
  );
};

export default Input;
