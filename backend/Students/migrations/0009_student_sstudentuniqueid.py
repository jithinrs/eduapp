# Generated by Django 4.1.4 on 2023-01-18 06:11

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Students', '0008_coursejoined'),
    ]

    operations = [
        migrations.AddField(
            model_name='student',
            name='sstudentuniqueid',
            field=models.CharField(blank=True, max_length=31, null=True),
        ),
    ]
