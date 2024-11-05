from rest_framework import serializers
from .models import menuapi
class menu_serailizer(serializers.ModelSerializer):
    class Meta:
        model=menuapi
        fields=['id','item_name','price']
