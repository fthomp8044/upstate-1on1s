# Generated by Django 2.2.6 on 2019-11-07 19:01

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0014_profile_specialty'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='first_name',
            field=models.CharField(default='blank', max_length=250),
        ),
        migrations.AddField(
            model_name='profile',
            name='last_name',
            field=models.CharField(default='blank', max_length=250),
        ),
    ]
