from django.db import models
from django.contrib.auth.models import AbstractUser, models
from django.contrib.auth import get_user_model


class User(AbstractUser):
    pass


class Profile(models.Model):

    BATS_CHOICES=(
        ('R', ('Right')),
        ('L', ('Left')),
        ('S', ('Switch')),
    )

    THROW_CHOICES=(
        ('R', ('Right')),
        ('L', ('Left')),
    )
    GENDER_CHOICES=(
        ('G', ('Girl')),
        ('B', ('Boy')),
    )

    POSITIION_CHOICES =(
        ('P', ('Pitcher')),
        ('C', ('Catcher')),
        ('1B', ('First Base')),
        ('SS', ('Shortstop')),
        ('2B', ('Second Base')),
        ('3B', ('Third Base')),
        ('OF', ('OutField')),
    )

    LESSON_CHOICES = (
        ('PITCHING', ('Pitching Lessons')),
        ('HITTING', ('Hitting Lessons')),
        ('FIELDING', ('Fielding Lessons')),
    )

    SPECIALTY_CHOICES = (
        ('Pitching', ('Pitching')),
        ('Hitting', ('Hitting')),
        ('Fielding', ('Fielding')),
    )

    TEAM_CLASS_CHOICES = (
        ('Rookie Leauge', ('Rookie League')),
        ('Low A', ('Low A')),
        ('High A', ('Hige A')),
        ('AA', ('AA')),
        ('AAA', ('AAA')),
        ('Major League', ('Major League'))

    )


    user = models.OneToOneField(get_user_model(), null=True, on_delete=models.CASCADE)
    avatar = models.ImageField(upload_to='images/')
    first_name = models.CharField(blank=True, max_length=250)
    last_name = models.CharField(blank=True, max_length=250)
    age = models.SmallIntegerField(default=0)
    gender = models.CharField(default='B', choices=GENDER_CHOICES, max_length=1)
    location = models.CharField(blank=True, max_length=200)
    graduation_date = models.CharField(blank=True, max_length=4)
    bats = models.CharField(default='R', choices=BATS_CHOICES, max_length=1)
    throws = models.CharField(default='R', choices=THROW_CHOICES, max_length=1)
    weight = models.SmallIntegerField(blank=True)
    school = models.CharField(max_length=200)
    position = models.CharField(default='P', choices=POSITIION_CHOICES, max_length=2)
    bio = models.TextField(blank=True, null=True, max_length=500)
    is_professional = models.BooleanField(default=False)
    team_class= models.CharField(default='AA', choices=TEAM_CLASS_CHOICES, max_length=200)
    mlb_club= models.CharField(blank=True, max_length=200)
    draft_round = models.SmallIntegerField('round:', blank=True, null=True)
    draft_pick = models.SmallIntegerField('pick:', blank=True, null=True)
    stat_link = models.URLField('stats', max_length=200, blank=True, null=True)
    lessons = models.CharField(default='Hitting Lessons', choices=LESSON_CHOICES, max_length=200)
    specialty = models.CharField(default='Hitting', choices=SPECIALTY_CHOICES, max_length=200)
    price = models.IntegerField(default=50)
    stripe_user_id = models.CharField(max_length=255, blank=True, null=True)
    stripe_access_token = models.CharField(max_length=255, blank=True, null=True)


    def __str__(self):
        return self.user.username
