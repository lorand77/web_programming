console.log('All arguments:', process.argv);
console.log('First argument:', process.argv[2]);
console.log('Second argument:', process.argv[3]);

console.log('Environment:', process.env.NODE_ENV);
console.log('Custom variable:', process.env);
console.log('Database URL:', process.env.DATABASE_URL || 'Not set');

console.log(`V8 version: ${process.versions.v8}`);