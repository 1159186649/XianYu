from django.db import models

# Create your models here.


class Userinfo(models.Model):
    user_id = models.CharField(max_length=20, default='')
    user_pass = models.CharField(max_length=25, default='')
    user_address = models.CharField(max_length=30, default='')
    user_tele = models.CharField(max_length=15, default='')
    user_email = models.CharField(max_length=20, default='')
    user_sex = models.CharField(max_length=2, default='')

    class Meta:
        db_table = 'userinfo'

    # def __str__(self):
    #     a = self.user_id
    #     b = self.user_birth
    #     return (a+b)
