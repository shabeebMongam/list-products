'use client'
import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [number, setNumber] = useState('');
  const router = useRouter();

  const handleSubmit = () => {
    router.push(`/products/${number}`);
  };

  return (
    <main className="flex justify-center items-center h-[90vh] text-white w-full">
      <div className="flex gap-4 w-full justify-center items-center flex-col">
        <input 
          type="number" 
          className="px-3 py-3 w-[50%] rounded-3xl bg-slate-500 outline-none text-xl text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none" 
          value={number}
          onChange={(e) => setNumber(e.target.value)}
        />
        <button 
          className="px-20 py-3 font-bold text-xl rounded-full bg-slate-900" 
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>
    </main>
  );
}