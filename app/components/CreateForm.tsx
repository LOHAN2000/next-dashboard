import Link from 'next/link';
import { CgCheck, CgDollar } from 'react-icons/cg';
import { FaClock } from 'react-icons/fa6';
import { BiUserCircle } from 'react-icons/bi';
import { Button } from './Button';
import { FC } from 'react';
import { State } from '../helpers/actions';

export interface FormSchema {
  _id: string,
  name: string,
  email: string,
  image_url: string
}

export interface FormProps {
  customers: FormSchema[],
  formAction: (formData: FormData) => void;
  state: State;
}

export interface Invoice {
  id: string,
  customer_id: string,
  amount: number,
  status: string
}


export const Form: FC<FormProps> = ({ customers, formAction, state }) => {
  return (
    <form action={formAction}>
      <div className="rounded-md bg-gray-50 p-4 md:p-6">
        {/* Customer Name */}
        <div className="mb-4">
          <label htmlFor="customer" className="mb-2 block text-sm font-medium">
            Choose customer
          </label>
          <div className="relative">
            <select id="customer" name="customerId" className="peer block w-full cursor-pointer rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" defaultValue="">
              <option value="" disabled>
                Select a customer
              </option>
              {customers.map((customer) => (
                <option key={customer._id} value={customer._id}>
                  {customer.name}
                </option>
              ))}
            </select>
            <BiUserCircle className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500" />
          </div>
        </div>

        {/* Invoice Amount */}
        <div className="mb-4">
          <label htmlFor="amount" className="mb-2 block text-sm font-medium">
            Choose an amount
          </label>
          <div className="relative mt-2 rounded-md">
            <div className="relative">
              <input id="amount" name="amount" type="number" step="0.01" placeholder="Enter USD amount" className="peer block w-full rounded-md border border-gray-200 py-2 pl-10 text-sm outline-2 placeholder:text-gray-500" />
              <CgDollar className="pointer-events-none absolute left-3 top-1/2 h-[18px] w-[18px] -translate-y-1/2 text-gray-500 peer-focus:text-gray-900" />
            </div>
          </div>
        </div>

        {/* Invoice Status */}
        <fieldset>
          <legend className="mb-2 block text-sm font-medium">
            Set the invoice status
          </legend>
          <div className="rounded-md border border-gray-200 bg-white px-[14px] py-3">
            <div className="flex gap-4">
              <div className="flex items-center">
                <input id="pending" name="status" type="radio" value="pending" className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"/>
                <label htmlFor="pending" className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-gray-100 px-3 py-1.5 text-xs font-medium text-gray-600">
                  Pending <FaClock className="h-4 w-4" />
                </label>
              </div>
              <div className="flex items-center">
                <input id="paid" name="status" type="radio" value="paid" className="h-4 w-4 cursor-pointer border-gray-300 bg-gray-100 text-gray-600 focus:ring-2"/>
                <label htmlFor="paid" className="ml-2 flex cursor-pointer items-center gap-1.5 rounded-full bg-green-500 px-3 py-1.5 text-xs font-medium text-white">
                  Paid <CgCheck className="h-4 w-4" />
                </label>
              </div>
            </div>
          </div>
        </fieldset>
      </div>
      <div className="mt-6 flex justify-end gap-4">
        <Link href="/dashboard/invoices" className="flex h-10 items-center rounded-lg bg-gray-100 px-4 text-sm font-medium text-gray-600 transition-colors hover:bg-gray-200">
          Cancel
        </Link>
        <Button type="submit">Create Invoice</Button>
      </div>
    </form>
  );
}