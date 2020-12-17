from django.db import models

# Create your models here.


class Userinfo(models.Model):
    user_id = models.CharField(max_length=25)
    user_pass = models.CharField(max_length=25)
    user_birth = models.CharField(max_length=25)
    user_sex = models.CharField(max_length=10)

    def __str__(self):
        a = self.user_id
        b = self.user_birth
        return (a+b)
