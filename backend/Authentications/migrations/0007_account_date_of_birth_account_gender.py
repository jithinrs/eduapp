# Generated by Django 4.1.4 on 2022-12-29 07:48

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('Authentications', '0006_alter_account_roles'),
    ]

    operations = [
        migrations.AddField(
            model_name='account',
            name='date_of_birth',
            field=models.DateField(null=True),
        ),
        migrations.AddField(
            model_name='account',
            name='gender',
            field=models.CharField(choices=[('M', 'Male'), ('F', 'Female'), ('O', 'Other')], max_length=1, null=True),
        ),
    ]
