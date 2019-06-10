module.exports = {
  name: 'core-src-lib-translation',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/core/src/lib/translation',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
