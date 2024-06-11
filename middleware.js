import { NextResponse } from 'next/server';

const middleware = (request) => {
    const cspHeader = `
    default-src 'self';
    script-src 'self' https://replace-with-your-extrernal-script.com;
    style-src 'self' https://replace-with-your-external-style.com;
    img-src 'self' blob: data: https://replace-with-your-external-img.com;
    font-src 'self' https://replace-with-your-external-font.com;
    frame-src 'self' https://replace-with-your-frame.com;
    media-src https://replace-with-your-external-media.com;
    object-src 'none';
    base-uri 'self';
    form-action 'self';
    frame-ancestors 'none';
    block-all-mixed-content;
    upgrade-insecure-requests;
    connect-src 'self' ws://localhost:3000 
      http://localhost:3000 https://replace-with-your-webapi.com;
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
