export default function AppsCard() {
  return (
    <div className="content-section">
      <div className="content-section-title">Apps in your plan</div>
      <div className="apps-card">
        {/* Aquí van las tarjetas de apps, puedes seguir dividiendo en componentes si lo deseas */}
        <div className="app-card">
          <span>
            {/* ...SVG Premiere Pro... */}
            Premiere Pro
          </span>
          <div className="app-card__subtext">Edit, master and create fully proffesional videos</div>
          <div className="app-card-buttons">
            <button className="content-button status-button">Update</button>
            <div className="menu"></div>
          </div>
        </div>
        {/* ...más tarjetas de apps... */}
      </div>
    </div>
  );
}
