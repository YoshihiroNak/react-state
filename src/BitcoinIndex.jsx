import React, { useEffect, useState } from 'react'


const BitcoinIndex = () => {
    // [accessing, function to update]
    let [price, setPrice] = useState('')

    useEffect(() => {
        fetch('https://api.coindesk.com/v1/bpi/currentprice/AUD')
            .then(res => res.json())
            .then(data => setPrice(data.bpi.AUD.rate))
    }, [])

    return <p>Current Price (AUD): {price}</p>
}
export default BitcoinIndex