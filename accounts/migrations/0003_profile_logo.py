# Generated by Django 2.2.6 on 2019-11-14 14:34

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0002_auto_20191113_1620'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='logo',
            field=models.ImageField(null=True, upload_to='images/'),
        ),
    ]
