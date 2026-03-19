import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata = {
    title: "Refund Policy | Brainito",
    description: "Read Brainito's Refund Policy to understand our commitment to your satisfaction and our refund processes.",
};

export default function RefundPolicyPage() {
    return (
        <LegalLayout title="Refund Policy" lastUpdated="January 1, 2025">
            <div className="prose">
                <h2>1. Overview</h2>
                <p>
                    At Brainito, we strive to ensure your complete satisfaction with our services. This Refund Policy outlines the terms and conditions for refunds on our various service offerings.
                </p>

                <h2>2. DIY Marketing Plan Refunds</h2>
                <p>For our DIY Marketing Plan subscription:</p>
                <ul>
                    <li><strong>7-Day Money-Back Guarantee:</strong> If you&apos;re not satisfied within the first 7 days of your subscription, you may request a full refund.</li>
                    <li><strong>After 7 Days:</strong> No refunds will be provided for the current billing period, but you may cancel to prevent future charges.</li>
                    <li><strong>Annual Plans:</strong> Pro-rated refunds may be available for annual subscriptions canceled within the first 30 days.</li>
                </ul>

                <h2>3. Hire a Marketer Refunds</h2>
                <p>For our Hire a Marketer service:</p>
                <ul>
                    <li><strong>First Month:</strong> If you&apos;re not satisfied within the first 14 days, you may request a pro-rated refund for unused time.</li>
                    <li><strong>Ongoing Service:</strong> After the first 14 days, refunds are not available for the current billing period.</li>
                    <li><strong>Cancellation:</strong> You may cancel with 30 days written notice. No refunds for partial months.</li>
                </ul>

                <h2>4. Free AI Plan</h2>
                <p>
                    Our Free AI Plan is provided at no cost, and therefore no refunds apply.
                </p>

                <h2>5. How to Request a Refund</h2>
                <p>To request a refund:</p>
                <ol>
                    <li>Email us at support@brainito.com with your account details</li>
                    <li>Include the reason for your refund request</li>
                    <li>Provide your order/subscription ID</li>
                    <li>Our team will respond within 2-3 business days</li>
                </ol>

                <h2>6. Refund Processing</h2>
                <p>
                    Approved refunds will be processed within 5-7 business days. Refunds will be credited to the original payment method. Please note that your bank may take additional time to reflect the refund in your account.
                </p>

                <h2>7. Non-Refundable Items</h2>
                <p>The following are not eligible for refunds:</p>
                <ul>
                    <li>Services that have been fully delivered</li>
                    <li>Custom marketing strategies after initial delivery</li>
                    <li>Third-party advertising spend or tools purchased on your behalf</li>
                </ul>

                <h2>8. Disputes</h2>
                <p>
                    If you have a dispute regarding a refund decision, please contact our support team. We will review your case and work with you to find a fair resolution.
                </p>

                <h2>9. Contact Us</h2>
                <p>
                    For refund inquiries, please contact:<br />
                    <strong>Email:</strong> support@brainito.com<br />
                    <strong>Address:</strong> Wockito Innovative Solutions PVT LTD, 1101, 11th Floor, Satyamev Elite, Ambli-Bopal, Vakil Saheb Bridge, T Junction, Ahmedabad, Gujarat 380058, India
                </p>
            </div>
        </LegalLayout>
    );
}
