const qsStringify = (
  object: Record<string, string | number>,
  addPrefix: boolean = false,
): string => {
  const queryString = Object.entries(object)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`,
    )
    .join('&');

  if (addPrefix) return `?${queryString}`;
  return queryString;
};

export default qsStringify;
