export default function InstalledProducts() {
  return (
    <div className="content-section">
      <div className="content-section-title">Installed</div>
      <ul>
        {/* Aquí van los productos Adobe instalados, puedes seguir dividiendo en componentes si lo deseas */}
        <li className="adobe-product">
          <div className="products">
            {/* ...SVG Photoshop... */}
            Photoshop
          </div>
          <span className="status">
            <span className="status-circle green"></span>
            Updated
          </span>
          <div className="button-wrapper">
            <button className="content-button status-button open">Open</button>
            <div className="menu">
              <button className="dropdown">
                <ul>
                  <li><a href="#">Go to Discover</a></li>
                  <li><a href="#">Learn more</a></li>
                  <li><a href="#">Uninstall</a></li>
                </ul>
              </button>
            </div>
          </div>
        </li>
        {/* ...más productos... */}
      </ul>
    </div>
  );
}
