export async function generateMetadata({ params }) {
    const { locale } = await params;
    return {
        alternates: {
            canonical: `/${locale}/pricing`,
        }
    };
}

export default function PricingLayout({ children }) {
    return <>{children}</>;
}
