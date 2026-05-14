import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Prose from '@/components/ui/Prose'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: `Privacy policy for ${site.name}.`,
}

export default function PrivacyPolicyPage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Privacy Policy"
        subtitle="Effective date: November 1, 2025"
      />
      <Prose>
        <h2>Introduction</h2>
        <p>
          {site.legalName} (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) respects your
          privacy. This Privacy Policy explains what information we collect, how we use it, and your
          rights regarding that information when you visit <strong>{site.domain}</strong> or
          otherwise interact with our organization.
        </p>

        <h2>Information We Collect</h2>
        <p>We may collect the following information when you interact with us:</p>
        <ul>
          <li>
            <strong>Contact information</strong> you provide voluntarily — for example, when you
            email or call us, mail us a donation, or sign up to volunteer.
          </li>
          <li>
            <strong>Donation information</strong> processed by our third-party donation partners
            (PayPal Giving Fund, The Donors Fund, Venmo). We do not collect or store credit card
            numbers ourselves.
          </li>
          <li>
            <strong>Basic web analytics</strong> such as pages viewed and approximate location,
            collected only if you accept analytics cookies through our cookie consent banner.
          </li>
        </ul>

        <h2>How We Use Your Information</h2>
        <ul>
          <li>To send you a tax receipt and annual donation summary.</li>
          <li>To respond to inquiries about volunteering, partnerships, or families in need.</li>
          <li>To improve our website and communications.</li>
          <li>To comply with legal obligations applicable to 501(c)(3) organizations.</li>
        </ul>

        <h2>How We Share Your Information</h2>
        <p>We do not sell or rent your personal information. We share information only with:</p>
        <ul>
          <li>
            <strong>Donation processors</strong> (PayPal Giving Fund, The Donors Fund, Venmo) so
            they can process your gift.
          </li>
          <li>
            <strong>Government agencies</strong> when required by law — for example, the New Jersey
            Office of the Attorney General and the IRS.
          </li>
          <li>
            <strong>Service providers</strong> who help operate our website, under confidentiality
            obligations.
          </li>
        </ul>

        <h2>Donor Privacy</h2>
        <p>
          We do not publicize donor names or amounts donated without permission. Anonymous gifts are
          welcomed and respected.
        </p>

        <h2>Cookies</h2>
        <p>
          Our website uses minimal cookies. Necessary cookies are required for the site to function.
          Analytics cookies are loaded only with your consent through our cookie banner. You may
          withdraw consent at any time by clicking the &quot;Customize&quot; button on the cookie
          banner.
        </p>

        <h2>Your Rights</h2>
        <p>You may request that we:</p>
        <ul>
          <li>Confirm what personal information we hold about you;</li>
          <li>Correct inaccurate information;</li>
          <li>Delete information that we are not legally required to retain;</li>
          <li>Stop sending you communications.</li>
        </ul>

        <h2>Contact Us</h2>
        <p>
          To exercise any of these rights, or for any privacy question, contact us at{' '}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or {site.contact.phone}.
        </p>

        <h2>Changes to This Policy</h2>
        <p>
          We may update this Privacy Policy from time to time. Material changes will be posted on
          this page along with an updated effective date.
        </p>
      </Prose>
    </main>
  )
}
