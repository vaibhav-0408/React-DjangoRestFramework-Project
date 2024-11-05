from django.contrib import admin

# Register your models here.
from .models import menuapi
@admin.register(menuapi)
class menuadmin(admin.ModelAdmin):
    list_display=['id','item_name','price']