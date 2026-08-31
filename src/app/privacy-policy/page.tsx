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
      <PageHero eyebrow="Legal" title="Privacy Policy" subtitle="Effective date: August 30, 2026" />
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
            <strong>Basic web analytics</strong> such as pages viewed and approximate location. In
            the European Economic Area, the United Kingdom, and Switzerland, analytics cookies are
            set only after you accept them through our cookie consent banner; everywhere else they
            are set from your first visit and you can turn them off at any time via the Cookie
            Preferences link in our footer. (Switzerland is included because Google&apos;s consent
            defaults cover it; Swiss visitors&apos; data is protected by Switzerland&apos;s Federal
            Act on Data Protection (FADP) rather than the GDPR.)
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
          For analytics we use Google Consent Mode: in the European Economic Area, the United
          Kingdom, and Switzerland, Google Analytics sets no cookies and reads no identifiers until
          you accept through the cookie consent banner — until then only aggregate, cookieless
          measurement takes place. Everywhere else, analytics cookies are set from your first visit.
          Which rule applies to your visit is determined by Google from your IP address at the time
          of your visit; IP geolocation is approximate. You can change or withdraw your choice at
          any time via the Cookie Preferences link in our footer; withdrawing consent deletes the
          analytics cookies this site set. This site does not read or respond to the &quot;Do Not
          Track&quot; or Global Privacy Control browser signals; we do not sell or share personal
          information, so there is nothing for those signals to opt out of.
        </p>

        <h2>Your Rights in the European Union, United Kingdom, and EEA (GDPR)</h2>
        <p>
          If you visit from the European Union, the United Kingdom, or the wider European Economic
          Area, the EU General Data Protection Regulation (GDPR) or the UK GDPR applies to our
          handling of your personal data. We process personal data on the basis of consent (for
          analytics cookies in those regions), legitimate interests (operating and securing this
          website), and legal obligation. You have the right to: access the personal data we hold
          about you; have inaccurate data rectified; have your data erased; restrict or object to
          processing; receive your data in a portable format; and withdraw any consent you have
          given, at any time, without affecting the lawfulness of processing before withdrawal. To
          exercise these rights, contact us using the details below; we will respond within the time
          limits the GDPR sets. You also have the right to lodge a complaint with your national data
          protection supervisory authority (in the UK, the Information Commissioner&apos;s Office).
        </p>

        <h2>Your California Privacy Rights (CCPA/CPRA)</h2>
        <p>
          If you are a California resident, the California Consumer Privacy Act, as amended by the
          California Privacy Rights Act (CCPA/CPRA), gives you specific rights. We do not sell
          personal information, and do not share it for cross-context behavioral advertising, as
          those terms are defined by California law — and have not done so in the preceding 12
          months. We do not knowingly collect or sell the personal information of anyone under 16.
          You have the right to: know what personal information we collect, use, and disclose, and
          to access it; delete personal information we collected from you; correct inaccurate
          personal information; opt out of any sale or sharing of personal information (not
          applicable, since we do neither); limit the use of sensitive personal information; and not
          be discriminated against for exercising any of these rights. Submit a request using the
          contact details below; you may use an authorized agent, and we will respond within the
          timeframes California law requires.
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
