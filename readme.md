# Form Builder Application

A full-stack form builder platform built using **React** and **Laravel**, with secure user authentication powered by Laravel Sanctum.

---

## Live Demo  
**URL**: https://backend-form-builder-itpd.onrender.com
**DOCS**: https://documenter.getpostman.com/view/20079162/2sB3WmUiHu

### Test Credentials (Optional)
- Email: chrisogil12@gmail.com
- Password: password 

---

## React Application  
The frontend provides an intuitive interface for creating forms, editing them, and viewing saved data.  
Technologies:
- React (Hooks + JSX)
- React Router
- Fetch/Axios API Integration
- Responsive UI

---

## Laravel Application  
The backend exposes secured REST API endpoints to manage users and their forms.  
Technologies:
- Laravel 12
- Sanctum Authentication
- RESTful Controller Structure

---

## 🐳 Docker Configuration  
Docker files provided to run both React and Laravel services effortlessly.

---

## ⚡ Quick Start with Docker  

### Prerequisites
- Docker & Docker Compose installed

### Installation Steps
```bash
git clone https://github.com/your-username/form-builder.git
cd form-builder
docker-compose up -d --build
```

Frontend: https://form-builder-frontend-alone.netlify.app/register
API: https://backend-form-builder-itpd.onrender.comr/api/v1  

---

## API Documentation  

Base URL:
```
/api/v1
```

### Public Routes
| Method | Endpoint | Description | Body Params |
|--------|----------|-------------|-------------|
| POST | `/register` | Registers a new user | name, email, password |
| POST | `/login` | Logs in and retrieves auth token | email, password |

### Protected Routes  
**Header required:**  
`Authorization: Bearer <token>`

#### Authentication
| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | `/logout` | Logs out authenticated user |

#### Users
| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/users` | List all users |
| GET | `/user` | Get authenticated user |

#### Forms
| Method | Endpoint | Description | Body Params |
|--------|----------|-------------|-------------|
| GET | `/forms` | Get all forms | – |
| POST | `/forms` | Create new form | title, fields(JSON), etc. |
| GET | `/forms/{form}` | Get a specific form | – |
| PUT | `/forms/{form}` | Update form | title, fields(JSON), etc. |
| DELETE | `/forms/{form}` | Delete form | – |

---

## ✨ Frontend Features
- Login / registration workflow
- Drag-drop or manual form creation
- Save, update, delete forms
- Secure API requests via token
- Simple data preview

---

## Technical Decisions
- **Sanctum** chosen due to lightweight token authentication
- API structured around **REST principles**
- Frontend uses reusable form schema components for scalability
- Dockerized deployment for consistent environment setup

---

## Deployment  

**Platform**: Netlify / Render
**Why**: Easy scaling, environment management, and CI/CD support  

### Deployment Steps
1. Push code to GitHub  
2. Connect app to deployment platform  
3. Configure environment variables  
4. Run migrations  
5. Set correct URL for frontend and backend  

---

## Environment Variables  

### Laravel `.env`
```
APP_NAME=FormBuilder
APP_KEY=base64:GENERATE_KEY
DB_CONNECTION=mysql
DB_HOST=mysql
DB_DATABASE=
DB_USERNAME=
DB_PASSWORD=

SANCTUM_STATEFUL_DOMAINS=localhost:3000
SESSION_DOMAIN=localhost
```

### React `.env`
```
REACT_APP_API_URL=https://backend-form-builder-itpd.onrender.comr/api/v1 
```

## Known Limitations
- Limited form field types (can be expanded)
- UI still undergoing improvements
- Form response handling in progress

---

## Future Improvements
- Drag & drop builder with more components (date, radio groups...)
- Form sharing and public response collection
- Analytics dashboard for submitted responses
