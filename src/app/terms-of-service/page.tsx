import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata = {
    title: "Terms of Service | Brainito",
    description: "Read Brainito's Terms of Service for using our AI-powered marketing platform and services.",
};

export default function TermsOfServicePage() {
    return (
        <LegalLayout title="Terms of Service" lastUpdated="January 1, 2025">
            <div className="prose">
                <h2>1. Acceptance of Terms</h2>
                <p>
                    By accessing or using the Brainito platform and services provided by Wockito Innovative Solutions PVT LTD, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our services.
                </p>

                <h2>2. Description of Services</h2>
                <p>
                    Brainito provides AI-powered marketing analysis, strategy planning, and dedicated marketing services. Our services include the Free AI Plan, DIY Marketing Plan, and Hire a Marketer services.
                </p>

                <h2>3. User Accounts</h2>
                <p>To access certain features, you may need to create an account. You agree to:</p>
                <ul>
                    <li>Provide accurate and complete information</li>
                    <li>Maintain the security of your account credentials</li>
                    <li>Notify us immediately of any unauthorized access</li>
                    <li>Be responsible for all activities under your account</li>
                </ul>

                <h2>4. Payment Terms</h2>
                <p>
                    Paid services are billed in advance on a monthly basis. All fees are non-refundable except as specified in our Refund Policy. We reserve the right to modify pricing with 30 days notice.
                </p>

                <h2>5. Intellectual Property</h2>
                <p>
                    All content, features, and functionality of our platform are owned by Wockito Innovative Solutions PVT LTD and are protected by copyright, trademark, and other intellectual property laws.
                </p>

                <h2>6. User Conduct</h2>
                <p>You agree not to:</p>
                <ul>
                    <li>Use our services for any unlawful purpose</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt our services</li>
                    <li>Reproduce or distribute our content without permission</li>
                </ul>

                <h2>7. Limitation of Liability</h2>
                <p>
                    To the maximum extent permitted by law, Brainito shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of our services.
                </p>

                <h2>8. Termination</h2>
                <p>
                    We may terminate or suspend your account and access to our services at our sole discretion, without prior notice, for conduct that we believe violates these Terms or is harmful to other users or our business.
                </p>

                <h2>9. Governing Law</h2>
                <p>
                    These Terms shall be governed by and construed in accordance with the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Ahmedabad, Gujarat.
                </p>

                <h2>10. Contact Us</h2>
                <p>
                    For questions about these Terms, contact us at:<br />
                    <strong>Email:</strong> support@brainito.com<br />
                    <strong>Address:</strong> Wockito Innovative Solutions PVT LTD, 1101, 11th Floor, Satyamev Elite, Ambli-Bopal, Vakil Saheb Bridge, T Junction, Ahmedabad, Gujarat 380058, India
                </p>
            </div>
        </LegalLayout>
    );
}
