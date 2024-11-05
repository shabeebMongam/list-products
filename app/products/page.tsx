import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface Rating {
    rate: number;
    count: number;
}

interface Product {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: Rating;
}

const Products = async () => {
    const res = await fetch(`https://fakestoreapi.com/products`);
    const products = await res.json();
    console.log(products);

    return (
        <section className="flex flex-wrap justify-center gap-4 p-4">
            {products.map((product: Product, index: number) => (
                <Link href={`products/${index + 1}`} key={product.id} className="flex flex-col items-center justify-between max-h-96  p-5 bg-white border border-gray-300 rounded-lg shadow-md overflow-hidden w-64 m-4 text-center transition-transform transform hover:scale-105">
                    <div className='h-[80%] overflow-hidden flex items-center'>
                        <Image
                            src={product.image}
                            alt={product.title}
                            className="object-cover"
                            width={200}
                            height={200}
                        />
                    </div>
                    <div className='flex flex-col  w-full items-start cursor-pointer'>
                        <h2
                            className="text-lg group relative "
                            title={product.title}
                        >
                            {product.title.length > 20 ? product.title.slice(0, 17) + " ..." : product.title}
                        </h2>
                        <p className="text-gray-600">${product.price}</p>
                    </div>

                </Link>
            ))}
        </section>
    );
};

export default Products;