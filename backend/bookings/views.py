import json
from datetime import datetime
from django.conf import settings
from django.core.mail import send_mail
from django.http import JsonResponse, HttpResponseNotAllowed
from django.utils.timezone import make_aware, get_current_timezone
from django.views.decorators.csrf import csrf_exempt

REQUIRED_FIELDS = {"name", "phoneNumber", "date", "time"}

def _validate(payload):
    errors = {}
    for f in REQUIRED_FIELDS:
        if not str(payload.get(f, "")).strip():
            errors[f] = f"{f} is required"
    phone = str(payload.get("phoneNumber", "")).strip()
    if phone and not __import__("re").match(r"^[0-9+\-()\s]{7,15}$", phone):
        errors["phoneNumber"] = "Enter a valid phone number"
    try:
        d = payload.get("date")
        t = payload.get("time")
        if d and t:
            tz = get_current_timezone()
            aware_selected = make_aware(datetime.fromisoformat(f"{d}T{t}:00"), tz)
            if aware_selected < datetime.now(tz):
                errors["time"] = "Selected date/time is in the past"
    except Exception:
        errors["time"] = "Invalid date/time"
    return errors

@csrf_exempt
def create_appointment(request):
    # Allow health checks / quick introspection
    if request.method == "GET":
        return JsonResponse(
            {"ok": True, "detail": "POST to create an appointment at this endpoint."},
            status=200
        )

    # Let CORS preflight succeed (if applicable)
    if request.method == "OPTIONS":
        # You can also add CORS headers here if not using django-cors-headers
        return JsonResponse({"ok": True})

    if request.method != "POST":
        return HttpResponseNotAllowed(["GET", "POST", "OPTIONS"])

    # ---- POST path ----
    try:
        payload = json.loads(request.body.decode("utf-8"))
    except Exception:
        return JsonResponse({"ok": False, "error": "Invalid JSON"}, status=400)

    errors = _validate(payload)
    if errors:
        return JsonResponse({"ok": False, "errors": errors}, status=422)

    name = payload["name"].strip()
    phone = payload["phoneNumber"].strip()
    date_str = payload["date"]
    time_str = payload["time"]
    details = payload.get("details", "").strip()
    source = payload.get("source", "web.appointment_form")

    subject = f"New Appointment: {name} — {date_str} {time_str}"
    body = (
        f"New appointment request\n\n"
        f"Name: {name}\n"
        f"Phone: {phone}\n"
        f"Date: {date_str}\n"
        f"Time: {time_str}\n"
        f"Details:\n{details or '-'}\n\n"
        f"Source: {source}"
    )

    try:
        send_mail(
            subject=subject,
            message=body,
            from_email=settings.DEFAULT_FROM_EMAIL,
            recipient_list=[settings.BOOKINGS_TO_EMAIL],
            fail_silently=False,
        )
    except Exception as e:
        # Keep only one except-block
        return JsonResponse({"ok": False, "error": f"Email send failed: {e}"}, status=502)

    return JsonResponse({"ok": True, "message": "Appointment submitted successfully."}, status=201)
