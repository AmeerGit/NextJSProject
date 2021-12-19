import { useRouter } from 'next/router';
import React from 'react'

function LearnDetail() {
    const router = useRouter();
    const learnId  = router.query.learnId;
    return (
        <div>
            <h1>Learn more about Car  {learnId}</h1>
        </div>
    )
}

export default LearnDetail
