# Generated by Django 2.2.6 on 2019-11-15 18:47

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('accounts', '0004_auto_20191115_1842'),
    ]

    operations = [
        migrations.AddField(
            model_name='profile',
            name='team_website',
            field=models.URLField(blank=True, null=True, verbose_name='stats'),
        ),
    ]
