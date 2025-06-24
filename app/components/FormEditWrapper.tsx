"use client"

import React, { FC, useActionState } from 'react'
import { Form, FormProps } from './CreateForm'
import { createInvoice, State } from '../helpers/actions'

const initialState: State = { message: null, errors: {}}

const FormEditWrapper: FC<FormProps> = ({ customers }) => {

  const [state, formAction] = useActionState(createInvoice, initialState);
  
  return (
    <div>
      <Form customers={customers} formAction={formAction} state={state}/>
    </div>
  )
}

export default FormEditWrapper