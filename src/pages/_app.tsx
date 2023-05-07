import '@/styles/globals.css';
import { lightTheme } from '@/themes';
import { ThemeProvider } from '@emotion/react';
import { CssBaseline } from '@mui/material';
import type { AppProps } from 'next/app';

export default function App({ Component, pageProps }: AppProps) {
    return (
        <ThemeProvider theme={lightTheme}>
            {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
            <CssBaseline />
            <Component {...pageProps} />
        </ThemeProvider>
    );
}
