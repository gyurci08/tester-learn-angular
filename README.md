# TesterLearnAngular

This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 19.0.4.

app/
    core/               
    shared/  
    feature/
      feature-module-1/
      feature-module-2/

app/
├── core/
│   ├── components/
│   │   ├── header/
│   │   ├── footer/
│   │   └── navbar/
│   ├── services/
│   │   ├── auth.service.ts
│   │   ├── logging.service.ts
│   │   └── config.service.ts
│   ├── interceptors/
│   │   └── http.interceptor.ts
│   ├── guards/
│   │   └── auth.guard.ts
│   ├── models/
│   │   └── user.model.ts
│   └── core.module.ts
├── shared/
│   ├── components/
│   │   ├── loading-spinner/
│   │   └── alert/
│   ├── directives/
│   │   └── highlight.directive.ts
│   ├── pipes/
│   │   └── truncate.pipe.ts
│   ├── models/
│   │   └── shared.model.ts
│   └── shared.module.ts
├── feature/
│   ├── feature-module-1/
│   │   ├── components/
│   │   │   ├── feature1-list/
│   │   │   └── feature1-detail/
│   │   ├── services/
│   │   │   └── feature1.service.ts
│   │   ├── models/
│   │   │   └── feature1.model.ts
│   │   └── feature-module-1.module.ts
│   ├── feature-module-2/
│   │   ├── components/
│   │   │   ├── feature2-list/
│   │   │   └── feature2-detail/
│   │   ├── services/
│   │   │   └── feature2.service.ts
│   │   ├── models/
│   │   │   └── feature2.model.ts
│   │   └── feature-module-2.module.ts
├── app-routing.module.ts
├── app.component.ts
├── app.component.html
└── app.module.ts
