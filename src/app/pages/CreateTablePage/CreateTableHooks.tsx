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
        <FormikWrapper>
          <Header>YOU ARE OPENING A TABLE</Header>
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
                  <ShoppingListWrapper>
                    <FieldWrapper>
                      <label htmlFor="shoppingList">shopping list</label>
                      <CustomField
                        type="text"
                        name="shoppingList"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </ShoppingListWrapper>

                  <DinnerDateWrapper>
                    <FieldWrapper>
                      <label htmlFor="dinnerDate">date?</label>
                      <CustomField
                        type="date"
                        name="dinnerDate"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </DinnerDateWrapper>

                  <DinnerTimeWrapper>
                    <FieldWrapper>
                      <label htmlFor="dinnerTime">time?</label>
                      <CustomField
                        type="time"
                        name="dinnerTime"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </DinnerTimeWrapper>

                  <DressCodeWrapper>
                    <FieldWrapper>
                      <label htmlFor="dressCode">dress code</label>
                      <CustomField
                        type="text"
                        name="dressCode"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </DressCodeWrapper>

                  <DinnerTypeWrapper>
                    <FieldWrapper>
                      <label htmlFor="dinnerType">dinner type</label>
                      <CustomField
                        type="text"
                        name="dinnerType"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </DinnerTypeWrapper>

                  <TableSizeWrapper>
                    <FieldWrapper>
                      <label htmlFor="tableSize">table size</label>
                      <CustomField
                        type="text"
                        name="tableSize"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </TableSizeWrapper>

                  <MeetUpLinkWrapper>
                    <FieldWrapper>
                      <label htmlFor="meetUpLink">google meet link</label>
                      <CustomField
                        type="text"
                        name="meetUpLink"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </MeetUpLinkWrapper>

                  <FirstNameWrapper>
                    <FieldWrapper>
                      <label htmlFor="firstName">name</label>
                      <CustomField
                        type="text"
                        name="firstName"
                        customplaceholder=""
                      />
                    </FieldWrapper>
                  </FirstNameWrapper>

                  <ButtonWrapper>
                    <StyledButton type="submit" disabled={isSubmitting}>
                      Create
                    </StyledButton>
                  </ButtonWrapper>
                </FormWrapper>
              </Form>
            )}
          </Formik>
        </FormikWrapper>
        <PlaceHolder></PlaceHolder>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <Wrapper>
        <SpinnerWrapper>
          <img src={spinner} alt="loading" width="40" height="40" />
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

const FormikWrapper = styled.div`
  position: absolute;
  top: 25vh;
  left: 24px;
  border: solid;
  padding: 10px 57px 40px 10px;
  margin-bottom: 40px;
  background-color: white;
`;

const Header = styled.div`
  font-size: 12pt;
  margin-bottom: 28px;
`;

const Wrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const SpinnerWrapper = styled.div`
  margin-bottom: 20px;
`;

const ButtonWrapper = styled.div`
  margin-top: 50px;
`;

const ShoppingListWrapper = styled.div`
  margin-left: 37vh;
`;
const DinnerDateWrapper = styled.div`
  margin-left: -40vh;
  margin-top: 15px;
`;
const DinnerTimeWrapper = styled.div`
  margin-left: -40vh;
  margin-top: 15px;
`;
const DressCodeWrapper = styled.div`
  margin-left: 50vh;
  margin-top: 10px;
`;
const DinnerTypeWrapper = styled.div`
  margin-left: -25vh;
  margin-top: 8px;
`;
const TableSizeWrapper = styled.div`
  margin-left: 22vh;
  margin-top: 20px;
`;
const MeetUpLinkWrapper = styled.div`
  margin-left: -33vh;
  margin-top: 18px;
`;
const FirstNameWrapper = styled.div`
  margin-left: 28vh;
  margin-top: 10px;
`;

const StyledButton = styled.button`
  font-family: 'MatterRegular';
  font-size: 25px;
  color: black;
  padding: 0 7px 0 7px;
  line-height: 40px;
  border-style: solid;
  text-decoration: none;
  text-align: center;
`;

const PlaceHolder = styled.div`
  height: 130vh;
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
