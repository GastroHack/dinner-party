import React, { useState } from 'react';
import { useField } from 'formik';
import styled from 'styled-components/macro';

export default function CustomField(props) {
  const [field, meta] = useField(props);
  const [isFocused, onFocus] = useState(false);

  function handleFocus() {
    onFocus(true);
  }

  function handleBlur(e) {
    field.onBlur(e);

    // @ts-ignore
    if (!field.value.length > 0) {
      onFocus(false);
    }
  }

  return (
    <>
      <StyledInput
        {...field}
        {...props}
        onFocus={handleFocus}
        onBlur={e => handleBlur(e)}
      />
      {meta.error && meta.touched && (
        <ErrorWrapper className="error">{meta.error}</ErrorWrapper>
      )}
      <span className={`placeholder${isFocused ? ' focused' : ''}`}>
        {props.customplaceholder}
      </span>
    </>
  );
}

const StyledInput = styled.input`
  width: 230px;
  height: 30px;
  border-width: 2px;
`;

const ErrorWrapper = styled.div`
  width: 232px;
  font-size: 12px;
  color: red;
`;
