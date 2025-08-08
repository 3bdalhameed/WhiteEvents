import json, requests
from django.conf import settings
from requests.auth import HTTPBasicAuth

def trigger_n8n(event_type: str, payload: dict):
    resp = requests.post(
        settings.N8N_WEBHOOK_URL,
        json={"event": event_type, "data": payload},
        auth=HTTPBasicAuth(settings.N8N_WEBHOOK_USER, settings.N8N_WEBHOOK_PASS),
        timeout=5,
    )
    resp.raise_for_status()