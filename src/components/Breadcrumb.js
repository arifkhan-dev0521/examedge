import { useNavigate } from 'react-router-dom';
import './Breadcrumb.css';

function Breadcrumb({ items }) {
  const navigate = useNavigate();

  return (
    <div className="breadcrumb">
      <a onClick={() => navigate('/')}>Home</a>
      {items.map((item, index) => (
        <span key={index} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
          <span className="sep">›</span>
          {item.path ? (
            <a onClick={() => navigate(item.path)}>{item.label}</a>
          ) : (
            <span className="current">{item.label}</span>
          )}
        </span>
      ))}
    </div>
  );
}

export default Breadcrumb;