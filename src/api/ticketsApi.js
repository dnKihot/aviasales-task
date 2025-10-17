export async function fetchSearchId() {
  const response = await fetch(
    "https://aviasales-test-api.kata.academy/search",
  );

  if (!response.ok) {
    throw new Error(`Не удалось получить searchId: ${response.status}`);
  }
  const data = await response.json();
  return data.searchId;
}

export async function fetchTickets(searchId) {
  const response = await fetch(
    `https://aviasales-test-api.kata.academy/tickets?searchId=${searchId}`,
  );

  if (!response.ok) {
    throw new Error(`Ошибка загрузки билетов: ${response.status}`);
  }

  const data = await response.json();
  return {
    tickets: data.tickets ?? [],
    stop: Boolean(data.stop),
  };
}
