# Generated by Django 4.1.4 on 2023-01-03 00:24

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('Authentications', '0015_rename_verified_role_account_verified_student_and_more'),
    ]

    operations = [
        migrations.RenameField(
            model_name='account',
            old_name='verified_student',
            new_name='verified_role',
        ),
        migrations.RemoveField(
            model_name='account',
            name='verified_teacher',
        ),
    ]
