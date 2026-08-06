import React from 'react';
import InnerPageLayout from '../components/InnerPageLayout';

export default function AboutUs() {
  const breadcrumbs = [
    { label: 'About Us' }
  ];

  return (
    <InnerPageLayout title="About the Institute" breadcrumbs={breadcrumbs}>
      
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginBottom: '6rem' }}>
        <div>
          <h2 style={{ fontSize: 'var(--text-3xl)', color: 'var(--brand-50)', fontFamily: 'var(--font-display)', marginBottom: '1.5rem', fontWeight: 700 }}>
            Towards making our world a better place
          </h2>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--brand-50)', opacity: 0.8, lineHeight: 1.8, marginBottom: '1.5rem' }}>
            Commerce education plays a significant role in making our world a better place. It prepares future generations for trade, commerce, and business activities and provides an improved livelihood to the people at the bottom of the pyramid by empowering them.
          </p>
          <p style={{ fontSize: 'var(--text-base)', color: 'var(--brand-50)', opacity: 0.8, lineHeight: 1.8 }}>
            Recognising this immense power of commerce education in social transformation, BLDEA established ASP College of Commerce way back in 1961. The college is named after Shri Atalatti Siddanagouda Patil, who made liberal and generous donations for its establishment.
          </p>
        </div>
        
        {/* Placeholder for About Image */}
        <div style={{
          width: '100%',
          height: '400px',
          backgroundColor: 'var(--surface-900)',
          borderRadius: '16px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'var(--brand-50)',
          border: '1px dashed rgba(0,0,0,0.1)'
        }}>
          [About Institute Image Skeleton]
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', marginBottom: '6rem' }}>
        <div style={{ padding: '3rem', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', fontFamily: 'var(--font-display)', marginBottom: '1rem', fontWeight: 700 }}>Our Vision</h3>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--accent-500)', fontStyle: 'italic', fontWeight: 500, lineHeight: 1.6 }}>
            "To emerge as a premier autonomous institution offering commerce, management, entrepreneurship and computer education with service to mankind."
          </p>
        </div>
        
        <div style={{ padding: '3rem', backgroundColor: '#ffffff', borderRadius: '16px', boxShadow: '0 20px 40px rgba(0,0,0,0.03)' }}>
          <h3 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', fontFamily: 'var(--font-display)', marginBottom: '1rem', fontWeight: 700 }}>Our Mission</h3>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--brand-50)', opacity: 0.8, lineHeight: 1.6 }}>
            "To provide a strong tower for nurturing an environment for the holistic growth of learners and contributing to nation-building activities."
          </p>
        </div>
      </div>

      <div>
        <h2 style={{ fontSize: 'var(--text-2xl)', color: 'var(--brand-50)', fontFamily: 'var(--font-display)', marginBottom: '2rem', fontWeight: 700 }}>
          Academic Excellence
        </h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          {[
            { title: 'Affiliation', desc: 'Rani Channamma University, Belagavi (State University, Karnataka)' },
            { title: 'Accreditation', desc: 'Recognised by UGC, Govt. of India. Accredited by NAAC with A grade.' },
            { title: 'Autonomy', desc: 'Autonomous Status in 2007 for UG Programme and in 2008 for PG Programme.' },
            { title: 'Infrastructure', desc: 'Green campus and state-of-the-art infrastructure with excellent facilities.' }
          ].map((stat, i) => (
            <div key={i} style={{ padding: '2rem', backgroundColor: 'var(--surface-900)', borderRadius: '12px' }}>
              <h4 style={{ color: 'var(--accent-500)', marginBottom: '0.5rem', fontWeight: 700 }}>{stat.title}</h4>
              <p style={{ color: 'var(--brand-50)', fontSize: '0.9rem', lineHeight: 1.5 }}>{stat.desc}</p>
            </div>
          ))}
        </div>
      </div>

    </InnerPageLayout>
  );
}
