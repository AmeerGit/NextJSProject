import React from 'react'
import { useRouter } from 'next/router';


function ShopDetail() {
    const router = useRouter();
    const shopId  = router.query.shopId;
    return (
        <div>
            <h1>Shopping Car Details {shopId}</h1>
        </div>
    )
}

export default ShopDetail
