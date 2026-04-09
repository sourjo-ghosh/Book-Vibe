import React from 'react';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-base-200">
            <div className="text-center">
                <div className="text-9xl font-bold text-[#131313] mb-4">404</div>
                <h1 className="text-4xl font-bold text-[#131313] mb-2">Page Not Found</h1>
                <p className="text-lg text-gray-600 mb-8 p-3">Sorry, the page you're looking for doesn't exist. It might have been moved or deleted.</p>
                <div className="mb-8">
                    <svg className="mx-auto h-32 w-32 text-[#59C6D2]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                </div>
                <Link to={'/'}className="btn bg-[#23BE0A] text-white px-8 py-3 text-lg hover:bg-[#1da007]">Go Back Home</Link>
            </div>
        </div>
    );
};

export default ErrorPage;