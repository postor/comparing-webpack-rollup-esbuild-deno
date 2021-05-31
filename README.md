# comparing-webpack-rollup-esbuild-deno

实测比较webpack,rollup,esbuild,deno | comparing webpack,rollup,esbuild,deno with real codes


| tool |  build command |
|---|---|
| deno | deno bundle -c .\tsconfig.json --import-map .\import-maps.json .\src\index.ts .\build\deno\bundle.js  --unstable |
| webpack |  yarn webpack --mode=production |
| rollup |  yarn rollup  -c rollup.config.js |
| esbuild |  yarn esbuild .\src\index.ts  --bundle --outfile=build/esbuild/bundle.js (**error, not support target=es5**) | 

