module.exports = {
  apps: [
    {
      name: 'pocket-link-viewer',
      script: 'server.js',
      cwd: __dirname,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 3008
      },
      instances: 1,
      autorestart: true,
      max_memory_restart: '200M'
    }
  ]
};
