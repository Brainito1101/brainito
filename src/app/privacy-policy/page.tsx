import { LegalLayout } from "@/components/layout/legal-layout";

export const metadata = {
    title: "Privacy Policy | Brainito",
    description: "Brainito's Privacy Policy explains how we collect, use, and protect your information.",
};

export default function PrivacyPolicyPage() {
    return (
        <LegalLayout title="Privacy Policy" lastUpdated="January 1, 2025">
            <div className="prose">
                <h2>1. Introduction</h2>
                <p>
                    Wockito Innovative Solutions PVT LTD (&quot;Brainito&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our website and services.
                </p>

                <h2>2. Information We Collect</h2>
                <p>We may collect the following types of information:</p>
                <ul>
                    <li><strong>Personal Information:</strong> Name, email address, phone number, and business details you provide when signing up or contacting us.</li>
                    <li><strong>Website Data:</strong> Information about your website when you use our analysis tools.</li>
                    <li><strong>Usage Data:</strong> Information about how you interact with our platform, including pages visited and features used.</li>
                    <li><strong>Technical Data:</strong> IP address, browser type, device information, and cookies.</li>
                </ul>

                <h2>3. How We Use Your Information</h2>
                <p>We use the collected information to:</p>
                <ul>
                    <li>Provide and improve our marketing analysis and planning services</li>
                    <li>Communicate with you about our services</li>
                    <li>Send you marketing communications (with your consent)</li>
                    <li>Analyze usage patterns to improve our platform</li>
                    <li>Comply with legal obligations</li>
                </ul>

                <h2>4. Information Sharing</h2>
                <p>
                    We do not sell your personal information. We may share your information with service providers who assist us in operating our platform, and when required by law or to protect our rights.
                </p>

                <h2>5. Data Security</h2>
                <p>
                    We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
                </p>

                <h2>6. Your Rights</h2>
                <p>You have the right to:</p>
                <ul>
                    <li>Access your personal information</li>
                    <li>Correct inaccurate data</li>
                    <li>Request deletion of your data</li>
                    <li>Opt-out of marketing communications</li>
                    <li>Data portability</li>
                </ul>

                <h2>7. Contact Us</h2>
                <p>
                    If you have any questions about this Privacy Policy, please contact us at:
                </p>
                <p>
                    <strong>Email:</strong> support@brainito.com<br />
                    <strong>Address:</strong> Wockito Innovative Solutions PVT LTD, 1101, 11th Floor, Satyamev Elite, Ambli-Bopal, Vakil Saheb Bridge, T Junction, Ahmedabad, Gujarat 380058, India
                </p>
            </div>
        </LegalLayout>
    );
}
