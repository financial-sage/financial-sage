/**
 * Utilities para manejar fechas locales
 */

/**
 * Convierte una fecha local a ISO string manteniendo la hora local
 * (sin ajustar por zona horaria)
 */
export function localDateToISOString(date: Date): string {
  const offsetMs = date.getTimezoneOffset() * 60000;
  const localTime = new Date(date.getTime() - offsetMs);
  return localTime.toISOString();
}

/**
 * Obtiene la fecha y hora local actual en formato ISO string
 */
export function getCurrentLocalDateISO(): string {
  return localDateToISOString(new Date());
}

/**
 * Convierte un string de datetime-local a ISO string manteniendo la hora local
 */
export function datetimeLocalToISOString(datetimeLocal: string): string {
  if (!datetimeLocal) return getCurrentLocalDateISO();
  
  const date = new Date(datetimeLocal);
  return localDateToISOString(date);
}

/**
 * Obtiene el valor por defecto para un input datetime-local con hora local
 */
export function getLocalDatetimeValue(): string {
  const now = new Date();
  const offsetMs = now.getTimezoneOffset() * 60000;
  const localTime = new Date(now.getTime() - offsetMs);
  return localTime.toISOString().slice(0, 16);
}

/**
 * Formatea una fecha ISO para mostrar en hora local
 */
export function formatDateToLocal(isoString: string): string {
  const date = new Date(isoString);
  return date.toLocaleString();
}

/**
 * Convierte una fecha ISO de vuelta a datetime-local format
 */
export function isoToDatetimeLocal(isoString: string): string {
  const date = new Date(isoString);
  const offsetMs = date.getTimezoneOffset() * 60000;
  const localTime = new Date(date.getTime() - offsetMs);
  return localTime.toISOString().slice(0, 16);
}
