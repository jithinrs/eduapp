# Generated by Django 4.1.4 on 2023-01-03 18:37

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('courseformat', '0005_delete_coursematerial'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='grade',
            field=models.CharField(choices=[('8th grade', '8th grade'), ('9th grade', '9th grade'), ('10th grade', '10th grade'), ('11th grade', '11th grade'), ('12th grade', '12th grade')], default='8th grade', max_length=15),
            preserve_default=False,
        ),
        migrations.CreateModel(
            name='CourseMaterial',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('notes', models.FileField(upload_to='')),
                ('course_id', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, to='courseformat.course')),
            ],
        ),
    ]