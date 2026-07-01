import { useNavigate, useLocation } from 'react-router-dom';

function FloatingBack() {
  const navigate = useNavigate();
  const location = useLocation();

  if (location.pathname === '/') return null;

  return (
    <button
      onClick={() => navigate(-1)}
      style={{
        position: 'fixed',
        bottom: '20px',
        left: '20px',
        width: '30px',
        height: '30px',
        borderRadius: '10px',
        background: '#1a1f2e',
        border: '1.5px solid #4f8ef7',
        color: '#4f8ef7',
        fontSize: '20px',
        fontWeight: '900',
        paddingBottom: '3px',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 999,
        boxShadow: '0 4px 15px rgba(79,142,247,0.25), 0 2px 6px rgba(0,0,0,0.4)',
        transition: 'all 0.2s'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = '#4f8ef7';
        e.currentTarget.style.color = 'white';
        e.currentTarget.style.boxShadow = '0 6px 20px rgba(79,142,247,0.4), 0 2px 6px rgba(0,0,0,0.4)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#1a1f2e';
        e.currentTarget.style.color = '#4f8ef7';
        e.currentTarget.style.boxShadow = '0 4px 15px rgba(79,142,247,0.25), 0 2px 6px rgba(0,0,0,0.4)';
      }}
    >
      ❮
    </button>
  );
}

export default FloatingBack;