interface AuthConfig {
  clientID: string;
  domain: string;
  callbackURL: string;
}

export const AUTH_CONFIG: AuthConfig = {
  clientID: '6SpWbeW1lYcP36IGrRSQ7zbl074wKlAk',
  domain: 'ng-evernote.eu.auth0.com',
  callbackURL: 'http://localhost:4200/callback'
};
