module.exports = {
  name: 'core-src-lib-app-initializer',
  preset: '../../../../../jest.config.js',
  coverageDirectory:
    '../../../../../coverage/libs/core/src/lib/app-initializer',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
