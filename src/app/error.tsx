"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <div className="p-8">
      <h2 className="text-lg font-semibold">Ошибка загрузки данных</h2>
      <p className="text-sm text-gray-500 mt-2">{error.message}</p>
      <button onClick={reset} className="mt-4 px-4 py-2 bg-black text-white">
        Повторить
      </button>
    </div>
  );
}
