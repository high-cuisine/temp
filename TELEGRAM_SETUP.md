# Инструкция по запуску Telegram бота

## 1. Установка зависимостей

Все необходимые зависимости уже установлены:
- `nestjs-telegraf` - NestJS модуль для работы с Telegram ботами
- `telegraf` - библиотека для работы с Telegram Bot API
- `telegraf-session-local` - локальное хранение сессий

## 2. Настройка переменных окружения

Создайте файл `.env` в корне проекта и добавьте следующие переменные:

```env
PORT=3000
NODE_ENV=development
TELEGRAM_BOT_TOKEN=your_bot_token_here
```

### Как получить TELEGRAM_BOT_TOKEN:

1. Найдите [@BotFather](https://t.me/BotFather) в Telegram
2. Отправьте команду `/newbot`
3. Следуйте инструкциям для создания нового бота
4. Скопируйте полученный токен и вставьте его в `.env`

## 3. Структура проекта

```
src/
  telegram/
    telegram.module.ts              # Модуль с настройкой Telegram
    updates/
      bot.update.ts                 # Основной обработчик команд и сообщений
    scenes/
      users-scenes/
        common/
          register.scene.ts         # Сцена регистрации пользователя
```

## 4. Запуск приложения

```bash
# Режим разработки
npm run start:dev

# Производственный режим
npm run build
npm run start:prod
```

## 5. Доступные команды бота

После запуска бот будет отвечать на следующие команды:

- `/start` - Начать работу с ботом (показывает главное меню)
- `/help` - Показать список команд
- `/register` - Начать процесс регистрации

## 6. Работа со сценами (Scenes)

### Существующая сцена регистрации

Сцена регистрации (`register.scene.ts`) демонстрирует:
- Многошаговый процесс сбора данных
- Валидацию ввода (email, телефон)
- Использование сессий для хранения данных
- Обработку callback кнопок
- Возможность отмены на любом этапе

### Как добавить новую сцену

1. Создайте новый файл в `src/telegram/scenes/`:

```typescript
import { Injectable } from '@nestjs/common';
import { Ctx, Scene, SceneEnter, On } from 'nestjs-telegraf';
import { SceneContext } from 'telegraf/typings/scenes';

@Injectable()
@Scene('your_scene_name')
export class YourScene {
  @SceneEnter()
  async onSceneEnter(@Ctx() ctx: SceneContext) {
    await ctx.reply('Вы вошли в сцену');
  }

  @On('text')
  async onText(@Ctx() ctx: SceneContext) {
    const text = (ctx.message as any).text;
    // Обработка текста
  }
}
```

2. Добавьте сцену в `telegram.module.ts`:

```typescript
import { YourScene } from './scenes/your-scene';

@Module({
  // ...
  providers: [
    BotUpdate,
    RegisterScene,
    YourScene, // Добавьте вашу сцену
  ],
})
```

3. Вызовите сцену из обработчика:

```typescript
@Command('your_command')
async onYourCommand(@Ctx() ctx: SceneContext) {
  return ctx.scene.enter('your_scene_name');
}
```

## 7. Хранение сессий

Сессии сохраняются в файл `sessions.json` в корне проекта. Этот файл игнорируется git.

Для production рекомендуется использовать Redis вместо локального хранения.

## 8. Полезные ссылки

- [Документация Telegraf](https://telegraf.js.org/)
- [Документация nestjs-telegraf](https://github.com/bukhalo/nestjs-telegraf)
- [Telegram Bot API](https://core.telegram.org/bots/api)

## 9. Примеры использования

### Отправка сообщения с кнопками

```typescript
import { Markup } from 'telegraf';

const keyboard = Markup.inlineKeyboard([
  [Markup.button.callback('Кнопка 1', 'action_1')],
  [Markup.button.callback('Кнопка 2', 'action_2')],
]);

await ctx.reply('Выберите действие:', keyboard);
```

### Работа с сессией

```typescript
// Инициализация
if (!ctx.session) {
  ctx.session = {};
}

// Сохранение данных
ctx.session['myData'] = { value: 'test' };

// Чтение данных
const myData = ctx.session['myData'];
```

### Выход из сцены

```typescript
await ctx.scene.leave();
```

## 10. Troubleshooting

### Бот не отвечает
- Проверьте правильность токена в `.env`
- Убедитесь, что приложение запущено
- Проверьте логи на наличие ошибок

### Сессии не сохраняются
- Убедитесь, что middleware сессии добавлен в `telegram.module.ts`
- Проверьте права доступа к файлу `sessions.json`

### Ошибка "Port is NaN"
- Убедитесь, что переменная `PORT` установлена в `.env`
- Проверьте правильность настройки конфигурации

