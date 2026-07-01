import { useNavigate } from 'react-router-dom';

function ComingSoon() {
  const navigate = useNavigate();

  return (
    <div style={{
      background: '#0f1117',
      minHeight: '100vh',
      color: 'white',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '20px'
    }}>
      
      <div style={{
        fontSize: '60px',
        marginBottom: '20px'
      }}>🚀</div>

      <div style={{
        display: 'inline-block',
        background: 'rgba(79,142,247,0.10)',
        color: '#4f8ef7',
        border: '1px solid #4f8ef7',
        borderRadius: '6px',
        fontSize: '11px',
        fontWeight: '600',
        letterSpacing: '1px',
        textTransform: 'uppercase',
        padding: '4px 12px',
        marginBottom: '16px'
      }}>Coming Soon</div>

      <h1 style={{
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '12px'
      }}>We're Working On It!</h1>

      <p style={{
        color: '#8892a4',
        fontSize: '14px',
        maxWidth: '400px',
        lineHeight: '1.7',
        marginBottom: '30px'
      }}>
        This section is under preparation. We are adding quality content soon. Check back later!
      </p>

      <button
        onClick={() => navigate(-1)}
        style={{
          background: '#4f8ef7',
          border: 'none',
          color: 'white',
          borderRadius: '10px',
          padding: '12px 28px',
          fontSize: '14px',
          fontWeight: '600',
          cursor: 'pointer'
        }}
      >
        Go Back
      </button>

    </div>
  );
}

export default ComingSoon;