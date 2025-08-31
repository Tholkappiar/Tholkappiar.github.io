# Gmail Real-time Email Watcher with Pub/Sub

A Node.js application that monitors Gmail inbox in real-time using Google Pub/Sub notifications, displays new email details and send a webhook request.

## Features

-   Real-time email monitoring via Gmail API
-   Displays email subject, sender, date, and body content
-   OAuth2 authentication with token persistence

## Prerequisites

-   Node
-   Google Cloud Project ( Cloud project, Service Account, Pub/Sub configuration )

## Setup

1. **Enable APIs**:

    - Enable Gmail API and Cloud Pub/Sub API in [Google Cloud Console](https://console.cloud.google.com/)

2. **Create Credentials**:

    - Google provides an option to download these files directly - while creating the credentials (Easier)

    - Create OAuth 2.0 Client ID credentials (save as `credentials.json`)
    - Create a service account under `IAM & Admin` (save as `service.json`)

    - `credentials.json` example
        ```js
        {
            "web": {
                "client_id": "",
                "project_id": "",
                "auth_uri": "",
                "token_uri": "",
                "auth_provider_x509_cert_url": "",
                "client_secret": "",
                "redirect_uris": [""],
                "javascript_origins": [""]
            }
        }
        ```
    - `service.json` example
        ```js
         {
            "type": "",
            "project_id": "",
            "private_key_id": "",
            "private_key": "",
            "client_email": "",
            "client_id": "",
            "auth_uri": "",
            "token_uri": "",
            "auth_provider_x509_cert_url": "",
            "client_x509_cert_url": "",
            "universe_domain": ""
        }
        ```

3. **Create .env file**:

    - Create `.env` file and provide the env values

    - copy and use :

        ```bash
        PORT= # PORT which server supposed to runs on
        MACRODROID_WEBHOOK_URL= # Macrodroid webhook url
        WATCHING_EMAIL_ADDR= # Email Address which needs to be watched

        ```

4. **Configure Pub/Sub**:

    - Create a Pub/Sub topic and subscription
    - `gmail-api-push@system.gserviceaccount.com` for pub/sub pricipal and `Pub/Sub Publisher` as role
    - Grant publish rights to your service account
    - Change the `config.ts` file constants (eg: `PROJECT_ID`)

5. **Install dependencies**:

    ```bash
    yarn
    ```

6. **Configuration**:
    - Place these files in your project root:
        - credentials.json - OAuth 2.0 client credentials
        - service.json - Service account credentials
        - token.json - Will be auto-generated after first auth
7. **Running the Application**:
    ```bash
    yarn build && yarn start
    ```
8. **On first run:**:

    - The app will open a browser for OAuth authorization
    - Copy the authorization code into the terminal
    - The app will save your credentials to token.json

9. **UI - Web interface:**:

    - GET `http://{url}/dashboard` - to view Web dashboard

10. **How It Works:**:

    ```js
    📧 NEW EMAIL ARRIVES
     ├── Attempt 1 (Immediate)
     │   ├── 📤 Send webhook → SUCCESS
     │   ├── ⏳ Wait up to 30 seconds for /ack
     │   └── ❌ TIMEOUT (no ack received)
     │
     ├── 💤 Delay: 10 seconds + random(0-1000ms) = ~10.5 seconds
     │
     ├── Attempt 2
     │   ├── 📤 Send webhook → SUCCESS
     │   ├── ⏳ Wait up to 30 seconds for /ack
     │   └── ❌ TIMEOUT (no ack received)
     │
     ├── 💤 Delay: 20 seconds + random(0-1000ms) = ~20.3 seconds
     │
     ├── Attempt 3 (Final)
     │   ├── 📤 Send webhook → SUCCESS
     │   ├── ⏳ Wait up to 30 seconds for /ack
     │   └── ❌ TIMEOUT (no ack received)
     │
     └── 🚫 GIVE UP - All retries exhausted
    ```

11. **Shutdowns:**:
    - Press Ctrl+C to stop the watcher.
