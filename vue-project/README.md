# Vue.js Application

This is a Vue.js application that is automatically deployed to production using GitHub Actions.

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

## Deployment

This project is automatically deployed to production when changes are pushed to the main branch. The deployment is handled by GitHub Actions, which builds the Vue application and uploads the built files to the production server.

The deployment workflow is defined in the `.github/workflows/produccion.yml` file.
