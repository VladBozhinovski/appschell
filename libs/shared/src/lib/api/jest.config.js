module.exports = {
  name: 'shared-src-lib-api',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/shared/src/lib/api',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
