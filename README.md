# codingame-kutulu-starterkit-js

Code of Kutulu Contest JavaScript Starter Kit

## Исходный код

Исходный код находится в директории `src`. Файлы с тестами находятся в папке `__tests__` в той же директории и называются.
Для тестов используется [jest](https://facebook.github.io/jest/docs/en/api.html).

Основные файлы:

- [`State.ts`](src/models/State.ts) — класс с состоянием игры
- [`StateReader.ts`](src/StateReader.ts) — класс для чтения состояния игры. Принимает в конструкторе `LineReader`. Для чтения инпута игры используйту глобальную функцию `readline`. Для написания тестов можно использовать [`FakeLineReader`](src/FakeLineReader.ts)
- [`ai.ts`](src/ai.ts) — ваш алгоритм бота
- [`actions.ts`](src/actions.ts) — helper для формирования строк с командами для бота

- Для вывода сообщения в output используйте глобальную функцию `print`
- Для вывода дебаг сообщений в игре используйте глобальную функцию `printErr`

## Запуск

### Установка

Клонируйте репозиторий: `git clone https://github.com/skbkontur/codingame-kutulu-starterkit-ts.git`

Установите зависимости: `npm install` или `yarn install`

### Сборка исходников для вставки на CodinGame

`npm run build` или `yarn build` — собирает исходный код в файл `dist/bundle.js`. Содержимое этого файла можно вставлять в редактор на codeingame.com

`npm run watch` или `yarn watch` — непрерывно следит за изменениями исходного кода и пересобирает `dist/bundle.js`.

### Тестирование

`npm test` или `yarn test` — запускает тесты и следит за их изменениями.
