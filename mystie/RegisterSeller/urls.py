from django.urls import path, include

from rest_framework.routers import DefaultRouter
from rest_framework import routers

from RegisterSeller import views
router = routers.SimpleRouter()

router.register('RegisterSeller', views.RegisterSeller)
router.register('Login/Seller', views.LoginSeller)

urlpatterns = [
    path('', include(router.urls)),
]
