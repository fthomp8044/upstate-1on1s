from django.db import models

from accounts.models import Profile


class Lesson(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    slug = models.SlugField(max_length=255)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    profile = models.ForeignKey(Profile, on_delete=models.CASCADE)
    avialbility_start = models.DateTimeField(auto_now_add=True)
    avialbility_end = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title
