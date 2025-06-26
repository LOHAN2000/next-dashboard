'use server'

import { revalidatePath } from 'next/cache';
import { redirect } from 'next/navigation';
import { z } from 'zod'

export type State = {
  errors: {
    customerId?: string[];
    amount?: string[];
    status?: string[];
  };
  message: string | null;
};

const FormSchema = z.object({
  id: z.string(),
  customerId: z.string({
    invalid_type_error: 'Please select a customer.',
  }),
  amount: z.coerce
    .number()
    .gt(0, { message: 'Please enter an amount greater than $0.' }),
  status: z.enum(['pending', 'paid'], {
    invalid_type_error: 'Please select an invoice status.',
  }),
  date: z.string(),
});

const CreateInvoice = FormSchema.omit({ id: true, date: true });
const UpdateInvoice = FormSchema.omit({ date: true, id: true });

export const createInvoice = async (prevState: State, formData: FormData) => {
  const validateFields = CreateInvoice.safeParse({
    customerId: formData.get('customerId'),
    amount: formData.get('amount'),
    status: formData.get('status')
  })

  if (!validateFields.success) {
    return {
      errors: validateFields.error.flatten().fieldErrors,
      message: 'Missing Fields. Failed to Create Invoice.'
    }
  }

  const { customerId, amount, status } = validateFields.data
  const amountInCents = amount * 100;
  const date = new Date().toString().split('T')[0];

  const body = {
    customerId,
    date,
    amount: amountInCents,
    customer: customerId
  }


  try {
    const response = await fetch (`${process.env.BACKEND_URL}/invoices`, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzhkOTBjNjFjYzI2MzJhOWQwOGM2NyIsImVtYWlsIjoiYW5qaGVsb0B0ZXN0LmNvbSIsIm5hbWUiOiJhbmpoZWxvICAiLCJpYXQiOjE3NDg1NTYwOTB9.x47LgbILhqTeRTyzb8HOtwHmpmTdS1aBf_7FilI1-XY"
      },
      method: 'POST',
      body: JSON.stringify(body)
    })
    
  } catch (error) {
    console.log('Error in action createInvoice', error)
  }

  revalidatePath('/dashboard/invoices');
  redirect('/dashboard/invoices');

  return {
    errors: {},
    message: 'Success',
  };
}

export const updateInvoice = async (prevState: State, formData: FormData) => {

  console.log(formData)

  // const validateFields = CreateInvoice.safeParse({
  //   customerId: formData.get('customerId'),
  //   amount: formData.get('amount'),
  //   status: formData.get('status')
  // })

  // if (!validateFields.success) {
  //   return {
  //     errors: validateFields.error.flatten().fieldErrors,
  //     message: 'Missing Fields. Failed to Create Invoice.'
  //   }
  // }

  // const { customerId, amount, status } = validateFields.data
  // const amountInCents = amount * 100;
  // const date = new Date().toString().split('T')[0];

  // const body = {
  //   customerId,
  //   date,
  //   amount: amountInCents,
  //   customer: customerId
  // }


  // try {
  //   const response = await fetch (`${process.env.BACKEND_URL}/invoices`, {
  //     headers: {
  //       "Content-Type": "application/json",
  //       Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzhkOTBjNjFjYzI2MzJhOWQwOGM2NyIsImVtYWlsIjoiYW5qaGVsb0B0ZXN0LmNvbSIsIm5hbWUiOiJhbmpoZWxvICAiLCJpYXQiOjE3NDg1NTYwOTB9.x47LgbILhqTeRTyzb8HOtwHmpmTdS1aBf_7FilI1-XY"
  //     },
  //     method: 'POST',
  //     body: JSON.stringify(body)
  //   })

  //   const data = await response.json();

    
  // } catch (error) {
  //   console.log('Error in action createInvoice', error)
  // }

  // revalidatePath('/dashboard/invoices');
  // redirect('/dashboard/invoices');

  // return {
  //   errors: {},
  //   message: 'Success',
  // };
}