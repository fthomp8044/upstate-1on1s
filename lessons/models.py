from django.db import models

# from accounts.models import Seller


class Lesson(models.Model):
    title = models.CharField(max_length=255)
    # description = models.TextField()
    # slug = models.SlugField(max_length=255)
    price = models.DecimalField(max_digits=7, decimal_places=2)
    fee = models.PositiveIntegerField(default=50)
    # seller = models.ForeignKey(Seller, on_delete=models.CASCADE)

    def __str__(self):
        return self.title
