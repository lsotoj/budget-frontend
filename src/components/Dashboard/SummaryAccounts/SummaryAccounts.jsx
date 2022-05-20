import React, { useState } from 'react'
import '../../../styles/Dashboard/SummaryAccounts.css';


export default function SummaryAccounts() {
  const [accounts, setAccounts] = useState([ 
    {cuenta: "bac", saldo: 100}, 
    {cuenta: "bi", saldo: 200 }, 
    {cuenta: "promerica", saldo: 2300 },
    {cuenta: "Credomatic", saldo: 800 },
    {cuenta: "Agromercantil", saldo: 5400 },

  ]);


  return (
    <div className='accounts-container'>
      { accounts.map( account => <div className='acount-container' key={ account.cuenta }>
          <div className='account-data'>{ account.cuenta }</div>
          <div className='account-data'>{account.saldo}</div>
        </div>)
      }
    </div>
  )
}
