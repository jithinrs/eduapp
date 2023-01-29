# Generated by Django 4.1.4 on 2023-01-09 18:44

from django.db import migrations, models
import uuid


class Migration(migrations.Migration):

    dependencies = [
        ('courseformat', '0011_chaptermaterials_file_description_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='slug',
            field=models.UUIDField(default=uuid.uuid4),
        ),
    ]
