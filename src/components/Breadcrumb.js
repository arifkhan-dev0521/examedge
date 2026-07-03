import { useNavigate } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb({ items }) {
  const navigate = useNavigate();

  return (
    <div className="breadcrumb">
      <span onClick={() => navigate('/')} className="crumb-link">Home</span>
      {items.map((item, index) => (
        <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="sep">›</span>
          {item.path ? (
            <span onClick={() => navigate(item.path)} className="crumb-link">{item.label}</span>
          ) : (
            <span className="current">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;