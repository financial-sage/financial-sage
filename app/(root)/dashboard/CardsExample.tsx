import React from 'react';

export default function CardsExample() {
  return (
    <div style={{ padding: '2rem', backgroundColor: '#000', minHeight: '100vh' }}>
      {/* Header */}
      <div style={{ marginBottom: '2rem', textAlign: 'center' }}>
        <h1 style={{ color: '#e5e7eb', fontSize: '2rem', marginBottom: '0.5rem' }}>
          Sistema Universal de Cards con Footers - Financial Sage
        </h1>
        <p style={{ color: '#9ca3af', fontSize: '1rem' }}>
          Cards con headers, contenido y footers flexibles
        </p>
      </div>

      {/* Cards con Footers Básicos */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#e5e7eb', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          📄 Cards con Footer Básico
        </h2>
        <div className="grid grid-cols-1 grid-lg-3 gap-6">
          <div className="card">
            <div className="cardHeader">
              <h3 className="cardTitle">
                💰 Balance Total
              </h3>
            </div>
            <div className="card horizontal" style={{ margin: '0', padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <div className="cardIcon">
                💎
              </div>
              <div className="cardContent">
                <div className="cardValue balance">$15,420.50</div>
                <div className="cardSubtext">Disponible</div>
              </div>
            </div>
            <div className="cardFooter">
              <div className="cardFooterText">
                <i className="fas fa-clock"></i>
                Actualizado hace 5 min
              </div>
              <div className="cardFooterActions">
                <button className="footerAction primary">
                  <i className="fas fa-sync"></i>
                  Actualizar
                </button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardHeader">
              <h3 className="cardTitle">
                📊 Ingresos del Mes
              </h3>
            </div>
            <div className="card horizontal" style={{ margin: '0', padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <div className="cardIcon">
                📈
              </div>
              <div className="cardContent">
                <div className="cardValue income">$8,750.00</div>
                <div className="cardSubtext">+12% vs mes anterior</div>
              </div>
            </div>
            <div className="cardFooter minimal">
              <div className="cardFooterText highlighted">
                <i className="fas fa-trending-up"></i>
                Tendencia positiva
              </div>
              <div className="cardFooterActions">
                <button className="footerAction">Ver detalles</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardHeader">
              <h3 className="cardTitle">
                💸 Gastos del Mes
              </h3>
            </div>
            <div className="card horizontal" style={{ margin: '0', padding: '0', background: 'transparent', border: 'none', boxShadow: 'none' }}>
              <div className="cardIcon">
                📉
              </div>
              <div className="cardContent">
                <div className="cardValue expense">$5,230.75</div>
                <div className="cardSubtext">-8% vs mes anterior</div>
              </div>
            </div>
            <div className="cardFooter">
              <div className="cardFooterText muted">
                Última transacción: Ayer
              </div>
              <div className="cardFooterActions">
                <button className="footerAction success">
                  <i className="fas fa-plus"></i>
                  Agregar
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards con Footer con Múltiples Acciones */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#e5e7eb', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          🎯 Cards con Múltiples Acciones en Footer
        </h2>
        <div className="grid grid-cols-1 grid-lg-2 gap-6">
          <div className="card">
            <div className="cardHeader">
              <h3 className="cardTitle">
                📝 Transacciones Recientes
              </h3>
              <button className="cardAction">Ver todas</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div className="card horizontal subtle sm">
                <div className="cardIcon sm">
                  🛒
                </div>
                <div className="cardContent">
                  <div className="cardTitle">Supermercado</div>
                  <div className="cardMeta">Alimentación • Hace 2h</div>
                </div>
                <div className="cardValue expense sm">-$85.50</div>
              </div>
              
              <div className="card horizontal subtle sm">
                <div className="cardIcon sm">
                  💵
                </div>
                <div className="cardContent">
                  <div className="cardTitle">Salario</div>
                  <div className="cardMeta">Ingresos • Ayer</div>
                </div>
                <div className="cardValue income sm">+$3,200</div>
              </div>

              <div className="card horizontal subtle sm">
                <div className="cardIcon sm">
                  ⛽
                </div>
                <div className="cardContent">
                  <div className="cardTitle">Gasolina</div>
                  <div className="cardMeta">Transporte • Hace 1d</div>
                </div>
                <div className="cardValue expense sm">-$45.00</div>
              </div>
            </div>
            <div className="cardFooter">
              <div className="cardFooterText">
                <i className="fas fa-list"></i>
                15 transacciones este mes
              </div>
              <div className="cardFooterActions">
                <button className="footerAction">Exportar</button>
                <button className="footerAction">Filtrar</button>
                <button className="footerAction primary">Agregar nueva</button>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="cardHeader">
              <h3 className="cardTitle">
                📈 Top Categorías
              </h3>
              <button className="cardAction">Administrar</button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <div className="card bordered success">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div className="cardIcon sm" style={{ marginRight: '0.75rem' }}>
                    🍔
                  </div>
                  <div className="cardTitle lg">Alimentación</div>
                </div>
                <div className="cardStats">
                  <div className="statRow">
                    <span className="statLabel">Transacciones</span>
                    <span className="statValue">15</span>
                  </div>
                  <div className="statRow">
                    <span className="statLabel">Total gastado</span>
                    <span className="statValue amount expense">$450.00</span>
                  </div>
                </div>
              </div>

              <div className="card bordered info">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem' }}>
                  <div className="cardIcon sm" style={{ marginRight: '0.75rem' }}>
                    ⛽
                  </div>
                  <div className="cardTitle lg">Transporte</div>
                </div>
                <div className="cardStats">
                  <div className="statRow">
                    <span className="statLabel">Transacciones</span>
                    <span className="statValue">8</span>
                  </div>
                  <div className="statRow">
                    <span className="statLabel">Total gastado</span>
                    <span className="statValue amount expense">$320.00</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="cardFooter highlighted">
              <div className="cardFooterText highlighted">
                <i className="fas fa-chart-pie"></i>
                2 de 8 categorías mostradas
              </div>
              <div className="cardFooterActions">
                <button className="footerAction">Ver todas</button>
                <button className="footerAction primary">
                  <i className="fas fa-plus"></i>
                  Nueva categoría
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Cards con Footer Centrado */}
      <div style={{ marginBottom: '3rem' }}>
        <h2 style={{ color: '#e5e7eb', fontSize: '1.5rem', marginBottom: '1.5rem' }}>
          🎨 Cards con Footer Centrado
        </h2>
        <div className="grid grid-cols-1 grid-md-2 grid-lg-4 gap-4">
          <div className="card info">
            <div className="cardIcon lg" style={{ margin: '0 auto 1rem auto' }}>
              ℹ️
            </div>
            <div className="cardTitle" style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Información
            </div>
            <div className="cardDescription" style={{ textAlign: 'center' }}>
              Sistema funcionando correctamente.
            </div>
            <div className="cardFooter center minimal">
              <div className="cardFooterActions">
                <button className="footerAction primary">OK</button>
              </div>
            </div>
          </div>

          <div className="card success">
            <div className="cardIcon lg" style={{ margin: '0 auto 1rem auto' }}>
              ✅
            </div>
            <div className="cardTitle" style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Backup Completo
            </div>
            <div className="cardDescription" style={{ textAlign: 'center' }}>
              Datos respaldados exitosamente.
            </div>
            <div className="cardFooter center">
              <div className="cardFooterText">
                <i className="fas fa-check"></i>
                Completado a las 14:30
              </div>
            </div>
          </div>

          <div className="card warning">
            <div className="cardIcon lg" style={{ margin: '0 auto 1rem auto' }}>
              ⚠️
            </div>
            <div className="cardTitle" style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Actualización
            </div>
            <div className="cardDescription" style={{ textAlign: 'center' }}>
              Nueva versión disponible.
            </div>
            <div className="cardFooter center">
              <div className="cardFooterActions">
                <button className="footerAction">Más tarde</button>
                <button className="footerAction primary">Actualizar</button>
              </div>
            </div>
          </div>

          <div className="card danger">
            <div className="cardIcon lg" style={{ margin: '0 auto 1rem auto' }}>
              ❌
            </div>
            <div className="cardTitle" style={{ textAlign: 'center', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
              Error Detectado
            </div>
            <div className="cardDescription" style={{ textAlign: 'center' }}>
              Problema de conexión.
            </div>
            <div className="cardFooter center">
              <div className="cardFooterActions">
                <button className="footerAction">Ignorar</button>
                <button className="footerAction danger">Reintentar</button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Guía de Footer */}
      <div className="card info" style={{ marginTop: '3rem' }}>
        <div className="cardHeader">
          <h3 className="cardTitle">
            📚 Guía de Footers para Cards
          </h3>
        </div>
        
        <div style={{ 
          display: 'grid', 
          gap: '1rem', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))' 
        }}>
          <div>
            <div className="cardLabel">Elementos del Footer:</div>
            <div className="cardDescription">
              <code>.cardFooter</code> - Contenedor principal<br/>
              <code>.cardFooterText</code> - Texto informativo<br/>
              <code>.cardFooterActions</code> - Grupo de botones
            </div>
          </div>
          
          <div>
            <div className="cardLabel">Variantes de Footer:</div>
            <div className="cardDescription">
              <code>.minimal</code> - Footer sutil<br/>
              <code>.highlighted</code> - Footer destacado<br/>
              <code>.center</code> - Contenido centrado
            </div>
          </div>
          
          <div>
            <div className="cardLabel">Acciones del Footer:</div>
            <div className="cardDescription">
              <code>.footerAction</code> - Acción básica<br/>
              <code>.primary</code> - Acción principal<br/>
              <code>.success .danger</code> - Acciones coloreadas
            </div>
          </div>

          <div>
            <div className="cardLabel">Texto del Footer:</div>
            <div className="cardDescription">
              <code>.muted</code> - Texto atenuado<br/>
              <code>.highlighted</code> - Texto destacado<br/>
              Iconos opcionales con FontAwesome
            </div>
          </div>
        </div>

        <div className="cardFooter">
          <div className="cardFooterText">
            <i className="fas fa-lightbulb"></i>
            Los footers son completamente opcionales y personalizables
          </div>
          <div className="cardFooterActions">
            <button className="footerAction">Documentación</button>
            <button className="footerAction primary">Implementar</button>
          </div>
        </div>
      </div>
    </div>
  );
}
