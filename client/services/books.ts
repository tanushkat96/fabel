export async function searchBooks(query: string) {
  const res = await fetch(
    `https://www.googleapis.com/books/v1/volumes?q=${query}`,
  );

  return res.json();
}
