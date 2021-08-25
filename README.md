#MovieList Project

#Proje Kapsamı

MovieList projesi bir film listeleme projesidir. Sitenin anasayfasında bütün filmler listelenir ve bu listeye çeşitli filtreler uygulanabilir yada manuel olarak araba çubuğundan aratılabilir. Siteye üye girişi yapan kullanıcı, ana sayfadaki filmlerden istediklerini "izlediklerim(watchedList)" ve "izleyeceklerim(watchList)" listelerine kaydedebilir veya çıkarabilir. Oluşturdukları bu listeleri görüntüleyebilirler

#Teknik Detayları

Proje React ile yazılmıştır ve Hooks kullanılmıştır. React Router mevcuttur.
Stillerin yazımı için CSS In Js metodu kullanılmış ve kodun okunurluğunu arttırmak için styled component kütüphanesi kullanılmıştır API istekleri için Axios kütüphanesinden yararlanılmıştır ve Context API kullanılmıştır..

#Çalıştırılması

Proje klonlandıktan ya da forklandıktan sonra  terminale 'npm install' yazılarak paketler yüklenir.Sonrasında 'npm start' ile başlatılabilir. API'e ulaşım ve parametreler için-> [The Movie DataBase API (TMDB)](https://developers.themoviedb.org/3/getting-started/introduction). Çalıştırılmasına dair daha kapsamlı detaylar alt satırlarda mevcuttur.

#Live Demo
https://wonderful-euler-5f3ea0.netlify.app/

#Dosya Yapısı
```
# Project tree
movie-list
├── public
│   ├──  favicon.ico
│   ├── imageNotFound.svg
│   ├── index.html
│   ├── logo.png
│   ├── userData.JSON
├── src
│    ├── components
│    │        └──CircularProgressBar
│    │        └──Filters
│    │        └──HomeMenu
│    │        └──Layout
│    │        └──Loading
│    │        └──LoginForm
│    │        └──MovieList
│    │        └──PopUp
│    │        └──SearchBar
│    ├── context
│    ├── core
│    │     └──routes
│    ├── screens
│            └──home
│            └──login
│            └──watched
│            └──watchList
│        
└──App.css
└──App.js
└──index.css
└──index.js
```
---




# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
