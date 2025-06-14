module.exports = {
  apps: [
    {
      name: 'faro-weather-web',
      script: 'node_modules/next/dist/bin/next',
      args: 'start -p 7000',
      cwd: './',
      instances: 1,
      autorestart: true,
      watch: false,
    },
  ],
};
