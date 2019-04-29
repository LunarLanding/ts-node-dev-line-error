This attempts to demonstrate an issue with traceback line numbers with ts-node-dev.

test.ts
```



throw new Error()
```

However, traceback blames line 1.
```
C:\Users\amara\sync\repos\trace_error>npm run test

> ahideseek@1.0.0 test C:\Users\amara\sync\repos\trace_error
> ts-node-dev --respawn --transpileOnly test.ts

Using ts-node version 8.1.0, typescript version 3.4.5
Error
    at Object.<anonymous> (C:\Users\amara\sync\repos\trace_error\test.ts:1:7)
    at Module._compile (internal/modules/cjs/loader.js:759:30)
    at Module.m._compile (C:\Users\amara\AppData\Local\Temp\ts-node-dev-hook-1368203593211208.js:55:25)
    at Module._extensions..js (internal/modules/cjs/loader.js:770:10)
    at require.extensions.<computed> (C:\Users\amara\AppData\Local\Temp\ts-node-dev-hook-1368203593211208.js:57:14)
    at Object.nodeDevHook [as .ts] (C:\Users\amara\sync\repos\trace_error\node_modules\ts-node-dev\lib\hook.js:61:7)
    at Module.load (internal/modules/cjs/loader.js:628:32)
    at Function.Module._load (internal/modules/cjs/loader.js:555:12)
    at Module.require (internal/modules/cjs/loader.js:666:19)
    at require (internal/modules/cjs/helpers.js:16:16)
[ERROR] 16:11:55 Error

```

