# Описание

Простое веб-приложение для конвертации валют. Для получения курса валют ЦБ РФ использовался сайт https://www.cbr-xml-daily.ru/.
Пользователь может выбрать базовую валюту, согласно которой будет рассчитан курс конверсии. Если добавить одну из валют в избранное, оно всегда будет отображается сверху.

## Технологии

Приложение инициализировано при помощи create-react-app, написано на TypeScript. В работе были использованые библиотеки axios для работы с API и Material UI для стилизации. В разработке специально не использовались редакторы состояний, так как это не было прописано в задании.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
