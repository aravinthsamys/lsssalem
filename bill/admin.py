from django.contrib import admin


# Register your models here.

from .models import invoice
admin.site.register(invoice)