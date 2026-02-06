import Navbar from '../../../components/Navbar';
import Footer from '../../../components/Footer';
import SchemaOrg from '../../../components/SchemaOrg';

export default function MainLayout({ children, params: { locale } }) {
    return (
        <>
            <SchemaOrg locale={locale} />
            <Navbar locale={locale} />
            <main>{children}</main>
            <Footer locale={locale} />
        </>
    );
}
