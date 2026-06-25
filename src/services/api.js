const BASE_URL = "https://fakestoreapi.com";

export async function fetchProducts() {
  const res = await fetch(`${BASE_URL}/products`);
  if (!res.ok) throw new Error("API error");
  return res.json();
}
