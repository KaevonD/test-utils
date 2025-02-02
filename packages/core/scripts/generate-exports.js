#!/usr/bin/env node
// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: Apache-2.0
const fs = require('fs');
// This package exposes several APIs in different files. For each export we generate a separate file in the repository root
const publicExports = ['dom', 'selectors', 'utils'];

publicExports.forEach(exportName => {
  fs.writeFileSync(`${exportName}.js`, `module.exports = require('./dist/${exportName}')`);
  fs.writeFileSync(`${exportName}.d.ts`, `export * from './dist/${exportName}';`);
});
