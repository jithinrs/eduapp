# Generated by Django 4.1.4 on 2023-01-03 06:32

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Teachers', '0014_remove_teachercredentials_teacher_name'),
    ]

    operations = [
        migrations.AddField(
            model_name='teacher',
            name='certificate',
            field=models.FileField(default='', upload_to=''),
        ),
        migrations.DeleteModel(
            name='TeacherCredentials',
        ),
    ]
