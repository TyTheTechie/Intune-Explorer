import { PublicClientApplication, LogLevel } from '@azure/msal-browser';

const msalConfig = {
  auth: {
    clientId: '',
    authority: '',
    redirectUri: '',
  },
  system: {
    loggerOptions: {
      loggerCallback: (level, message, containsPii) => {
        console.log(`MSAL Logging: ${message}`);
      },
      logLevel: LogLevel.Verbose,
    },
  },
};

const msalInstance = new PublicClientApplication(msalConfig);

export { msalInstance, msalConfig };
