import Link from 'next/link';
import { BiPlus, BiTrash } from 'react-icons/bi';
import { BsPencil } from 'react-icons/bs';

export function CreateInvoice() {
  return (
    <Link
      href="/dashboard/invoices/create"
      className="flex h-10 items-center rounded-lg bg-blue-600 px-4 text-sm font-medium text-white transition-colors hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"
    >
      <span className="hidden md:block">Create Invoice</span>{' '}
      <BiPlus className="h-5 md:ml-4" />
    </Link>
  );
}

export function UpdateInvoice({ invoiceId }: { invoiceId: string }) {
  console.log('Invoice ID desde UpdateInvoice:', invoiceId); // <-- Esto sí aparece en la consola

  return (
    <Link
      href={`/dashboard/invoices/${invoiceId}`}
      className="rounded-md border p-2 hover:bg-gray-100"
    >
      <BsPencil className="w-5" />
    </Link>
  );
}

export function DeleteInvoice({ id }: { id: string }) {
  return (
    <>
      <button type="submit" className="rounded-md border p-2 hover:bg-gray-100">
        <span className="sr-only">Delete</span>
        <BiTrash className="w-5" />
      </button>
    </>
  );
}