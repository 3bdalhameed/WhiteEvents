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

    # Required fields
    for f in REQUIRED_FIELDS:
        if not str(payload.get(f, "")).strip():
            errors[f] = f"{f} is required"

    # Phone format (simple)
    phone = str(payload.get("phoneNumber", "")).strip()
    if phone and not __import__("re").match(r"^[0-9+\-()\s]{7,15}$", phone):
        errors["phoneNumber"] = "Enter a valid phone number"

    # Datetime not in past
    try:
        d = payload.get("date")
        t = payload.get("time")
        if d and t:
            tz = get_current_timezone()
            aware_selected = make_aware(datetime.fromisoformat(f"{d}T{t}:00"), tz)
            now = datetime.now(tz)
            if aware_selected < now:
                errors["time"] = "Selected date/time is in the past"
    except Exception:
        errors["time"] = "Invalid date/time"

    return errors

@csrf_exempt  # if your frontend is a different origin and you’re not sending CSRF token
def create_appointment(request):
    if request.method == "OPTIONS":
        # Let preflight succeed for CORS
        return JsonResponse({"ok": True})

    if request.method != "POST":
        return HttpResponseNotAllowed(["POST"])

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
        import traceback, sys
        traceback.print_exc(file=sys.stderr)   # prints full stack trace in runserver
        return JsonResponse({"ok": False, "error": f"Email send failed: {e}"}, status=502)
        
    except Exception as e:
        return JsonResponse({"ok": False, "error": f"Email send failed: {e}"}, status=502)

    return JsonResponse({"ok": True, "message": "Appointment submitted successfully."}, status=201)
