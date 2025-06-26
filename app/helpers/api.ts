const header = { 
        "Content-Type": "application/json",
        Authorization: "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY4MzhkOTBjNjFjYzI2MzJhOWQwOGM2NyIsImVtYWlsIjoiYW5qaGVsb0B0ZXN0LmNvbSIsIm5hbWUiOiJhbmpoZWxvICAiLCJpYXQiOjE3NDg1NTYwOTB9.x47LgbILhqTeRTyzb8HOtwHmpmTdS1aBf_7FilI1-XY"
      }

export const fetchCardData = async () => {
  try {
    const [getCustomerCount, getInvoicesCount, getInvoicesStatusCound] = await Promise.all([
      fetch(`${process.env.BACKEND_URL}/customer/count`, { headers: header }),
      fetch(`${process.env.BACKEND_URL}/invoices/count`, { headers: header }),
      fetch(`${process.env.BACKEND_URL}/invoices/status-count`, { headers: header })
    ])

    const resultGetCustomerCount = await getCustomerCount.json();
    const resultInvoicesCount = await getInvoicesCount.json();
    const resultInvoicesStatusCount = await getInvoicesStatusCound.json();


    const numberOfInvoices = Number(resultInvoicesCount ?? "0")
    const numberOfCustomers = Number(resultGetCustomerCount ?? "0")
    const totalPaidInvoices = resultInvoicesStatusCount.paid ?? "0"
    const totalPendingInvoices = resultInvoicesStatusCount.pending ?? '0'

    return {
      numberOfInvoices,
      numberOfCustomers,
      totalPaidInvoices,
      totalPendingInvoices
    }
    
  } catch (error) {
   console.log('Error fetchCardData', error) 
  }
}

export const fetchRevenue = async () => {
  try {
    const fetchRevenue = await fetch(`${process.env.BACKEND_URL}/revenues`, {headers: header})
    const revenueResult = await fetchRevenue.json()
    return revenueResult;
  } catch (error) {
    console.log('Error in fetchRevenue', error)
  } 
}

export const fetchLatestInvoices = async () => {
  try {
    const fetchInvoices = await fetch(`${process.env.BACKEND_URL}/invoices`, {headers: header})
    const invoicesResult = await fetchInvoices.json();
    return invoicesResult;
  } catch (error) {
    console.log('Error in fetchLatestInvoices', error)
  }
}

export const fetchFilteredInvoices = async (query?: string, currentPage?: number) => {
  try {
    const fetchFilteredInvoices = await fetch(`${process.env.BACKEND_URL}/invoices/paginate?q=${query}&page=${currentPage}`, {headers: header});
    const resultFetchFilteredInvoices = await fetchFilteredInvoices.json()

    return resultFetchFilteredInvoices;
  } catch (error) {
    console.log(error)
  }
}

export const fetchInvoicesPages = async (query: string) => {
  try {
    const getInvoicesPages = await fetch(`${process.env.BACKEND_URL}/invoices/page-count?q=${query}`, {headers: header});
    const resultGetInvoicesPages = await getInvoicesPages.json()

    return resultGetInvoicesPages;
  } catch (error) {
    console.log(error)
  }
}

export const fetchCustomers = async () => {
  try {
     const getCustomers = await fetch(`${process.env.BACKEND_URL}/customer`, {headers: header})
     const resultGetCustomers = await getCustomers.json();

     return resultGetCustomers;
  } catch (error) {
    console.log('Error in fetchCustomers', error)
  }
}

export const fetchInvoiceId = async (id: string) => {
  try {
     const getInvoiceById = await fetch(`${process.env.BACKEND_URL}/invoice/${id}`, {headers: header})
     const resultGetInvoiceById = await getInvoiceById.json();

     return resultGetInvoiceById;
  } catch (error) {
    console.log('Error in fetchCustomers', error)
  }
}