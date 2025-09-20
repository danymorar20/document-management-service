# 📂 Document Management Service

Microservicio de **gestión documental** desarrollado con **NestJS** como parte de una prueba técnica.  
Se implementa el **mínimo requerido**:  
- Módulo `documents` con dos endpoints funcionales.  
- Swagger/OpenAPI documentado.  
- Uso de **Clean Architecture + DDD (mínimo viable)**.  
- Repositorios **mock** en lugar de base de datos real.  
- **Tests unitarios** básicos de DTO y lógica pura.  
- **Stubs** para módulos `versions` y `audit`.

---

## 🚀 Requisitos

- Node.js **v22.16.0**
- npm (incluido con Node)

---

## ⚙️ Instalación y ejecución

Clonar el repositorio e instalar dependencias:

```bash
npm install
```

Levantar el servicio en modo desarrollo:

```bash
npm run start:dev
```

El servidor corre por defecto en: `http://localhost:3000`

## 📖 Swagger (API Docs)

La documentación interactiva está disponible en: `http://localhost:3000/api`

Allí se pueden probar directamente los endpoints implementados.

## ✅ Endpoints implementados
**Documents**

- `POST /documents` → Crear un nuevo documento (metadata mínima).

- `GET /documents/:id` → Obtener un documento por ID.

## 📂 Supuestos y decisiones

**Persistencia:**
No se implementó MongoDB, solo repositorios mock.
→ Esto simplifica la prueba y mantiene el enfoque en la arquitectura.

**ACL / Seguridad:**
El modelo de ACL está definido en DESIGN.md y validado conceptualmente,
pero no se implementa validación real de JWT ni verificación de roles.

**Retención y borrado:**
Definido en diseño (SOFT vs HARD delete), no implementado en código.

**Visualización segura:**
Documentado en DESIGN.md (stream desde S3, headers anti-cache), no implementado en código.

## 🧪 Tests

Se incluyen 2 unit tests opcionales:

- Validación de DTO (CreateDocumentDto).

- Lógica pura de use case (GetDocumentByIdUseCase).

**Ejecutar tests:**

```bash
npm run test
```

**Ver cobertura:**

```bash
npm run test:cov
```

## 📝 Qué quedó como Stub

Módulo versions: solo definido en schemas con indices, sin lógica de almacenamiento binario.

Módulo audit: solo definido en schemas con indices, sin lógica de audit.

MongoDB/Mongoose schemas: presentes en diseño, pero sin repositorio ni integración real.

ACL, Retención, Visualización segura: descritos en DESIGN.md, no implementados en el código.