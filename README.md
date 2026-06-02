# Fluxbot Studio IA Panel

Panel operativo separado de la web pública para administrar entrenamiento, políticas y auditoría del chatbot.

## Getting Started

```bash
npm install
npm run dev
```

## Estructura principal

- `/` Dashboard operativo.
- `/training` Entrenamiento y reglas.
- `/api/v1/widget/*` Endpoints operativos del panel.

## Objetivo

- Gestionar tenants y entrenamiento.
- Bloquear preguntas fuera de alcance.
- Revisar auditoría y cuotas.
- Mantener esta superficie separada de la web pública de ventas.
