// @flow
import dotenv from "dotenv";

// Load .env
dotenv.config();

export const {
  NODE_ENV,
  PORT,
  HOST_NAME,
  DOMAIN_HOST,
  API_BASE_URI,
  API_SCHEME,
  SWAGGER_DOMAIN,
  LOGS_DBURL,
  DBURL,
  JWT_SECRET,
  JWT_BEARER,
  JWT_EXPIRATION_MINUTES,
  SENTRY_KEY,
  SENTRY_ID,
  SENDGRIDAPIKEY,
  MAILER_FROM_OPTION,
  MAILCHIMP_KEY,
  MAILCHIMP_URL,
  SUBSCRIBERS_LIST_ID,
  ADMIN_INFO_EMAIL,
  BULK_SMS_NG_URL,
  BULK_SMS_PASS,
  BULK_SMS_SENDER,
  BULK_SMS_USERNAME,

  MONNIFY_API_KEY,
  MONNIFY_CLIENT_SECRET_KEY,
  MONNIFY_BASE_URL,
  MONNIFY_CONTRACT_CODE,
  MONNIFY_ACCOUNT_CODE,


  MONNIFY_WEBHOOK_URL,

  PAYSTACK_SECRET_KEY,
  PAYSTACK_API_URL,

  AGENT_COUNTER,
  VEND_HOST,
  VEND_USERNAME,
  VEND_PASSWORD,
  VEND_HASH,
  ELECTRICITY_CHARGE,
  CABLETV_CHARGE,
  AIRTIME_CHARGE,
  DATA_CHARGE,

  GLADE_MERCHANT_ID,
  GLADE_MERCHANT_KEY,
  GLADE_ENDPOINT,

  JOBS_DBURL,

  PRIME_AIRTIME_URL,
  PRIME_AIRTIME_USERNAME,
  PRIME_AIRTIME_PASSWORD,

  VTPASS_URL,
  VTPASS_USERNAME,
  VTPASS_PASSWORD,

  UTIL_SERVER,

  GOOGLE_CONFIG_BASE64,
  WORKER_API_BASE_URI,
  // GOOGLE_APPLICATION_CREDENTIALS,

  CLOUDWATCH_GROUP_NAME,
  CLOUDWATCH_ACCESS_KEY,
  CLOUDWATCH_SECRET_ACCESS_KEY,
  CLOUDWATCH_REGION,
  NODE_ENV_CLOUDWATCH,

  REDIS_HOST, REDIS_PORT, REDIS_PASS,

  AGGREGATOR_COUNTER,
  ADMIN_NOTIFICATION_EMAIL,

  ITEX_POS_KEY,

  RUBIES_LIVE_URL,
  RUBIES_LIVE_SK,

  RUBIES_POS_KEY,
  RUBIES_DR_ACCOUNTNAME,

  LOGS_MAIL,
} = process.env;
