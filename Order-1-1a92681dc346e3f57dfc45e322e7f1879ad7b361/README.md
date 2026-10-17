# School of Informed Risk

Сайт-визитка программы «Университет длинной дистанции» для абитуриентов, студентов и партнёров.

## Локально

```bash
npm install
npm run dev
```

Продакшен-сборка:

```bash
npm run build
npm run preview
```

Готовые файлы для хостинга — в папке `dist/`.

## Деплой

### Netlify
1. Подключите репозиторий или загрузите `dist/`
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Конфиг уже в `netlify.toml`

### Vercel
1. Import project
2. Framework preset: Vite (или используйте `vercel.json`)
3. Output: `dist`

### GitHub Pages / любой static host
1. `npm run build`
2. Залейте содержимое `dist/` в корень сайта или в `docs/`
3. `base: "./"` уже настроен — относительные пути работают и в подпапке

### Docker (опционально)
```bash
npm run build
npx --yes serve dist -l 4173
```

## Структура

- `index.html` — лендинг
- `styles.css`, `main.js` — стили и анимации
- `public/` — favicon, manifest, robots, redirects
