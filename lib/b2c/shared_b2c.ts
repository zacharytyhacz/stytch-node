import { UserMetadata, UserID } from "./users";

export interface Attributes {
  ip_address?: string;
  user_agent?: string;
}

export interface Name {
  first_name?: string;
  middle_name?: string;
  last_name?: string;
}

export interface Email {
  email_id: string;
  email: string;
  verified: boolean;
}

export interface PhoneNumber {
  phone_id: string;
  phone_number: string;
  verified: boolean;
}

export interface WebAuthnRegistration {
  webauthn_registration_id: string;
  domain: string;
  user_agent: string;
  verified: boolean;
  authenticator_type: string;
}

export interface BiometricRegistration {
  biometric_registration_id: string;
  verified: boolean;
}

export interface TOTP {
  totp_id: string;
  verified: boolean;
}

export interface Password {
  password_id: string;
  requires_reset: boolean;
}

export interface User {
  user_id: UserID;
  created_at: string;
  status: string;
  name: Name;
  emails: Email[];
  password?: Password;
  phone_numbers: PhoneNumber[];
  providers: OAuthProvider[];
  webauthn_registrations: WebAuthnRegistration[];
  biometric_registrations: BiometricRegistration[];
  totps: TOTP[];
  crypto_wallets: CryptoWallet[];
  trusted_metadata?: UserMetadata;
  untrusted_metadata?: UserMetadata;
}

export interface CryptoWallet {
  crypto_wallet_id: string;
  crypto_wallet_address: string;
  crypto_wallet_type: string;
  verified: boolean;
}

export interface OAuthProvider {
  oauth_user_registration_id: string;
  provider_subject: string;
  provider_type: string;
  profile_picture_url: string;
  locale: string;
}

export interface EmailFactor {
  delivery_method: "email" | "embedded";
  type: string;
  last_authenticated_at: string;
  email_factor: {
    email_id: string;
    email_address: string;
  };
}

export interface PhoneNumberFactor {
  delivery_method: "sms" | "whatsapp";
  type: string;
  last_authenticated_at: string;
  phone_number_factor: {
    phone_id: string;
    phone_number: string;
  };
}

export interface GoogleOAuthFactor {
  delivery_method: "oauth_google";
  type: string;
  last_authenticated_at: string;
  google_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface MicrosoftOAuthFactor {
  delivery_method: "oauth_microsoft";
  type: string;
  last_authenticated_at: string;
  microsoft_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface AppleOAuthFactor {
  delivery_method: "oauth_apple";
  type: string;
  last_authenticated_at: string;
  apple_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface GithubOAuthFactor {
  delivery_method: "oauth_github";
  type: string;
  last_authenticated_at: string;
  github_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface GitLabOAuthFactor {
  delivery_method: "oauth_gitlab";
  type: string;
  last_authenticated_at: string;
  gitlab_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface FacebookOAuthFactor {
  delivery_method: "oauth_facebook";
  type: string;
  last_authenticated_at: string;
  facebook_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface DiscordOAuthFactor {
  delivery_method: "oauth_discord";
  type: string;
  last_authenticated_at: string;
  discord_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface SalesforceOAuthFactor {
  delivery_method: "oauth_salesforce";
  type: string;
  last_authenticated_at: string;
  salesforce_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface SlackOAuthFactor {
  delivery_method: "oauth_slack";
  type: string;
  last_authenticated_at: string;
  slack_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface AmazonOAuthFactor {
  delivery_method: "oauth_amazon";
  type: string;
  last_authenticated_at: string;
  amazon_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface BitbucketOAuthFactor {
  delivery_method: "oauth_bitbucket";
  type: string;
  last_authenticated_at: string;
  bitbucket_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface LinkedInOAuthFactor {
  delivery_method: "oauth_linkedin";
  type: string;
  last_authenticated_at: string;
  linkedin_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface CoinbaseOAuthFactor {
  delivery_method: "oauth_coinbase";
  type: string;
  last_authenticated_at: string;
  coinbase_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface TwitchOAuthFactor {
  delivery_method: "oauth_twitch";
  type: string;
  last_authenticated_at: string;
  twitch_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface TwitterOAuthFactor {
  delivery_method: "oauth_twitter";
  type: string;
  last_authenticated_at: string;
  twitter_oauth_factor: {
    id: string;
    provider_subject: string;
  };
}

export interface TikTokOAuthFactor {
  delivery_method: "oauth_tiktok";
  type: string;
  last_authenticated_at: string;
  tiktok_oauth_factor: {
    id: string;
    provider_subject: string;
  };
}

export interface FigmaOAuthFactor {
  delivery_method: "oauth_figma";
  type: string;
  last_authenticated_at: string;
  figma_oauth_factor: {
    id: string;
    email_id: string;
    provider_subject: string;
  };
}

export interface SnapchatOAuthFactor {
  delivery_method: "oauth_snapchat";
  type: string;
  last_authenticated_at: string;
  snapchat_oauth_factor: {
    id: string;
    provider_subject: string;
  };
}

export interface WebAuthnFactor {
  delivery_method: "webauthn_registration";
  type: string;
  last_authenticated_at: string;
  webauthn_factor: {
    webauthn_registration_id: string;
    domain: string;
    user_agent: string;
  };
}

export interface BiometricFactor {
  delivery_method: "biometric";
  type: string;
  last_authenticated_at: string;
  biometric_factor: {
    biometric_registration_id: string;
  };
}

export interface AuthenticatorAppFactor {
  delivery_method: "authenticator_app";
  type: string;
  last_authenticated_at: string;
  authenticator_app_factor: {
    totp_id: string;
  };
}

export interface RecoveryCodeFactor {
  delivery_method: "recovery_code";
  type: string;
  last_authenticated_at: string;
  recovery_code_factor: {
    totp_recovery_code_id: string;
  };
}

export interface CryptoWalletFactor {
  delivery_method: "crypto_wallet";
  type: string;
  last_authenticated_at: string;
  crypto_wallet_factor: {
    crypto_wallet_id: string;
    crypto_wallet_address: string;
    crypto_wallet_type: string;
  };
}

export interface PasswordFactor {
  delivery_method: "knowledge";
  type: string;
  last_authenticated_at: string;
}

export type B2CAuthenticationFactor =
  | EmailFactor
  | PhoneNumberFactor
  | GoogleOAuthFactor
  | MicrosoftOAuthFactor
  | AppleOAuthFactor
  | GithubOAuthFactor
  | GitLabOAuthFactor
  | FacebookOAuthFactor
  | DiscordOAuthFactor
  | SalesforceOAuthFactor
  | SlackOAuthFactor
  | AmazonOAuthFactor
  | BitbucketOAuthFactor
  | LinkedInOAuthFactor
  | CoinbaseOAuthFactor
  | TwitchOAuthFactor
  | TwitterOAuthFactor
  | TikTokOAuthFactor
  | SnapchatOAuthFactor
  | FigmaOAuthFactor
  | WebAuthnFactor
  | BiometricFactor
  | AuthenticatorAppFactor
  | RecoveryCodeFactor
  | CryptoWalletFactor
  | PasswordFactor;

export interface Session {
  session_id: string;
  user_id: string;
  started_at: string;
  last_accessed_at: string;
  expires_at: string;
  attributes: Attributes;
  authentication_factors: B2CAuthenticationFactor[];
  custom_claims?: Record<string, any>; // eslint-disable-line @typescript-eslint/no-explicit-any
}
