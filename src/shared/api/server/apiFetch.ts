import "server-only";

export async function apiFetch<T>(
  path: string,
  params?: URLSearchParams,
): Promise<T> {
  const url = params
    ? `${process.env.BASE_URL}${path}?${params.toString()}`
    : `${process.env.BASE_URL}${path}`;
  const test = 123;
  const res = await fetch(url, {
    headers: {
      Authorization: `Bearer ${process.env.API_ACCESS_KEY}`,
      Accept: "application/json",
    },
    cache: "no-store",
  });

  if (!res.ok) {
    const text = await res.text();
    throw new Error(`TMDB error ${res.status}: ${text}`);
  }

  return res.json() as Promise<T>;
}
