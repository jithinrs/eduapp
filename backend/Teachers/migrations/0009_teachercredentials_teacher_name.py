# Generated by Django 4.1.4 on 2022-12-27 12:58

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Teachers', '0008_alter_teachercredentials_teacher_id'),
    ]

    operations = [
        migrations.AddField(
            model_name='teachercredentials',
            name='teacher_name',
            field=models.CharField(blank=True, max_length=255, null=True),
        ),
    ]