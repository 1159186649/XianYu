from rest_framework import serializers

from RegisterSeller.models import Sellerinfo


class SellerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Sellerinfo
        fields = '__all__'
