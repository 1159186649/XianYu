from django.db import models

# Create your models here.


class Sellerinfo(models.Model):
    seller_id = models.CharField(max_length=20, default='')
    seller_pass = models.CharField(max_length=25, default='')
    seller_address = models.CharField(max_length=30, default='')
    seller_tele = models.CharField(max_length=15, default='')
    seller_email = models.CharField(max_length=20, default='')
    seller_sex = models.CharField(max_length=2, default='')

    class Meta:
        db_table = 'Sellerinfo'
