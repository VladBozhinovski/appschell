module.exports = {
  name: 'core-src-lib-guards',
  preset: '../../../../../jest.config.js',
  coverageDirectory: '../../../../../coverage/libs/core/src/lib/guards',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
