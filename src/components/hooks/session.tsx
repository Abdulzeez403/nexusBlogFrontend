import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';


const UseAuthorization = () => {
    const cookies = new Cookies();
    const [token, setToken] = useState<string>(cookies.get("jwt"));
    const router = useRouter();

    useEffect(() => {
        if (!token) {
            router.push('/signup');
        }
    }, [token, router]);
    return [token]
}



export default UseAuthorization
