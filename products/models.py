from django.db import models


class Product(models.Model):

    product_name = models.CharField(max_length=63)
    product_img = models.CharField(max_length=255)
    product_price = models.DecimalField(max_digits=15, decimal_places=2)
    product_linkpay = models.CharField(max_length=255)
    product_description = models.CharField(max_length=4095)

    def __str__(self):
        return self.product_name