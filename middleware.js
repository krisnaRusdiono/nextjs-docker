import { NextResponse } from 'next/server';

const middleware = (request) => {
    const cspHeader = `
    default-src 'self';
    script-src 'self' 'unsafe-eval' 'unsafe-inline' https://accounts.google.com https://va.vercel-scripts.com;
    style-src 'self' 'unsafe-inline' https://accounts.google.com https://fonts.googleapis.com;
    img-src 'self' blob: data: https://sp.tinymce.com;
    font-src 'self' https://fonts.gstatic.com;
    frame-src 'self' https://accounts.google.com;
    media-src https://storage.googleapis.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    connect-src 'self' ${process.env.NEXT_PUBLIC_BASE_API_URL} ws://localhost:3000 
      http://localhost:3000 https://vitals.vercel-insights.com https://accounts.google.com;
`;
    // Replace newline characters and spaces
    const contentSecurityPolicyHeaderValue = cspHeader
        .replace(/\s{2,}/g, ' ')
        .trim();

    const requestHeaders = new Headers(request.headers);

    requestHeaders.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue,
    );

    const response = NextResponse.next({
        request: {
            headers: requestHeaders,
        },
    });
    response.headers.set(
        'Content-Security-Policy',
        contentSecurityPolicyHeaderValue,
    );

    return response;
};

export default middleware;
