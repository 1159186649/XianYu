from django.db import models

# Create your models here.


class Productsinfo(models.Model):
    product_id = models.CharField(max_length=10, default='')
    product_name = models.CharField(max_length=50, default='')
    product_type = models.CharField(max_length=20, default='')
    product_info = models.CharField(max_length=150, default='')
    product_price = models.FloatField(default=0)
    seller_id = models.CharField(max_length=20, default='')
    product_img_url = models.CharField(
        max_length=30, default='assets/goods/.jpg')

    class Meta:
        db_table = 'productinfo'
