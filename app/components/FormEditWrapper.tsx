"use client"

import React, { FC, useActionState } from 'react'
import { FormProps, Invoice } from './CreateForm'
import { State, updateInvoice } from '../helpers/actions'
import EditInvoiceForm from './EditForm'

const initialState: State = { message: null, errors: {}}

const FormEditWrapper: FC<{customers: FormProps; invoice: Invoice}> = ({ customers, invoice }) => {

  const [state, formAction] = useActionState(updateInvoice, initialState);

  return (
    <div>
      <EditInvoiceForm customers={customers} formAction={formAction}  state={state} invoice={invoice}/>
    </div>
  )
}

export default FormEditWrapper