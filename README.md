This attempts to demonstrate an issue with traceback line numbers with ts-node-dev.

Traceback blames line 4 instead of line 15.
```
C:\Users\amara\sync\repos\trace_error>npm run test

> ahideseek@1.0.0 test C:\Users\amara\sync\repos\trace_error
> ts-node-dev --respawn --transpileOnly test.ts

Using ts-node version 8.1.0, typescript version 3.4.5
Error: aaaa
    at Object.<anonymous> (C:\Users\amara\sync\repos\trace_error\test.ts:4:7)
    at Module._compile (internal/modules/cjs/loader.js:759:30)
    at Module.m._compile (C:\Users\amara\AppData\Local\Temp\ts-node-dev-hook-9162810701284834.js:55:25)
    at Module._extensions..js (internal/modules/cjs/loader.js:770:10)
    at require.extensions.<computed> (C:\Users\amara\AppData\Local\Temp\ts-node-dev-hook-9162810701284834.js:57:14)
    at Object.nodeDevHook [as .ts] (C:\Users\amara\sync\repos\trace_error\node_modules\ts-node-dev\lib\hook.js:61:7)
    at Module.load (internal/modules/cjs/loader.js:628:32)
    at Function.Module._load (internal/modules/cjs/loader.js:555:12)
    at Module.require (internal/modules/cjs/loader.js:666:19)
    at require (internal/modules/cjs/helpers.js:16:16)
[ERROR] 16:49:22 Error: aaaa

```