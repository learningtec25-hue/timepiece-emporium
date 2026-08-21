const API = process.env.REACT_APP_API_URL || 'http://localhost:5000';

async function request(path, options = {}) {
  const response = await fetch(`${API}${path}`, { headers: { 'Content-Type': 'application/json' }, ...options });
  const data = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(data.error || `Request failed (${response.status})`);
  return data;
}
export const getProducts = (params = {}) => {
  const query = new URLSearchParams(Object.entries(params).filter(([, value]) => value !== ''));
  return request(`/api/products${query.toString() ? `?${query}` : ''}`);
};
export const getProduct = id => request(`/api/products/${id}`);
export const createOrder = payload => request('/api/orders', { method: 'POST', body: JSON.stringify(payload) });
export const money = value => new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(value);
