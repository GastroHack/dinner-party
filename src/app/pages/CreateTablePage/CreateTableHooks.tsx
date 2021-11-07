import { Form, Formik } from 'formik';

import React, { useState } from 'react';
import styled from 'styled-components/macro';
import Connector from '../../../utils/connector';
import Table from '../../../data-contracts/Table';
import { useHistory } from 'react-router-dom';

import CustomField from './components/CustomField';

import * as Yup from 'yup';
import { LogoWrapper } from '../../components/LogoWrapper';
import { LogoTextDown, LogoTextUp } from '../../components/LogoText';
import { StyledLink } from '../../components/StyledLink';
import spinner from '../../../fonts/dinnerparty_loading_funktioniert.gif';

function CreateTableHooks({ tableActions, state }) {
  const [isLoading, setIsLoading] = useState(false);
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [err, setErrors] = useState({});

  let history = useHistory();

  const validationSchema = Yup.object({
    shoppingList: Yup.string().required('Shopping List needed!'),
    dinnerDate: Yup.string().required('Dinner Date needed!'),
    dinnerTime: Yup.string().required('Dinner Time needed!'),
    dressCode: Yup.string().required('Dress Code needed!'),
    dinnerType: Yup.string().required('Dinner Type needed!'),
    tableSize: Yup.string().required('Table Size needed!'),
    meetUpLink: Yup.string().required('MeetUp Link needed!'),
    firstName: Yup.string().required('Name needed!'),
  });

  if (!isLoading) {
    return (
      <Wrapper>
        <TopWrapper>
          <LogoWrapper to="/">
            <LogoTextUp>DINNER</LogoTextUp>
            <LogoTextDown>PARTY</LogoTextDown>
          </LogoWrapper>
          <ButtonTop>
            <StyledLink to="/createTable">OPEN A TABLE</StyledLink>
          </ButtonTop>
        </TopWrapper>
        <Wrapper>
          <Formik
            initialValues={{
              shoppingList: '',
              dinnerDate: '',
              dinnerTime: '',
              dressCode: '',
              dinnerType: '',
              tableSize: '',
              meetUpLink: '',
              firstName: '',
            }}
            validationSchema={validationSchema}
            onSubmit={async (values, { setSubmitting }) => {
              const dbTable = new Table(
                values.shoppingList,
                values.dinnerDate,
                values.dinnerTime,
                values.dressCode,
                values.dinnerType,
                values.tableSize,
                values.meetUpLink,
                values.firstName,
              );

              setSubmitting(false);
              setIsLoading(true);

              tableActions
                .createTable(dbTable)
                .then(() => {
                  console.log('User SignedUp Formik');
                  setIsLoading(false);
                  history.push({ pathname: '/', state: { dbTable } });
                })
                .catch(err => {
                  setErrors({ resErr: err.message });
                  setIsLoading(false);
                });
            }}
          >
            {({ isSubmitting }) => (
              <Form>
                <FormWrapper>
                  <FieldWrapper>
                    <label htmlFor="shoppingList">
                      Shopping List<StarSpan>*</StarSpan>
                    </label>
                    <CustomField
                      type="text"
                      name="shoppingList"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="dinnerDate">
                      Dinner Date<StarSpan>*</StarSpan>
                    </label>
                    <CustomField
                      type="date"
                      name="dinnerDate"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="dinnerTime">
                      Dinner Time<StarSpan>*</StarSpan>
                    </label>
                    <CustomField
                      type="time"
                      name="dinnerTime"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="dressCode">
                      Dress Code<StarSpan>*</StarSpan>
                    </label>
                    <CustomField
                      type="text"
                      name="dressCode"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="dinnerType">Dinner Type</label>
                    <CustomField
                      type="text"
                      name="dinnerType"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="tableSize">Table Size</label>
                    <CustomField
                      type="text"
                      name="tableSize"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="meetUpLink">
                      MeetUp Link<StarSpan>*</StarSpan>
                    </label>
                    <CustomField
                      type="text"
                      name="meetUpLink"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <FieldWrapper>
                    <label htmlFor="firstName">
                      Name<StarSpan>*</StarSpan>
                    </label>
                    <CustomField
                      type="text"
                      name="firstName"
                      customplaceholder=""
                    />
                  </FieldWrapper>

                  <ButtonWrapper>
                    <StyledButton type="submit" disabled={isSubmitting}>
                      Create
                    </StyledButton>
                  </ButtonWrapper>
                </FormWrapper>
              </Form>
            )}
          </Formik>
        </Wrapper>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Wrapper>
        <SpinnerWrapper>
          <img src={spinner} alt="loading" width="28" height="28" />
        </SpinnerWrapper>
      </Wrapper>
    </Wrapper>
  );
}

const ConnectedCreateTableHooks = props => (
  // @ts-ignore
  <Connector>
    {({ actions, state }) => (
      <CreateTableHooks tableActions={actions.table} state={state} {...props} />
    )}
  </Connector>
);

export default ConnectedCreateTableHooks;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StarSpan = styled.span`
  padding-left: 2px;
  color: red;
`;

const SpinnerWrapper = styled.div`
  margin-bottom: 20vh;
`;

const ButtonWrapper = styled.div``;

const StyledButton = styled.button`
  text-decoration: none;
  background-color: #ffffff;
  color: #333333;
  padding: 8px 40px 8px 40px;
  border-top: 1px solid #333333;
  border-right: 1px solid #333333;
  border-bottom: 1px solid #333333;
  border-left: 1px solid #333333;
  border-radius: 3px;
  text-align: center;
`;

const FormWrapper = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const FieldWrapper = styled.div`
  flex-direction: column;
  align-items: flex-start;
  display: flex;
  margin-bottom: 10px;
`;

const TopWrapper = styled.div`
  margin-top: 15px;
  display: flex;
  justify-content: space-between;
  width: 100%;
  position: sticky;
`;

const ButtonTop = styled.div`
  position: sticky;
  align-self: start;
  align-items: flex-start;
`;
