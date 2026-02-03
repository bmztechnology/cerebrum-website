'use client';

import Hero from '../../components/Hero';
import MarketStatus from '../../components/MarketStatus';
import LiveSignalDemo from '../../components/LiveSignalDemo';
import Features from '../../components/Features';
import Architecture from '../../components/Architecture';
import Profiles from '../../components/Profiles';
import HowItWorks from '../../components/HowItWorks';
import PositionCalculator from '../../components/PositionCalculator';
import Visuals from '../../components/Visuals';
import TradingTools from '../../components/TradingTools';
import FAQ from '../../components/FAQ';
import ContactForm from '../../components/ContactForm';
import Pricing from '../../components/Pricing';
import Download from '../../components/Download';
import SectionWrapper from '../../components/SectionWrapper';

export default function HomePage() {
    return (
        <>
            {/* Hero + Disclaimer Banner */}
            <Hero />

            {/* Live Market Status - Trader Utility */}
            <SectionWrapper id="market-status">
                <MarketStatus />
            </SectionWrapper>

            {/* AI Core Live Simulation */}
            <SectionWrapper id="live-demo">
                <LiveSignalDemo />
            </SectionWrapper>

            {/* Features Grid - SEO Content */}
            <SectionWrapper id="features">
                <Features />
            </SectionWrapper>

            {/* Core Architecture - AI vs EA */}
            <SectionWrapper id="architecture">
                <Architecture />
            </SectionWrapper>

            {/* Trading Modes - Autonomous/Assisted/Manual */}
            <SectionWrapper id="profiles">
                <Profiles />
            </SectionWrapper>

            {/* How It Works - Conversion Funnel */}
            <SectionWrapper id="how-it-works">
                <HowItWorks />
            </SectionWrapper>

            {/* Position Calculator - Trader Utility */}
            <SectionWrapper id="calculator">
                <PositionCalculator />
            </SectionWrapper>

            {/* Interface Visuals */}
            <SectionWrapper id="visuals">
                <Visuals />
            </SectionWrapper>

            {/* Trading Tools - Charts/Calendar/News */}
            <SectionWrapper id="tools">
                <TradingTools />
            </SectionWrapper>

            {/* FAQ - SEO + AI Discoverability */}
            <SectionWrapper id="faq">
                <FAQ />
            </SectionWrapper>

            {/* Contact Form - Email Support */}
            <SectionWrapper id="contact">
                <ContactForm />
            </SectionWrapper>

            {/* Pricing Plans */}
            <SectionWrapper id="pricing">
                <Pricing />
            </SectionWrapper>

            {/* Download CTA */}
            <SectionWrapper id="download">
                <Download />
            </SectionWrapper>
        </>
    );
}
