module.exports = {
  name: 'core-src-lib-authorization',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/core/src/lib/authorization',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
