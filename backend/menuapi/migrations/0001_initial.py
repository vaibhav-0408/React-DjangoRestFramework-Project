# Generated by Django 5.0.6 on 2024-10-25 06:20

from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='menuapi',
            fields=[
                ('id', models.IntegerField(primary_key=True, serialize=False)),
                ('item_name', models.CharField(max_length=100)),
                ('price', models.IntegerField(max_length=100)),
            ],
        ),
    ]
