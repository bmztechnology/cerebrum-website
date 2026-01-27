"use client";
import LessonContent from "../LessonContent";

export default function Module1() {
    const content = (
        <>
            <p>Welcome to the first module of Cerebrum Academy. Here we will cover the absolute basics of Forex trading.</p>

            <h3>1. What is Forex?</h3>
            <p>Forex (Foreign Exchange) is the global marketplace for exchanging national currencies against one another.</p>

            <h3>2. Currency Pairs</h3>
            <p>Currencies are always traded in pairs, such as EUR/USD. The first currency is the Base currency, the second is the Quote currency.</p>

            <h3>3. Pips and Lots</h3>
            <p>A Pip is the smallest unit of price movement. A Lot is the standard unit size of a transaction.</p>
        </>
    );

    return (
        <LessonContent
            title="Module 1: Forex Basics"
            content={content}
            nextLesson={{ title: "AI Trading 101", href: "/academy/ai-trading" }}
        />
    );
}