Versions:
```
C:\Users\amara\sync\repos\trace_error>node -v
v12.0.0

C:\Users\amara\sync\repos\trace_error>tsc -v
Version 3.4.5

C:\Users\amara\sync\repos\trace_error>npm list
ahideseek@1.0.0 C:\Users\amara\sync\repos\trace_error
+-- @types/node@11.13.8
+-- ts-node@8.1.0
| +-- arg@4.1.0
| +-- diff@3.5.0
| +-- make-error@1.3.5
| +-- source-map-support@0.5.12
| | +-- buffer-from@1.1.1
| | `-- source-map@0.6.1
| `-- yn@3.1.0
+-- ts-node-dev@1.0.0-pre.32
| +-- dateformat@1.0.12
| | +-- get-stdin@4.0.1
| | `-- meow@3.7.0
| |   +-- camelcase-keys@2.1.0
| |   | +-- camelcase@2.1.1
| |   | `-- map-obj@1.0.1 deduped
| |   +-- decamelize@1.2.0
| |   +-- loud-rejection@1.6.0
| |   | +-- currently-unhandled@0.4.1
| |   | | `-- array-find-index@1.0.2
| |   | `-- signal-exit@3.0.2
| |   +-- map-obj@1.0.1
| |   +-- minimist@1.2.0 deduped
| |   +-- normalize-package-data@2.5.0
| |   | +-- hosted-git-info@2.7.1
| |   | +-- resolve@1.10.1 deduped
| |   | +-- semver@5.7.0 deduped
| |   | `-- validate-npm-package-license@3.0.4
| |   |   +-- spdx-correct@3.1.0
| |   |   | +-- spdx-expression-parse@3.0.0 deduped
| |   |   | `-- spdx-license-ids@3.0.4
| |   |   `-- spdx-expression-parse@3.0.0
| |   |     +-- spdx-exceptions@2.2.0
| |   |     `-- spdx-license-ids@3.0.4 deduped
| |   +-- object-assign@4.1.1
| |   +-- read-pkg-up@1.0.1
| |   | +-- find-up@1.1.2
| |   | | +-- path-exists@2.1.0
| |   | | | `-- pinkie-promise@2.0.1 deduped
| |   | | `-- pinkie-promise@2.0.1
| |   | |   `-- pinkie@2.0.4
| |   | `-- read-pkg@1.1.0
| |   |   +-- load-json-file@1.1.0
| |   |   | +-- graceful-fs@4.1.15
| |   |   | +-- parse-json@2.2.0
| |   |   | | `-- error-ex@1.3.2
| |   |   | |   `-- is-arrayish@0.2.1
| |   |   | +-- pify@2.3.0
| |   |   | +-- pinkie-promise@2.0.1 deduped
| |   |   | `-- strip-bom@2.0.0
| |   |   |   `-- is-utf8@0.2.1
| |   |   +-- normalize-package-data@2.5.0 deduped
| |   |   `-- path-type@1.1.0
| |   |     +-- graceful-fs@4.1.15 deduped
| |   |     +-- pify@2.3.0 deduped
| |   |     `-- pinkie-promise@2.0.1 deduped
| |   +-- redent@1.0.0
| |   | +-- indent-string@2.1.0
| |   | | `-- repeating@2.0.1
| |   | |   `-- is-finite@1.0.2
| |   | |     `-- number-is-nan@1.0.1
| |   | `-- strip-indent@1.0.1
| |   |   `-- get-stdin@4.0.1 deduped
| |   `-- trim-newlines@1.0.0
| +-- dynamic-dedupe@0.3.0
| | `-- xtend@4.0.1
| +-- filewatcher@3.0.1
| | `-- debounce@1.2.0
| +-- minimist@1.2.0
| +-- mkdirp@0.5.1
| | `-- minimist@0.0.8
| +-- node-notifier@4.6.1
| | +-- cli-usage@0.1.9
| | | +-- marked@0.6.2
| | | `-- marked-terminal@3.2.0
| | |   +-- ansi-escapes@3.2.0
| | |   +-- cardinal@2.1.1
| | |   | +-- ansicolors@0.3.2
| | |   | `-- redeyed@2.1.1
| | |   |   `-- esprima@4.0.1
| | |   +-- chalk@2.4.2
| | |   | +-- ansi-styles@3.2.1
| | |   | | `-- color-convert@1.9.3
| | |   | |   `-- color-name@1.1.3
| | |   | +-- escape-string-regexp@1.0.5
| | |   | `-- supports-color@5.5.0
| | |   |   `-- has-flag@3.0.0
| | |   +-- cli-table@0.3.1
| | |   | `-- colors@1.0.3
| | |   +-- node-emoji@1.10.0
| | |   | `-- lodash.toarray@4.4.0
| | |   `-- supports-hyperlinks@1.0.1
| | |     +-- has-flag@2.0.0
| | |     `-- supports-color@5.5.0 deduped
| | +-- growly@1.3.0
| | +-- lodash.clonedeep@3.0.2
| | | +-- lodash._baseclone@3.3.0
| | | | +-- lodash._arraycopy@3.0.0
| | | | +-- lodash._arrayeach@3.0.0
| | | | +-- lodash._baseassign@3.2.0
| | | | | +-- lodash._basecopy@3.0.1
| | | | | `-- lodash.keys@3.1.2 deduped
| | | | +-- lodash._basefor@3.0.3
| | | | +-- lodash.isarray@3.0.4
| | | | `-- lodash.keys@3.1.2
| | | |   +-- lodash._getnative@3.9.1
| | | |   +-- lodash.isarguments@3.1.0
| | | |   `-- lodash.isarray@3.0.4 deduped
| | | `-- lodash._bindcallback@3.0.1
| | +-- minimist@1.2.0 deduped
| | +-- semver@5.7.0
| | +-- shellwords@0.1.1
| | `-- which@1.3.1
| |   `-- isexe@2.0.0
| +-- resolve@1.10.1
| | `-- path-parse@1.0.6
| +-- rimraf@2.6.3
| | `-- glob@7.1.3
| |   +-- fs.realpath@1.0.0
| |   +-- inflight@1.0.6
| |   | +-- once@1.4.0 deduped
| |   | `-- wrappy@1.0.2
| |   +-- inherits@2.0.3
| |   +-- minimatch@3.0.4
| |   | `-- brace-expansion@1.1.11
| |   |   +-- balanced-match@1.0.0
| |   |   `-- concat-map@0.0.1
| |   +-- once@1.4.0
| |   | `-- wrappy@1.0.2 deduped
| |   `-- path-is-absolute@1.0.1
| +-- ts-node@8.1.0 deduped
| `-- tsconfig@7.0.0
|   +-- @types/strip-bom@3.0.0
|   +-- @types/strip-json-comments@0.0.30
|   +-- strip-bom@3.0.0
|   `-- strip-json-comments@2.0.1
`-- typescript@3.4.5
```