import React from 'react'

export default function Page() {
  return (
    <main
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'linear-gradient(135deg, #1e3a8a 0%, #1d4ed8 50%, #1e40af 100%)',
        color: '#ffffff',
        fontFamily:
          '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
        padding: '2rem',
        textAlign: 'center',
      }}
    >
      <div style={{ maxWidth: '640px' }}>
        <p
          style={{
            fontSize: '0.85rem',
            letterSpacing: '0.4em',
            textTransform: 'uppercase',
            color: '#bfdbfe',
            marginBottom: '1.5rem',
          }}
        >
          Under Development
        </p>
        <h1
          style={{
            fontSize: 'clamp(2rem, 6vw, 4rem)',
            fontWeight: 300,
            lineHeight: 1.15,
            margin: '0 0 1.5rem 0',
          }}
        >
          <span style={{ fontWeight: 600, color: '#bfdbfe' }}>NJ for Israel</span>
        </h1>
        <p
          style={{
            fontSize: 'clamp(1rem, 2vw, 1.15rem)',
            opacity: 0.85,
            lineHeight: 1.5,
            margin: 0,
          }}
        >
          This site is being rebuilt. Please check back soon.
        </p>
      </div>
    </main>
  )
}
