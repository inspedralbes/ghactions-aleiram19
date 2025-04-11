# GitHub Actions - Despliegue a Producción

Este repositorio contiene un flujo de trabajo de GitHub Actions para desplegar automáticamente a producción.

## Flujo de trabajo

El flujo de trabajo se ejecuta cuando se realiza un push a la rama `main` y realiza las siguientes acciones:

1. Obtiene el código del repositorio
2. Despliega los archivos mediante SCP al servidor de producción

## Configuración

Para que el flujo de trabajo funcione correctamente, necesitas configurar los siguientes secretos en tu repositorio de GitHub:

- `PROD_KEY`: La clave SSH privada para conectar al servidor
- `PROD_USER`: El usuario para la conexión SSH
- `PROD_HOST`: La dirección del servidor de producción

## Estructura de archivos

```
.
├── .github
│   └── workflows
│       └── produccion.yml    # Archivo de configuración del flujo de trabajo
└── README.md                # Este archivo
```

## Uso

Simplemente realiza un push a la rama `main` y el flujo de trabajo se activará automáticamente:

```bash
git add .
git commit -m "Actualización para producción"
git push origin main
```
