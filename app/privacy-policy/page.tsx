import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy Policy | SuperKit",
  description: "Privacy Policy for SuperKit - Next.js starter kit",
};

export default function PrivacyPolicyPage() {
  const currentDate = new Date();
  const lastUpdated = `${currentDate.toLocaleString("default", {
    month: "long",
  })} ${currentDate.getDate()}, ${currentDate.getFullYear()}`;

  return (
    <div className="bg-background min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          {/* Back to Home */}
          <div className="mb-8">
            <Link
              href="/"
              className="text-primary-300 hover:text-primary-400 transition-colors duration-200 flex items-center gap-2"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="19" y1="12" x2="5" y2="12" />
                <polyline points="12 19 5 12 12 5" />
              </svg>
              Back to Home
            </Link>
          </div>

          {/* Main Content */}
          <div className="prose prose-invert max-w-none">
            <h1 className="text-3xl sm:text-4xl font-bold text-foreground mb-4">
              Privacy Policy
            </h1>
            <p className="text-secondary-400 mb-8">
              Last updated: {lastUpdated}
            </p>

            <div className="space-y-8">
              {/* Introduction */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Introduction
                </h2>
                <p className="text-secondary-300">
                  Welcome to SuperKit (“we,” “our,” or “us”). We respect your
                  privacy and are committed to protecting your personal data.
                  This privacy policy will inform you about how we handle your
                  personal data when you visit our website and use our services,
                  and tell you about your privacy rights and how the law
                  protects you.
                </p>
              </section>

              {/* Information We Collect */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Information We Collect
                </h2>
                <div className="space-y-4">
                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      Personal Information
                    </h3>
                    <p className="text-secondary-300">
                      When you use SuperKit, we may collect the following types
                      of personal information:
                    </p>
                    <ul className="list-disc pl-5 text-secondary-300 mt-2 space-y-1">
                      <li>Name and contact details (email address, etc.)</li>
                      <li>Authentication information (passwords, tokens)</li>
                      <li>
                        Technical data (IP address, browser type and version,
                        time zone setting, operating system)
                      </li>
                      <li>
                        Usage data (information about how you use our website
                        and services)
                      </li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      How We Collect Information
                    </h3>
                    <p className="text-secondary-300">
                      We collect information through:
                    </p>
                    <ul className="list-disc pl-5 text-secondary-300 mt-2 space-y-1">
                      <li>Direct interactions (when you sign up, contact us, etc.)</li>
                      <li>Automated technologies (cookies, server logs)</li>
                      <li>
                        Third parties (analytics providers, payment processors)
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* How We Use Your Information */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  How We Use Your Information
                </h2>
                <p className="text-secondary-300 mb-2">
                  We use your information for the following purposes:
                </p>
                <ul className="list-disc pl-5 text-secondary-300 space-y-1">
                  <li>To provide and maintain our services</li>
                  <li>To authenticate users and secure accounts</li>
                  <li>To improve, personalize, and expand our services</li>
                  <li>To analyze usage patterns and optimize performance</li>
                  <li>To communicate with you about updates or changes</li>
                  <li>To comply with legal obligations</li>
                </ul>
              </section>

              {/* Data Retention */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Data Retention
                </h2>
                <p className="text-secondary-300">
                  We will only retain your personal data for as long as necessary
                  to fulfill the purposes we collected it for, including for the
                  purposes of satisfying any legal, accounting, or reporting
                  requirements. When determining the appropriate retention period,
                  we consider the amount, nature, and sensitivity of the data, the
                  potential risk of harm from unauthorized use or disclosure, the
                  purposes for which we process the data, and applicable legal
                  requirements.
                </p>
              </section>

              {/* Data Security */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Data Security
                </h2>
                <p className="text-secondary-300">
                  We have implemented appropriate security measures to prevent your
                  personal data from being accidentally lost, used, or accessed in
                  an unauthorized way, altered, or disclosed. In addition, we limit
                  access to your personal data to those employees, agents,
                  contractors, and other third parties who have a business need to
                  know.
                </p>
              </section>

              {/* Your Rights */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Your Rights
                </h2>
                <p className="text-secondary-300 mb-2">
                  Depending on your location, you may have the following rights
                  regarding your personal data:
                </p>
                <ul className="list-disc pl-5 text-secondary-300 space-y-1">
                  <li>
                    <strong>Right to access</strong> – request copies of your
                    personal information
                  </li>
                  <li>
                    <strong>Right to rectification</strong> – correct inaccurate
                    information
                  </li>
                  <li>
                    <strong>Right to erasure</strong> – delete your personal
                    information
                  </li>
                  <li>
                    <strong>Right to restrict processing</strong> – limit our
                    use of your data
                  </li>
                  <li>
                    <strong>Right to data portability</strong> – receive your
                    data in a portable format
                  </li>
                  <li>
                    <strong>Right to object</strong> – object to our processing of
                    your personal data
                  </li>
                </ul>
              </section>

              {/* Cookies */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Cookies</h2>
                <p className="text-secondary-300">
                  We use cookies and similar tracking technologies to track activity
                  on our site and store certain information. Cookies are files with
                  a small amount of data that may include an anonymous unique
                  identifier. You can instruct your browser to refuse all cookies
                  or to indicate when a cookie is being sent.
                </p>
              </section>

              {/* Changes to This Privacy Policy */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">
                  Changes to This Privacy Policy
                </h2>
                <p className="text-secondary-300">
                  We may update our Privacy Policy from time to time. We will notify
                  you of any changes by posting the new Privacy Policy on this page
                  and updating the "Last updated" date. You are advised to review
                  this Privacy Policy periodically for any changes.
                </p>
              </section>

              {/* Playful Disclaimer */}
              <section>
                <h2 className="text-2xl font-bold text-foreground mb-4">Final Words</h2>
                <p className="text-secondary-300 text-lg">
                  Okay, real talk 👀 — this privacy policy is just a placeholder. I'm
                  not collecting your data (I wouldn’t even know how if I wanted to
                  😅). But I didn’t wanna leave this section empty, so here we are!
                  Please don’t take it too seriously 😂.
                </p>
                <p className="text-secondary-300 text-lg mt-4">
                  Stay cool, build awesome stuff, and don’t forget to commit early &
                  often! 🚀💻✨😎🎉
                </p>
                <p className="mt-8 font-semibold text-foreground">
                  Regards, Zeeshan
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
