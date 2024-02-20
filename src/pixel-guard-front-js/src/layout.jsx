/* eslint-disable react/prop-types */
import React from 'react';
import ThemeProvider from './commons/theme/ThemeProvider';

export const metadata = {
  title: 'PixelGuard (Inspecter les pixels, code-to-pixels)',
  description: 'Identification des régressions visuelles',
};

const RootLayout = ({
  children,
}) => (
  <html lang="en">
    <body>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </body>
  </html>
);

export default RootLayout;
