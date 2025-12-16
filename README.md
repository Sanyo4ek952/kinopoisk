# Kinopoisk

## Project Overview

**Kinopoisk** — production-like веб-приложение для поиска, исследования и сохранения фильмов.  
Проект решает задачу удобного **movie discovery**: поиск по каталогу, фильтрация, просмотр деталей и формирование персонального watchlist с корректной обработкой всех UI-состояний.

Проект используется как портфолио и демонстрирует инженерный уровень **Junior+ → Middle Frontend Developer**.

---

## Tech Stack

- **Next.js (App Router, RSC)** — full-stack фреймворк с серверными компонентами, маршрутизацией и SEO
- **TypeScript** — строгая типизация и предсказуемость кода
- **Redux Toolkit + RTK Query** — управление состоянием и серверными данными
- **Feature-Sliced Design (FSD)** — масштабируемая архитектура
- **Tailwind CSS** — быстрый и консистентный UI
- **TMDB API** — источник данных о фильмах
- **Vercel** — деплой и production-окружение

---

## Key Features

- Movie search with debounce and request cancellation
- Advanced filtering with URL synchronization
- Trending and popular movies
- Movie details page
- Watchlist (localStorage + Redux)
- Fully handled UI states (loading / error / empty)
- Optimized images with `next/image`

---

## Architecture

Проект построен по принципам **Feature-Sliced Design**.

Основные слои:

- **entities** — бизнес-сущности (movie, genre)
- **features** — пользовательские сценарии (search, filters, watchlist)
- **widgets** — составные UI-блоки (movie lists, headers)
- **shared** — переиспользуемые UI-компоненты, API-клиенты, утилиты

Такое разделение:

- снижает связанность
- упрощает масштабирование
- делает код читаемым и предсказуемым для командной разработки

---

## Data Fetching & State Management

- Серверные данные обрабатываются через **RTK Query**
- Используется:
  - автоматическое кэширование
  - `providesTags / invalidatesTags`
  - централизованный error handling
  - `selectFromResult` для оптимизации ререндеров
- Watchlist хранится в Redux с синхронизацией в `localStorage`
- Чёткое разделение:
  - **server components** — загрузка данных
  - **client components** — интерактив и пользовательские действия

---

## Next.js Approach

- **App Router** как основа маршрутизации
- **React Server Components** для списков и страниц
- **Client Components** только там, где требуется интерактив
- Используются:
  - `loading.tsx`
  - `error.tsx`
  - `not-found.tsx`
- Настроены SEO-метаданные через `metadata`

---

## UI & UX

- Skeleton-экраны вместо пустых состояний
- Явные empty states при отсутствии данных
- Корректная обработка ошибок с возможностью retry
- UX-ориентированный подход: минимизация лишних запросов и визуального шума

---

## Getting Started

### Installation

```bash
pnpm install
```
