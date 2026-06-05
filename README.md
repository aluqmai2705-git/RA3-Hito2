# Hito 4 - Pipeline de Despliegue e Integración Continua (CI/CD)

Este repositorio contiene el proyecto integrador final para la asignatura de Despliegue de Aplicaciones Web.

##  Estrategia CI/CD Implementada
Hemos automatizado el ciclo de vida del software utilizando un pipeline unificado directo en Render:
1. **Entorno Local:** Espacio de trabajo del desarrollador donde se programa el código y se añaden nuevas funcionalidades.
2. **Repositorio (GitHub):** Actúa como el sistema de control de versiones y el punto centralizado de verdad.
3. **Servicio de Producción (Render):** Entorno final en la nube accesible por los usuarios.

##  Funcionamiento del Pipeline (Tubería Automatizada)
Cada vez que se realiza un `git push` a la rama `main`, se dispara el flujo automático:
* **Fase de Test:** Se ejecuta `npm install` y `npm test` con el framework Jest.
* **Control de Calidad:** Si los tests unitarios o de integración fallan, la compilación se aborta automáticamente (Build Failed), protegiendo el entorno de producción.
* **Fase de Despliegue:** Si los tests se aprueban con éxito (PASS), Render actualiza el entorno y publica la nueva versión (Live).
* **Gestión de Incidentes:** En caso de fallos inesperados en producción, la plataforma permite efectuar un Rollback manual instantáneo a la versión anterior estable.
