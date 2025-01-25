# Add these to your installed apps
INSTALLED_APPS = [
    'rest_framework',
    'rest_framework.authtoken',  # For token authentication
    'your_app_name',  # Replace with the app name containing the profile models
]

# Token Authentication
REST_FRAMEWORK = {
    'DEFAULT_AUTHENTICATION_CLASSES': [
        'rest_framework.authentication.TokenAuthentication',
    ],
    'DEFAULT_PERMISSION_CLASSES': [
        'rest_framework.permissions.IsAuthenticated',
    ],
}
