```bash
mkdir custom-app
cd custom-app
npm init -y
npm install typescript ts-node @types/node --save-dev
npx tsc --init
```

Create the following folder structure:

```
custom-app/
│
├── src/
│   └── index.ts
│
├── package.json
└── tsconfig.json
```

### `src/index.ts`
```typescript
const helloWorld = (): string => {
    return "Hello, World!";
};

console.log(helloWorld());
```

### `tsconfig.json`
Make sure your `tsconfig.json` includes the following settings for a minimal setup:

```json
{
  "compilerOptions": {
    "target": "ES2020",
    "module": "commonjs",
    "strict": true,
    "esModuleInterop": true,
    "skipLibCheck": true,
    "forceConsistentCasingInFileNames": true
  },
  "include": ["src/**/*"],
  "exclude": ["node_modules"]
}
```

### Running the application
You can run your application using:

```bash
npx ts-node src/index.ts
```

This simple TypeScript application is ready to be expanded upon while adhering to modern best practices.