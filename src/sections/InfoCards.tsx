import Card from '../components/ui/Card'

export default function InfoCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
      {/* Our Services */}
      <Card>
        <h3 className="text-lg sm:text-xl font-extrabold mb-3">Our Services</h3>
        <p className="text-text-muted leading-relaxed">
          We specialize in comprehensive auditiness upgrades, imigrades upgrades
          migrations. Improved performance, security, encryption, fulllever.
          multifactor, concepts, substruct high high availability, tibtacor
          recovery, pricetag, operational readiness and dedicate support.
          Ourviness service management of database systems, on premise of in the cloud.
        </p>
      </Card>

      {/* About Us */}
      <Card>
        <h3 className="text-lg sm:text-xl font-extrabold mb-3">About Us</h3>
        <p className="text-text-muted leading-relaxed mb-4">
          We believe Techèffortt Inc. has been at the totem of innovading cutting
          ediser tech, not logy solutions to businesses of all sizes. In
          diveining on three decades of industry experience, we believe ike to irm of
          seasoned terabase systems to meet.
        </p>
        <div className="flex items-center gap-2 text-sm text-text-muted">
          <svg width="16" height="16" viewBox="0 0 24 24" aria-hidden="true">
            <path fill="currentColor"
              d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.5l7.3 5.4L18.8 6H4.2Zm15.3 2.1l-6.9 4.9a1.5 1.5 0 0 1-1.8 0L3.9 8.1V17.5c0 .55.45 1 1 1h14.2c.55 0 1-.45 1-1V8.1Z"/>
          </svg>
          <span>contact@techeffortinc.com</span>
        </div>
      </Card>
    </div>
  )
}
