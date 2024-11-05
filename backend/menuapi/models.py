from django.db import models

# Create your models here.
class menuapi(models.Model):
    id=models.IntegerField(primary_key=True)
    item_name=models.CharField(max_length=100)
    price=models.IntegerField(max_length=100)