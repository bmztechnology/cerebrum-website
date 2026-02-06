"use client";
import LessonContent from "../LessonContent";

export default function Module2() {
    const content = (
        <>
            <p>Now that you understand the basics, let's explore how Cerebrum AI revolutionizes trading.</p>

            <h3>1. The AI Advantage</h3>
            <p>Humans are emotional; AI is disciplined. Cerebrum analyzes millions of data points every second to find patterns invisible to the human eye.</p>

            <h3>2. How Signals Work</h3>
            <p>Our AI assigns a Confidence Score to every potential trade. We only execute trades when probability is in our favor ({'>'}80%).</p>
        </>
    );

    return (
        <LessonContent
            title="Module 2: AI Trading 101"
            content={content}
            nextLesson={{ title: "Risk Management", href: "/academy/risk-management" }}
        />
    );
}
