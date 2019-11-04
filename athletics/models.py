from django.contrib.postgres.fields import ArrayField
from django.contrib.auth import get_user_model
from django.db import models


import datetime
User = get_user_model()


class StudentAthlete(models.Model):

    POSITIION_CHOICES =(
        ('P', ('Pitcher')),
        ('C', ('Catcher')),
        ('1B', ('First Base')),
        ('SS', ('Shortstop')),
        ('2B', ('Second Base')),
        ('3B', ('Third Base')),
        ('OF', ('OutField')),
    )



    GENDER_CHOICES=(
        ('G', ('Girl')),
        ('B', ('Boy')),
    )

    user = models.ForeignKey(User, null=True, on_delete = models.CASCADE)
    image = models.ImageField(upload_to='images/')
    first_name = models.CharField(max_length=250)
    last_name = models.CharField(max_length=250)
    birth_date = models.DateField("date of birth", default=datetime.date.today)
    gender = models.CharField('gender', default='B', choices=GENDER_CHOICES, max_length=1)
    position = ArrayField(
        ArrayField(
            models.CharField(max_length=10, blank=True, choices=POSITIION_CHOICES),
            size=8,
        ),
        size=8,
        null=True
    )
    graduation_date = models.DateField('date of graduation', blank=True, null=True, help_text="If applicable.")
    bio = models.TextField('bio', blank=True, null=True, max_length=500)


    def __str__(self):
        return self.first_name

class City(models.Model):
    name = models.CharField('name', max_length=100)
    state = models.CharField('state', max_length=200)
    zipcode = models.CharField('zipcode', max_length=10)



class School(models.Model):

    SCHOOL_TYPE_CHOICES = (
        ('K5', ('K-5 School')),
        ('MS', ('6-8 School')),
        ('HS', ('High School')),
        ('UN', ('University')),
    )

    school_type = models.CharField('school grade', max_length=2, default="NA", choices=SCHOOL_TYPE_CHOICES)
