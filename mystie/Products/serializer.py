from rest_framework import serializers

from .models import Productsinfo


class ProductSerializer(serializers.ModelSerializer):
    class Meta:
        model = Productsinfo
        fields = '__all__'
