import type { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import Prose from '@/components/ui/Prose'

export const metadata: Metadata = {
  title: 'Operating Principles',
  description:
    'The principles guiding how New Jersey Support Israel collects, manages, and distributes funds to families of terror victims and wounded IDF soldiers.',
}

export default function OperatingPrinciplesPage() {
  return (
    <main>
      <PageHero
        eyebrow="How We Operate"
        title="Operating Principles"
        subtitle="Discipline and transparency so that donors can be confident their generosity reaches the families who need it."
      />
      <Prose>
        <h2>Fund Distribution</h2>
        <p>
          <strong>100% of the collected funds are distributed</strong> among victims of terror and
          wounded IDF soldiers in Israel. Board members and officers serve as unpaid volunteers and
          cover administrative expenses personally so that none of your gift is consumed by
          overhead.
        </p>

        <h2>Direct Assistance</h2>
        <p>
          Whenever possible, we deliver help directly to the victims or their immediate family
          members, in person. Officers and Board members typically travel to Israel two to three
          times per year to visit the wounded and bereaved and to hand-deliver assistance.
        </p>

        <h2>Priority Focus</h2>
        <p>
          We prioritize the victims of the most recent terror attacks and the most recently wounded
          soldiers. Help is provided while families wait to receive government assistance —
          disability and survivor payments in Israel can take many months or years to begin.
        </p>

        <h2>Lone Soldiers</h2>
        <p>
          We give special attention to wounded <strong>lone soldiers</strong> who came to Israel to
          serve in the IDF and don&apos;t have family in Israel to support them through recovery.
        </p>

        <h2>Non-Discrimination</h2>
        <p>
          We don&apos;t differentiate among the victims of different ethnic or religious
          backgrounds. We support Israeli Druze and Bedouin families as well. New Jersey Support
          Israel does not discriminate based on race, color, national origin, religion, gender, age,
          sexual orientation, marital status, military/veteran status, medical condition, or
          disability.
        </p>

        <h2>Transparency</h2>
        <p>
          Summary financial reports are available on this website. Detailed financial reports may be
          obtained from the New Jersey Office of the Attorney General.
        </p>
      </Prose>
    </main>
  )
}
