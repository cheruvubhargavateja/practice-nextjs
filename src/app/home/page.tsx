'use client'

import { useRouter } from "next/navigation"

export default function Home() {

    const router = useRouter()

    const logout = async ()=>{
        const res = await fetch('/api/logout')
        if(res.status == 200){
            router.push('/login')
        }else{
            console.log('logging out is failed');
        }
    }

  return (
    <div className="text-lg text-red-200">Home page
        <button onClick={logout}>logout</button>
    </div>
  )
}
