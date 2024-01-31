import React, { useEffect, useState } from 'react'
import CurrencySelector from './CurrencySelector'

//props trigger a render
const BitcoinIndex = () => {
    // [accessing, function to update]
    let [price, setPrice] = useState('')
    let [currency, setCurrency] = useState('AUD')


    useEffect(() => {
        //callback function
        fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}`)
            .then(res => res.json())
            .then(data => setPrice(data.bpi[currency].rate))
    }, [currency])

    return (
        <>
            <CurrencySelector setCurrency={setCurrency} />
            <p>
                Current Price ({currency}): {price}
            </p>
        </>
    )
}

export default BitcoinIndex