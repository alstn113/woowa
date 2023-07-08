const fetchData = async <T>(url: string) => {
  const response = await fetch(url);

  const status = response.status;
  const data = (await response.json()) as T;
  const ok = response.ok;

  return {
    data,
    ok,
    status,
  };
};

export default fetchData;
