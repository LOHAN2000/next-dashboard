import clsx from 'clsx';
import { BiCheck } from 'react-icons/bi';
import { CiClock1 } from 'react-icons/ci';

export default function InvoiceStatus({ status }: { status: string }) {
  return (
    <span
      className={clsx(
        'inline-flex items-center rounded-full px-2 py-1 text-xs',
        {
          'bg-gray-100 text-gray-500': status === 'pending',
          'bg-green-500 text-white': status === 'paid',
        },
      )}
    >
      {status === 'pending' ? (
        <>
          Pending
          <CiClock1 className="ml-1 w-4 text-gray-500" />
        </>
      ) : null}
      {status === 'paid' ? (
        <>
          Paid
          <BiCheck className="ml-1 w-4 text-white" />
        </>
      ) : null}
    </span>
  );
}