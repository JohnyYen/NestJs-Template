# NestJS Prisma Boilerplate

![NestJS](https://img.shields.io/badge/nestjs-E0234E?style=for-the-badge&logo=nestjs&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-3982CE?style=for-the-badge&logo=Prisma&logoColor=white)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)

Un boilerplate completo para proyectos NestJS con Prisma ORM, que incluye una estructura organizada, componentes genéricos reutilizables y configuraciones listas para producción.

## Características principales

- ✅ Arquitectura modular y escalable
- ✅ Configuración integrada de Prisma ORM
- ✅ Controladores, servicios y repositorios base genéricos
- ✅ Configuración centralizada de la aplicación
- ✅ DTOs para paginación y respuestas estándar
- ✅ Entorno listo para producción con buenas prácticas
- ✅ Soporte para migraciones y seeding de datos
- ✅ Documentación automática con Swagger
- ✅ Manejo centralizado de excepciones

## Estructura del proyecto

```
src/
├── common/                     # Funcionalidades compartidas
│   ├── decorators/             # Decoradores personalizados
│   ├── exceptions/             # Excepciones personalizadas
│   ├── filters/                # Filtros de excepción
│   ├── guards/                 # Guards de autenticación/autorización
│   ├── interceptors/           # Interceptores
│   ├── middleware/             # Middleware común
│   └── utils/                  # Utilidades varias
│
├── config/                     # Configuración de la aplicación
│   ├── app.config.ts           # Configuración principal
│   ├── database.config.ts      # Configuración de base de datos
│   └── swagger.config.ts       # Configuración de Swagger
│
├── core/                       # Núcleo de la aplicación
│   ├── base/                   # Clases base genéricas
│   ├── dto/                    # DTOs base
│   └── interfaces/             # Interfaces genéricas
│
├── modules/                    # Módulos de la aplicación
│   ├── shared/                 # Módulo compartido
│   └── [feature]/              # Módulos por funcionalidad
│
├── prisma/                     # Configuración de Prisma
│   ├── migrations/             # Migraciones
│   ├── seeds/                  # Seeds para datos iniciales
│   └── schema.prisma           # Esquema de Prisma
│
├── app.module.ts               # Módulo principal
└── main.ts                     # Punto de entrada
```

## Requisitos previos

- Node.js (v16 o superior)
- npm (v8 o superior) o yarn
- Docker (opcional, para base de datos)
- Base de datos compatible con Prisma (PostgreSQL, MySQL, SQLite, etc.)

## Configuración inicial

1. **Clonar el repositorio**

```bash
git clone https://github.com/tu-usuario/nestjs-template.git
cd nestjs-template
```

2. **Instalar dependencias**

```bash
npm install
# o
yarn install
```

3. **Configurar variables de entorno**

Crear un archivo `.env` en la raíz del proyecto basado en `.env.example`:

```env
DATABASE_URL="postgresql://user:password@localhost:5432/dbname?schema=public"
PORT=3000
NODE_ENV=development
```

4. **Configurar la base de datos (con Docker opcional)**

```bash
docker-compose up -d  # Si usas la configuración de Docker proporcionada
```

5. **Ejecutar migraciones de Prisma**

```bash
npx prisma migrate dev --name init
```

6. **Ejecutar seed de datos inicial (opcional)**

```bash
npx prisma db seed
```

## Comandos útiles

| Comando | Descripción |
|---------|-------------|
| `npm run start` | Inicia la aplicación en producción |
| `npm run start:dev` | Inicia la aplicación en modo desarrollo |
| `npm run build` | Compila el proyecto TypeScript |
| `npm run test` | Ejecuta los tests |
| `npm run test:watch` | Ejecuta tests en modo watch |
| `npm run test:cov` | Ejecuta tests con cobertura |
| `npx prisma migrate dev` | Crea y aplica una nueva migración |
| `npx prisma studio` | Abre el cliente visual de Prisma |

## Documentación API con Swagger

El proyecto incluye Swagger configurado automáticamente. Después de iniciar la aplicación:

1. Accede a la interfaz de Swagger en: `http://localhost:3000/api`
2. Explora los endpoints disponibles
3. Prueba las requests directamente desde la interfaz

Para personalizar la configuración de Swagger, modifica el archivo `src/config/swagger.config.ts`.

## Configuración de producción

1. **Variables de entorno en producción**

Asegúrate de configurar adecuadamente las variables de entorno en tu entorno de producción:

```env
NODE_ENV=production
DATABASE_URL="your_production_db_url"
PORT=8080
```

2. **Optimizar el build**

```bash
npm run build
```

3. **Ejecutar en producción**

```bash
npm run start:prod
```

## Migraciones en producción

```bash
npx prisma migrate deploy
```

## Contribución

1. Haz fork del proyecto
2. Crea una rama para tu feature (`git checkout -b feature/awesome-feature`)
3. Haz commit de tus cambios (`git commit -m 'Add some awesome feature'`)
4. Haz push a la rama (`git push origin feature/awesome-feature`)
5. Abre un Pull Request

## Licencia

Este proyecto está licenciado bajo la licencia MIT - ver el archivo [LICENSE](LICENSE) para más detalles.

## Soporte

Si encuentras algún problema o tienes sugerencias, por favor abre un issue en el repositorio.

---

**Happy coding!** 🚀