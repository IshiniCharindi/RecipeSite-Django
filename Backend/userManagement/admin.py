from django.contrib import admin
from .models import UserManagement
from .models import Contact

# Register your models here.
admin.site.register(UserManagement)

@admin.register(Contact)
class ContactAdmin(admin.ModelAdmin):
    list_display = ['fullname', 'email', 'phone_number', 'created_at']
    search_fields = ['fullname', 'email', 'phone_number']
    list_filter = ['created_at']