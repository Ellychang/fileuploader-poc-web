 POC – Record & File Storage Web

## Overview

This project is a **proof of concept (POC)** built as part of a technical interview exercise.
It demonstrates a lightweight approach to storing records that reference uploaded files, exposed via an API and consumed by an Angular frontend.

---

## Tech Stack

* **Frontend:** [Angular](https://github.com/angular/angular-cli) version 21.1.2.
* **Version control:** GitHub

---

## Data Model

Each record consists of:

* `Id` – unique identifier
* `FilePath` – path to the uploaded file
* `UploadedAt` – timestamp

This keeps the model intentionally minimal for the POC.

---

## API Endpoints (Calls from Web)

* `GET /records`
  Returns all stored records

* `POST /upload`
  Uploads a file and returns its file URL

(Additional endpoints can be added easily if required.)

---

## Testing Strategy

Given this is a **POC**, the emphasis was on delivering core functionality quickly.
No unit tests have been created for this POC.

* Unit tests of each component and service should be introduced to check for functionality completeness.

---

## Running the Project

### Backend API

* Please run the other API project, it should load http://localhost:5064/swagger/index.html 

### Frontend

```bash
cd fileuploader-poc-web
npm install
ng serve
```

---

## Future Improvements (Frontend)

If this were to evolve beyond a POC:

* UX design look and feel to be implemented
* Put into a component library to be used by other Angulars projects
* Add validation and error-handling
* Test coverage and add it into the pipeline
* Add CI pipeline for the component library

---

## Notes

This POC is intentionally simple.
