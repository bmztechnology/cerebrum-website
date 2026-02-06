"use client";
import LessonContent from "../LessonContent";

export default function Module3() {
    const content = (
        <>
            <p>Capital preservation is the #1 rule of trading. Even the best strategy fails without risk management.</p>

            <h3>1. Stop Loss & Take Profit</h3>
            <p>Never enter a trade without an exit plan. Cerebrum automatically sets dynamic SL and TP levels based on volatility.</p>

            <h3>2. Position Sizing</h3>
            <p>We recommend risking no more than 1-2% of your account balance per trade.</p>
        </>
    );

    return (
        <LessonContent
            title="Module 3: Risk Management"
            content={content}
            nextLesson={null}
        />
    );
}
