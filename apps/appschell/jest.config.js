module.exports = {
  name: 'appschell',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/appschell',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
