from rest_framework import serializers

from RegisterUser.models import Userinfo


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Userinfo
        fields = '__all__'
