# Introduction

[![Actions](https://github.com/i18next/i18next-v4-format-converter/workflows/node/badge.svg)](https://github.com/i18next/i18next-v4-format-converter/actions?query=workflow%3Anode)
[![Actions deno](https://github.com/i18next/i18next-v4-format-converter/workflows/deno/badge.svg)](https://github.com/i18next/i18next-v4-format-converter/actions?query=workflow%3Adeno)
[![npm version](https://img.shields.io/npm/v/i18next-v4-format-converter.svg?style=flat-square)](https://www.npmjs.com/package/i18next-v4-format-converter)

This package helps to convert old i18next translation resources to the new i18next v4 json format.

# Getting started

Source can be loaded via [npm](https://www.npmjs.com/package/i18next-v4-format-converter).

```bash
# npm package
$ npm install i18next-v4-format-converter
```

Usage via code:

```js
import { transformNamespace } from 'i18next-v4-format-converter'
const transformed = transformNamespace('en', { my: 'key', myOther: 'key2' })
```

for Deno:

```js
import { transformNamespace } from 'https://deno.land/x/i18next_v4_format_converter/index.js'
const transformed = transformNamespace('en', { my: 'key', myOther: 'key2' })
```

Usage via CLI:

```sh
npm install i18next-v4-format-converter -g

# -i is the input path
# -o is the output path
# if the output path is not provided the, it will save the result in the input path (replaces existing files)

i18next-v4-format-converter -i /Users/user/my/input -o /Users/user/my/output
# i18next-v4-format-converter /Users/user/my/input -o /Users/user/my/output
# i18next-v4-format-converter -o /Users/user/my/output
# i18next-v4-format-converter -i /Users/user/my/input
# i18next-v4-format-converter
```

---

<h3 align="center">Gold Sponsors</h3>

<p align="center">
  <a href="https://locize.com/" target="_blank">
    <img src="https://raw.githubusercontent.com/i18next/i18next/master/assets/locize_sponsor_240.gif" width="240px">
  </a>
</p>

---

**From the creators of i18next: localization as a service - locize.com**

A translation management system built around the i18next ecosystem - [locize.com](https://locize.com).

![locize](https://locize.com/img/ads/github_locize.png)

With using [locize](http://locize.com/?utm_source=react_i18next_readme&utm_medium=github) you directly support the future of i18next.

---
