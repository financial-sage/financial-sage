export default function DashboardPage() {
  return (
    <div className="page-wrapper">
      {/* Page header */}
      <div className="page-header d-print-none">
        <div className="container-fluid">
          <div className="row g-2 align-items-center">
            <div className="col">
              <div className="page-pretitle">
                Overview
              </div>
              <h2 className="page-title">
                Dashboard
              </h2>
            </div>
            <div className="col-auto ms-auto d-print-none">
              <div className="btn-list">
                <span className="d-none d-sm-inline">
                  <a href="#" className="btn">
                    Nueva transacción
                  </a>
                </span>
                <a href="#" className="btn btn-primary d-none d-sm-inline-block">
                  <svg xmlns="http://www.w3.org/2000/svg" className="icon" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                    <path d="M12 5l0 14"/>
                    <path d="M5 12l14 0"/>
                  </svg>
                  Crear reporte
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Page body */}
      <div className="page-body">
        <div className="container-fluid">
          {/* Stats cards */}
          <div className="row row-deck row-cards">
            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Ingresos</div>
                    <div className="ms-auto lh-1">
                      <div className="dropdown">
                        <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Este mes</a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item active" href="#">Este mes</a>
                          <a className="dropdown-item" href="#">Mes anterior</a>
                          <a className="dropdown-item" href="#">Este año</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h1 mb-3">$75,893</div>
                  <div className="d-flex mb-2">
                    <div>Progreso mensual</div>
                    <div className="ms-auto">
                      <span className="text-green d-inline-flex align-items-center lh-1">
                        7%
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M3 17l6 -6l4 4l8 -8"/>
                          <path d="M14 7l7 0l0 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-primary" style={{width: '75%'}} role="progressbar" aria-valuenow={75} aria-valuemin={0} aria-valuemax={100}>
                      <span className="visually-hidden">75% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Gastos</div>
                    <div className="ms-auto lh-1">
                      <div className="dropdown">
                        <a className="dropdown-toggle text-muted" href="#" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Este mes</a>
                        <div className="dropdown-menu dropdown-menu-end">
                          <a className="dropdown-item active" href="#">Este mes</a>
                          <a className="dropdown-item" href="#">Mes anterior</a>
                          <a className="dropdown-item" href="#">Este año</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="h1 mb-3">$43,457</div>
                  <div className="d-flex mb-2">
                    <div>Progreso mensual</div>
                    <div className="ms-auto">
                      <span className="text-red d-inline-flex align-items-center lh-1">
                        -2%
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M3 7l6 6l4 -4l8 8"/>
                          <path d="M14 17l7 0l0 -7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-danger" style={{width: '57%'}} role="progressbar" aria-valuenow={57} aria-valuemin={0} aria-valuemax={100}>
                      <span className="visually-hidden">57% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Balance</div>
                  </div>
                  <div className="h1 mb-3">$32,436</div>
                  <div className="d-flex mb-2">
                    <div>Disponible</div>
                    <div className="ms-auto">
                      <span className="text-green d-inline-flex align-items-center lh-1">
                        +12%
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M3 17l6 -6l4 4l8 -8"/>
                          <path d="M14 7l7 0l0 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-success" style={{width: '84%'}} role="progressbar" aria-valuenow={84} aria-valuemin={0} aria-valuemax={100}>
                      <span className="visually-hidden">84% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-sm-6 col-lg-3">
              <div className="card">
                <div className="card-body">
                  <div className="d-flex align-items-center">
                    <div className="subheader">Ahorros</div>
                  </div>
                  <div className="h1 mb-3">$18,765</div>
                  <div className="d-flex mb-2">
                    <div>Meta mensual</div>
                    <div className="ms-auto">
                      <span className="text-green d-inline-flex align-items-center lh-1">
                        +5%
                        <svg xmlns="http://www.w3.org/2000/svg" className="icon ms-1" width="24" height="24" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                          <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                          <path d="M3 17l6 -6l4 4l8 -8"/>
                          <path d="M14 7l7 0l0 7"/>
                        </svg>
                      </span>
                    </div>
                  </div>
                  <div className="progress progress-sm">
                    <div className="progress-bar bg-info" style={{width: '62%'}} role="progressbar" aria-valuenow={62} aria-valuemin={0} aria-valuemax={100}>
                      <span className="visually-hidden">62% Complete</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Charts row */}
            <div className="col-lg-8">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Flujo de efectivo</h3>
                </div>
                <div className="card-body">
                  <div id="chart-revenue-bg" className="chart chart-sm"></div>
                  <div className="mt-3">
                    <div className="row">
                      <div className="col-4">
                        <div className="d-flex align-items-center">
                          <span className="dot bg-primary"></span>
                          <span className="ms-2">Ingresos</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex align-items-center">
                          <span className="dot bg-danger"></span>
                          <span className="ms-2">Gastos</span>
                        </div>
                      </div>
                      <div className="col-4">
                        <div className="d-flex align-items-center">
                          <span className="dot bg-success"></span>
                          <span className="ms-2">Balance</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Mock chart placeholder */}
                  <div className="mt-3 p-4 bg-light rounded" style={{height: '200px', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
                    <span className="text-muted">Gráfico de flujo de efectivo (Chart.js placeholder)</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Gastos por categoría</h3>
                </div>
                <div className="card-body">
                  <div className="space-y-2">
                    <div className="d-flex justify-content-between">
                      <span>Alimentación</span>
                      <span className="text-muted">$1,234</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-primary" style={{width: '45%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-3">
                    <div className="d-flex justify-content-between">
                      <span>Transporte</span>
                      <span className="text-muted">$892</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-warning" style={{width: '32%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-3">
                    <div className="d-flex justify-content-between">
                      <span>Entretenimiento</span>
                      <span className="text-muted">$567</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-info" style={{width: '21%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-3">
                    <div className="d-flex justify-content-between">
                      <span>Servicios</span>
                      <span className="text-muted">$445</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-success" style={{width: '16%'}}></div>
                    </div>
                  </div>
                  <div className="space-y-2 mt-3">
                    <div className="d-flex justify-content-between">
                      <span>Otros</span>
                      <span className="text-muted">$319</span>
                    </div>
                    <div className="progress progress-sm">
                      <div className="progress-bar bg-secondary" style={{width: '12%'}}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Recent transactions */}
            <div className="col-12">
              <div className="card">
                <div className="card-header">
                  <h3 className="card-title">Transacciones recientes</h3>
                </div>
                <div className="table-responsive">
                  <table className="table table-vcenter card-table">
                    <thead>
                      <tr>
                        <th>Fecha</th>
                        <th>Descripción</th>
                        <th>Categoría</th>
                        <th>Monto</th>
                        <th>Estado</th>
                        <th className="w-1"></th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>2024-01-15</td>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span className="avatar me-2" style={{backgroundImage: 'url(./static/avatars/000m.jpg)'}}></span>
                            <div className="flex-fill">
                              <div className="font-weight-medium">Supermercado Central</div>
                              <div className="text-muted">Compra semanal</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-primary">Alimentación</span>
                        </td>
                        <td className="text-muted">-$156.78</td>
                        <td>
                          <span className="badge bg-success me-1"></span>
                          Completado
                        </td>
                        <td>
                          <a href="#">Editar</a>
                        </td>
                      </tr>
                      <tr>
                        <td>2024-01-14</td>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span className="avatar me-2">S</span>
                            <div className="flex-fill">
                              <div className="font-weight-medium">Salario</div>
                              <div className="text-muted">Pago mensual</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-success">Ingresos</span>
                        </td>
                        <td className="text-muted">+$3,200.00</td>
                        <td>
                          <span className="badge bg-success me-1"></span>
                          Completado
                        </td>
                        <td>
                          <a href="#">Editar</a>
                        </td>
                      </tr>
                      <tr>
                        <td>2024-01-13</td>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span className="avatar me-2">G</span>
                            <div className="flex-fill">
                              <div className="font-weight-medium">Gasolina</div>
                              <div className="text-muted">Estación Shell</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-warning">Transporte</span>
                        </td>
                        <td className="text-muted">-$45.20</td>
                        <td>
                          <span className="badge bg-success me-1"></span>
                          Completado
                        </td>
                        <td>
                          <a href="#">Editar</a>
                        </td>
                      </tr>
                      <tr>
                        <td>2024-01-12</td>
                        <td>
                          <div className="d-flex py-1 align-items-center">
                            <span className="avatar me-2">N</span>
                            <div className="flex-fill">
                              <div className="font-weight-medium">Netflix</div>
                              <div className="text-muted">Suscripción mensual</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          <span className="badge bg-info">Entretenimiento</span>
                        </td>
                        <td className="text-muted">-$15.99</td>
                        <td>
                          <span className="badge bg-warning me-1"></span>
                          Pendiente
                        </td>
                        <td>
                          <a href="#">Editar</a>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
