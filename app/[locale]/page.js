'use client';

import Hero from '../../components/Hero';
import MarketStatus from '../../components/MarketStatus';
import Features from '../../components/Features';
import Architecture from '../../components/Architecture';
import Profiles from '../../components/Profiles';
import HowItWorks from '../../components/HowItWorks';
import PositionCalculator from '../../components/PositionCalculator';
import Visuals from '../../components/Visuals';
import TradingTools from '../../components/TradingTools';
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import Download from '../../components/Download';

export default function HomePage() {
    return (
        <>
            {/* Hero + Disclaimer Banner */}
            <Hero />

            {/* Live Market Status - Trader Utility */}
            <MarketStatus />

            {/* Features Grid - SEO Content */}
            <Features />

            {/* Core Architecture - AI vs EA */}
            <Architecture />

            {/* Trading Modes - Autonomous/Assisted/Manual */}
            <Profiles />

            {/* How It Works - Conversion Funnel */}
            <HowItWorks />

            {/* Position Calculator - Trader Utility */}
            <PositionCalculator />

            {/* Interface Visuals */}
            <Visuals />

            {/* Trading Tools - Charts/Calendar/News */}
            <TradingTools />

            {/* FAQ - SEO + AI Discoverability */}
            <FAQ />

            {/* Contact Form - Email Support */}
            <ContactForm />

            {/* Download CTA */}
            <Download />
        </>
    );
}
