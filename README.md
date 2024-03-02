# ssr-minimal-examples

A collection of SSR minimal examples for different frameworks.

## CSR (Client-Side Rendering) vs SSR (Server-Side Rendering)

|CSR|SSR|
|-|-|
|![20240302221129](https://raw.githubusercontent.com/upupming/paste/master/picgo/20240302221129.png)|![20240302221147](https://raw.githubusercontent.com/upupming/paste/master/picgo/20240302221147.png)|

## SSR API of different frameworks

|              | Angular | Vue 3 | React 18 | Svelte |
| ------------ | ------- | ----- | -------- | ------ |
| Server-Side Dehydration | [`new AngularSSR.CommonEngine().render()`](https://github.com/angular/universal/blob/e798d256de5e4377b704e63d993dc56ea35df97d/modules/common/engine/src/engine.ts#L64), `AngularPlatformBrowser.bootstrapApplication()` with [`provideServerRendering`](https://angular.io/api/platform-server/provideServerRendering) | [`VueServerRenderer.renderToString()`](https://github.com/vuejs/core/blob/f66a75ea75c8aece065b61e2126b4c5b2338aa6e/packages/server-renderer/src/renderToString.ts#L50) | [`ReactDOMServer.renderToString()`](https://github.com/facebook/react/blob/30ae0baed1cfe670dea41d7c7abdc375c9a4859a/packages/react-dom/src/server/ReactDOMLegacyServerNode.js#L22) | [`Component.render()`](https://github.com/sveltejs/svelte/blob/c4473dff7c3fd98500b4e609539ba89ddbcbb489/packages/svelte/src/internal/server/index.js#L187) |
| Client-Side Rendering | [`AngularPlatformBrowser.bootstrapApplication()`](https://github.com/angular/angular/blob/66d78a7dcc397369ab53248639526cdea8315633/packages/platform-browser/src/browser.ts#L94) | [`Vue.createApp().mount()`](https://vuejs.org/api/application.html#createapp) | [`ReactDOM.createRoot().render()`](https://react.dev/reference/react-dom/client/createRoot) | [`new Component()`](https://svelte.dev/docs/client-side-component-api) |
| Client-Side Hydration | `AngularPlatformBrowser.bootstrapApplication()` with [`provideClientHydration`](https://angular.io/api/platform-browser/provideClientHydration) | [`Vue.createSSRApp().mount()`](https://vuejs.org/api/application.html#createssrapp) | [`ReactDOM.hydrateRoot()`](https://react.dev/reference/react-dom/client/hydrateRoot) | `new Component({ hydrate: true })` |

## Minimal Examples

### angular

Created by following: https://angular.io/guide/ssr

### vue-3

Example from: https://github.com/vitejs/vite-plugin-vue/tree/main/playground/ssr-vue

### react-18

Modified from Vite React Minimal Example.

### svelte

Vite Svelte Minimal Example, note that [in SvelteKit, pages are server-side rendered by default.](https://kit.svelte.dev/docs/glossary#ssr), you can opt-out by using `export const ssr = false` in `page.js` config file.
