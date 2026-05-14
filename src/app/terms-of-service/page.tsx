import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Prose from '@/components/ui/Prose'
import { site } from '@/lib/site'

export const metadata: Metadata = {
  title: 'Terms of Service',
  description: `Terms of service for ${site.name}.`,
}

export default function TermsOfServicePage() {
  return (
    <main>
      <PageHero
        eyebrow="Legal"
        title="Terms of Service"
        subtitle="Effective date: November 1, 2025"
      />
      <Prose>
        <h2>Introduction</h2>
        <p>
          Welcome to {site.name}. These Terms of Service (&quot;Terms&quot;) govern your access to
          and use of the website at <strong>{site.domain}</strong> and any related services provided
          by {site.legalName}. By using our website you agree to be bound by these Terms.
        </p>

        <h2>Use of the Website</h2>
        <p>
          You agree to use the website only for lawful purposes and in a way that does not infringe
          the rights of, restrict, or inhibit anyone else&apos;s use and enjoyment of the website.
        </p>

        <h2>Donations</h2>
        <p>
          All donations made to {site.legalName} are voluntary. Donations are processed by
          third-party providers (PayPal Giving Fund, The Donors Fund, Venmo) subject to their own
          terms and privacy policies. Because of the nature of our 501(c)(3) work, donations are
          generally non-refundable; if you believe a gift was made in error, please contact us
          promptly.
        </p>

        <h2>Tax-Deductibility</h2>
        <p>
          {site.legalName} is a 501(c)(3) charitable non-profit (EIN {site.ein}). Contributions are
          tax-deductible to the fullest extent allowed by law. You should consult your tax advisor
          regarding your specific situation.
        </p>

        <h2>Intellectual Property</h2>
        <p>
          Unless otherwise indicated, all content on this website — including text, graphics, logos,
          and images — is the property of {site.legalName} or its licensors and is protected by
          applicable copyright and trademark laws.
        </p>

        <h2>Third-Party Links</h2>
        <p>
          This website may contain links to third-party websites (such as donation processors and
          partner organizations). We are not responsible for the content or privacy practices of
          those websites.
        </p>

        <h2>Disclaimer</h2>
        <p>
          The information on this website is provided on an &quot;as is&quot; basis. We make no
          representations or warranties of any kind, express or implied, regarding the accuracy,
          completeness, or availability of the website.
        </p>

        <h2>Limitation of Liability</h2>
        <p>
          To the fullest extent permitted by law, {site.legalName} will not be liable for any
          indirect, incidental, or consequential damages arising out of your use of, or inability to
          use, this website.
        </p>

        <h2>Governing Law</h2>
        <p>These Terms are governed by the laws of the State of New Jersey.</p>

        <h2>Changes</h2>
        <p>
          We may update these Terms from time to time. Material changes will be posted on this page
          along with an updated effective date.
        </p>

        <h2>Contact</h2>
        <p>
          For questions about these Terms, contact us at{' '}
          <a href={`mailto:${site.contact.email}`}>{site.contact.email}</a> or {site.contact.phone}.
        </p>
      </Prose>
    </main>
  )
}
