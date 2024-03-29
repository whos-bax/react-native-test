# React Native Testing with Jest and React Test Renderer

### React Native 테스트 툴 적용해보기

- react native: 0.73.3
- typescript: 5.0.4
- jest: 29.6.3
- @types/jest: 29.5.12
- react-test-renderer: 18.2.0
- @types/react-test-renderer: 18.0.0

### 설정
1. [React Native Setup](https://reactnative.dev/docs/environment-setup)
2. `npm i -D @types/jest`
3. `npm test`

### 순서
#### 1. Unit Test
> - `src/mathUtils.ts`
> - `__test__/Unit.test.ts`
#### 2. UI Test
- update your snapshot with `npm test -u`
> - `src/HomeScreen.tsx`
> - `__test__/HomeScreen.test.tsx`
#### 3. State Changes
> - `src/HomeScreen.tsx`
> - `__test__/HomeScreen.test.tsx`
#### 4. Async Task
#### 5. Axios
#### 6. React Navigation
#### 7. Image
#### 8. Generate Report
