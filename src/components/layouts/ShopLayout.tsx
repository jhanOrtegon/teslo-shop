import { NextPage } from 'next';
import Head from 'next/head';
import { ReactNode } from 'react';

interface IShopLayout {
    title: string,
    pageDescription: string,
    imageFullUrl?: string,
    children: ReactNode
}

export const ShopLayout:NextPage<IShopLayout> = ({ children, title, pageDescription, imageFullUrl}) => {
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={pageDescription} />
            </Head>

            <nav>
                {/* {} */}
            </nav>

            {/* sidebar */}

            <main style={{
                margin: '80px auto',
                maxWidth: '1440px',
                padding: '0px 30px'
            }}>
                {children}
            </main>

            <footer>
                {/*  */}
            </footer>
        </>
    );
};