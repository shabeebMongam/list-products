import React from 'react';

const ProductLayout = ({ children }: Readonly<{
    children: React.ReactNode;
}>) => {
    return (
        <main className='flex h-screen justify-center items-center'>
            {children}
        </main>
    );
};

export default ProductLayout;
